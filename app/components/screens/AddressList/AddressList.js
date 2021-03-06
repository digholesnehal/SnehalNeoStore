import React, { Component } from 'react';
import {
    Platform, Dimensions, StyleSheet, Text, View,
    TouchableOpacity, ScrollView, Alert,
    FlatList, backgroundColor, Vibration
} from 'react-native';
import Icon from '../../../utils/Icons.js';
import FeatherIcon from 'react-native-vector-icons/dist/FontAwesome';
// const feather = require('feather-icons')
// import Feather from 'feather-icons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
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
import Styles from './Styles';

class AddressList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selected: 0,
            loader: false,
        }
        this.UserAddress = []
    }

    componentDidMount() {
        const didBlurSubscription = this.props.navigation.addListener(
            'willFocus',
            payload => {
                AsyncStorage.getItem('Address').then((Address) => {
                    this.UserAddress = JSON.parse(Address)
                    this.setState({ loader: false })
                })
            }
        );
    }

    placeOrder = () => {

        if (this.UserAddress[0].length !== 0) {
            this.props.navigation.navigate('MakePayment', { UserAddress: this.UserAddress, selected: this.state.selected })
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
                    search={() => { this.props.navigation.navigate('AddAddress') }} />
                {this.state.loader ? <Loader /> : null}
                <ScrollView>
                    <View style={styles.container1}>
                        <Text style={styles.shippping}>Shipping Address</Text>
                        <FlatList
                            onEndReachedThreshold={0.1}
                            data={this.UserAddress}
                            keyExtractor={(item, index) => index + ""}
                            extraData={this.state}
                            renderItem={({ item, index }) =>
                                <View style={styles.itemRow}>
                                    <TouchableOpacity style={styles.radioView} onPress={() => this.select(index)} >
                                        <View style={[styles.radio, this.state.selected == index ? { backgroundColor: Colors.gRadioChecked } : { backgroundColor: Colors.primary }]} />
                                    </TouchableOpacity>
                                    <View style={styles.addressBox}>
                                        <View style={styles.HeadView}>
                                            <Text style={styles.Heading}>{this.props.user_data.first_name} {this.props.user_data.last_name}</Text>
                                            <Text style={styles.shippping}>
                                                {`${item.address}, ${item.landmark}, ${item.city},\n${item.state}-${item.zip}. ${item.country}`}
                                            </Text>
                                        </View>
                                        <View style={styles.iconsView}>
                                            <TouchableOpacity onPress={() => this.delete(index)}>
                                                <Icon name="multiply" size={15} color={Colors.blackSecondary} />
                                            </TouchableOpacity>
                                            <TouchableOpacity onPress={() => this.props.navigation.navigate('AddAddress', { Index: index, Item: item })}>
                                                <FeatherIcon name="edit" size={18} color={Colors.blackSecondary} />
                                            </TouchableOpacity>
                                        </View>
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
    return state;
};

export default connect(mapStateToProps)(AddressList);