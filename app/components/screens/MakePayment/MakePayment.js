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
import { connect } from 'react-redux';

const setDelete = (state) => {
    return {
        type: 'EDIT',
        state,
    }
}

class MakePayment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loader: false,
            access_token: this.props.user_data.access_token,
        }
        this.UserAddress = this.props.navigation.state.params.UserAddress[this.props.navigation.state.params.selected]
        this.URL = Platform.OS == 'ios' ? URL.Payios : URL.Payment
    }

    MakePayment = async () => {
        const options = {
            requiredBillingAddressFields: 'full',
            prefilledInformation: {
                billingAddress: {
                    name: this.props.user_data.first_name + ' ' + this.props.user_data.last_name,
                    line1: this.UserAddress.address,
                    line2: this.UserAddress.landmark,
                    city: this.UserAddress.city,
                    state: this.UserAddress.state,
                    country: this.UserAddress.country,
                    postalCode: this.UserAddress.zip,
                },
            },
        }
        stripe.setOptions({
            publishableKey: 'pk_test_Md3JgTmcKURhASeRffK4Mu3n',
            merchantId: 'MERCHANT_ID',
            androidPayMode: 'test',
        })
        const token = await stripe.paymentRequestWithCardForm(options)
        fetch(this.URL, {
            method: 'POST',
            body: token.tokenId
        }).then((response) => {
            if (response.status == 200) {
                this.setState({ loader: true })
                var place = JSON.stringify(this.UserAddress)
                let formData = new FormData();
                formData.append('address', place)
                apiCaller(URL.host + URL.Order, 'POST', { access_token: this.state.access_token }, formData,
                    (response) => {
                        this.setState({ loader: false })
                        if (response.status == 200) {
                            Vibration.vibrate(150)
                            Toast.show({
                                text: response.user_msg,
                                duration: 3000
                            })
                            this.props.setDelete({ 'total_carts': 0 })
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
        }).catch((error) => {
            Toast.show({
                text: error.message,
                duration: 5000
            })
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

const mapStateToProps = (state) => {
    return state;
};

export default connect(mapStateToProps, { setDelete })(MakePayment);