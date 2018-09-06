import React, { Component } from 'react';
import {
    Platform, Dimensions, StyleSheet, Text, View,
    TouchableOpacity, ScrollView, Alert,
    FlatList, backgroundColor, Vibration
} from 'react-native';
import Icon from '../../../utils/Icons.js';
import styles from './Styles';
import * as Colors from '../../../utils/colors';
import Header from '../../../components/Header/header.js';
import { AsyncStorage } from 'react-native';
import * as url from '../../../lib/api.js';
import { apiCaller } from '../../../lib/Fetcher.js';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Loader from '../../Loader/Loader.js';
import { connect } from 'react-redux';
import { Toast } from 'native-base';

class AddressList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            Address: [],
            selected: 0,
            loader: false,
        }
    }

    componentDidMount() {
        const didBlurSubscription = this.props.navigation.addListener(
            'willFocus',
            payload => {
                AsyncStorage.getItem('Address').then((Address) => {
                    const UserAddress = Address ? JSON.parse(Address) : [];
                    this.state.Address.push(UserAddress);
                    this.setState({ loader: false })
                })
            }
        );
    }

    delete = (index) => {
        Alert.alert(
            'Are you sure?',
            'Want to delete this item?',
            [
                { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
                {
                    text: 'OK', onPress: () => {
                        this.state.Address[0].splice(index, 1)
                        AsyncStorage.setItem('Address', JSON.stringify(this.state.Address[0]));
                        Vibration.vibrate(150)
                        Toast.show({
                            text: 'Address deleted successfully.',
                            duration: 3000
                        })
                        this.setState({ loader: false })
                    }
                },
            ],
            { cancelable: false }
        )
    }

    select = (index) => {
        this.setState({ selected: index })
    }

    placeOrder = () => {
        this.setState({ loader: true })
        var order = this.state.Address[0].slice(this.state.selected, this.state.selected + 1)
        var place = JSON.stringify(order[0])
        let formData = new FormData();
        formData.append('address', place)
        if (this.state.Address[0].length !== 0) {
            apiCaller(url.host + url.Order, 'POST', { access_token: this.props.user_data.access_token }, formData,
                (response) => {
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
        else {
            Vibration.vibrate(200);
            Toast.show({
                text: 'Please, provide your address.',
                duration: 3000,
                type: "warning"
            })
            this.setState({ loader: false })
        }
    }

    render() {
        return (
            <View style={styles.container} >
                <Header
                    title={'Address List'}
                    mainTitle={false}
                    isDrawer={false}
                    isSearch={false}
                    isAdd={true}
                    back={() => { this.props.navigation.goBack() }}
                    search={() => { this.props.navigation.replace('AddAddress') }} />
                {this.state.loader ? <Loader /> : null}
                <ScrollView>
                    <View style={styles.container1}>
                        <Text style={styles.shippping}>Shipping Address</Text>
                        <FlatList
                            onEndReachedThreshold={0.1}
                            data={this.state.Address[0]}
                            keyExtractor={(item, index) => index + ""}
                            extraData={this.state}
                            renderItem={({ item, index }) =>
                                <View style={styles.itemRow}>
                                    {console.log('in flatlist')}
                                    <TouchableOpacity style={styles.radioView} onPress={() => this.select(index)} >
                                        <View style={[styles.radio, this.state.selected == index ? { backgroundColor: Colors.gRadioChecked } : { backgroundColor: Colors.primary }]} />
                                    </TouchableOpacity>
                                    <View style={styles.addressBox}>
                                        <View style={styles.HeadView}>
                                            <Text style={styles.Heading}>{this.props.user_data.first_name} {this.props.user_data.last_name}</Text>
                                            <TouchableOpacity onPress={() => this.delete(index)}>
                                                <Icon name="multiply" size={15} color={Colors.blackSecondary} />
                                            </TouchableOpacity>
                                        </View>
                                        <Text style={styles.shippping}>
                                            {item}
                                        </Text>
                                    </View>
                                </View>
                            } />
                        <View style={styles.btnView}>
                            <TouchableOpacity style={styles.buttonStyle} onPress={() => this.placeOrder()}>
                                <Text style={styles.btnTxt}> PLACE ORDER </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return state;
};

export default connect(mapStateToProps)(AddressList);