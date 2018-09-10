import React, { Component } from 'react';
import {
    Platform, StyleSheet, Dimensions, Text, View, Image, Vibration,
    ImageBackground, TextInput, TouchableOpacity, ActivityIndicator
} from 'react-native';
import styles from "./Styles";
import Icon from '../../../utils/Icons.js';
import Header from '../../Header/header.js';
import stripe from 'tipsi-stripe';
import * as URL from '../../../lib/api.js';
import { apiCaller } from '../../../lib/Fetcher.js';
import { Toast } from 'native-base';
import AddressList from '../AddressList/AddressList.js';

export default class MakePayment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loader: false,
            selected: this.props.navigation.state.params.selected,
            access_token: this.props.navigation.state.access_token
        }
        this.UserAddress = this.props.navigation.state.params.UserAddress
        console.log(this.props.navigation.state.params)
    }

    MakePayment = async () => {
        const options = {
            requiredBillingAddressFields: 'full',
            prefilledInformation: {
                billingAddress: {
                    name: 'Gunilla Haugeh',
                    line1: 'Canary Place',
                    line2: '3',
                    city: 'Macon',
                    state: 'Georgia',
                    country: 'US',
                    postalCode: '31217',
                },
            },
        }
        stripe.setOptions({
            publishableKey: 'pk_test_Md3JgTmcKURhASeRffK4Mu3n',
            merchantId: 'MERCHANT_ID',
            androidPayMode: 'test',
        })
        const token = await stripe.paymentRequestWithCardForm(options)
        // console.log(token);
        fetch(URL.Payment, {
            method: 'POST',
            body: token.tokenId
        }).then((response) => {
            if (response.status == 200) {
                this.setState({ loader: true })
                var order = this.UserAddress[this.state.selected]
                var place = JSON.stringify(order[0])
                let formData = new FormData();
                formData.append('address', place)
                apiCaller(URL.host + URL.Order, 'POST', { access_token: this.state.access_token }, formData,
                    (response) => {
                        console.log('abc', response);
                        this.setState({ loader: false })
                        if (response.status == 200) {
                            Vibration.vibrate(150)
                            Toast.show({
                                text: response.user_msg,
                                duration: 3000
                            })
                            this.props.navigation.replace('DrawerStack');
                        }
                        else {
                            Toast.show({
                                text: response.user_msg,
                                type: "warning",
                                duration: 3000
                            })
                            this.setState({ loader: false })
                        }
                    });
            }
        })
    }


    render() {
        return (
            <View style={styles.container}>
                <Header
                    title={'Make Payment'}
                    mainTitle={false}
                    isDrawer={false}
                    isSearch={false}
                    back={() => { this.props.navigation.goBack(null) }} />
                <ImageBackground style={styles.container} source={require('../../../assets/images/Android_Master_bg.jpg')}>
                    <View style={styles.btnView}>
                        <TouchableOpacity style={styles.buttonStyle} onPress={() => this.MakePayment()}>
                            <Text style={styles.btnTxt}> Make Payment </Text>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
            </View>
        )
    }
}
