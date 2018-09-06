import React, { Component } from 'react';
import {
    Platform, Dimensions, ScrollView, StyleSheet,
    KeyboardAvoidingView, Image, Alert, Text,
    TextInput, TouchableOpacity, View
} from 'react-native';
import styles from "./Styles";
import Header from '../../../components/Header/header.js';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { apiCaller } from '../../../lib/Fetcher.js';
import * as Colors from '../../../utils/colors';
import { AsyncStorage } from 'react-native';
import { Toast } from 'native-base';


export default class AddAddress extends Component {
    constructor(props) {
        super(props);

        this.state = {
            address: 'Santosh Nagar, TTN college road, Khadaki',
            landmark: 'Near Anand Park appartment',
            city: 'Akola',
            state: 'Maharashtra',
            zip: '444001',
            country: 'India',
            UserAdd: '',
        }
    }

    AddAddress = () => {
        var alphaExp = /^[a-zA-Zäöüß]+$/;
        var num = /^([0-9*\+\#]){4,8}$/;

        if (this.state.address == "") {
            Toast.show({
                text: 'Address field sould not remain empty.',
                duration: 3000
            })
            return false;
        }

        else if (this.state.landmark == "") {
            Toast.show({
                text: 'Landmark..??',
                duration: 3000
            })
            return false;
        }
        else if (this.state.city == "" || !this.state.city.match(alphaExp)) {
            Toast.show({
                text: 'City..??',
                duration: 3000
            })
            return false;
        }
        else if (this.state.state == "" || !this.state.state.match(alphaExp)) {
            Toast.show({
                text: 'State..??',
                duration: 3000
            })
            return false;
        }
        else if (this.state.zip == "" || !this.state.zip.match(num)) {
            Toast.show({
                text: 'Zip Code..??',
                duration: 3000
            })
            return false;
        }
        else if (this.state.country == "" || !this.state.country.match(alphaExp)) {
            Toast.show({
                text: 'Country..??',
                duration: 3000
            })
            return false;
        }
        else {
            this.state.UserAdd = this.state.address + ', ' + this.state.landmark
                + ', ' + this.state.city + ',\n' + this.state.state + ' - ' + this.state.zip + '.' + this.state.country;

            AsyncStorage.getItem('Address')
                .then((Address) => {
                    const UserAddress = Address ? JSON.parse(Address) : [];
                    UserAddress.push(this.state.UserAdd);
                    AsyncStorage.setItem('Address', JSON.stringify(UserAddress), () => {
                        Toast.show({
                            text: 'Address added successfully.',
                            duration: 3000
                        })
                        this.props.navigation.replace('AddressList');
                    });
                });
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Header
                    title={'Add Address'}
                    mainTitle={false}
                    isDrawer={false}
                    isSearch={true}
                    back={() => { this.props.navigation.replace('AddressList') }} />
                <KeyboardAwareScrollView style={styles.container}>
                    <View style={styles.container1}>
                        <View style={styles.addressHead}>
                            <Text style={styles.Headings}>ADDRESS</Text>
                            <TextInput
                                onChangeText={(changedText) => { this.setState({ "address": changedText }) }}
                                value={this.state.address} style={styles.AddressTextField} multiline={true}>
                            </TextInput>
                            <Text style={styles.Headings}>LANDMARK</Text>
                            <TextInput
                                onChangeText={(changedText) => { this.setState({ "landmark": changedText }) }}
                                value={this.state.landmark} style={styles.TextField}>
                            </TextInput>
                        </View>
                        <View style={styles.addressMid}>
                            <View style={styles.hrPartition}>
                                <Text style={styles.Headings}>CITY</Text>
                                <TextInput
                                    onChangeText={(changedText) => { this.setState({ "city": changedText }) }}
                                    value={this.state.city} style={styles.TextField}>
                                </TextInput>
                                <Text style={styles.Headings}>ZIP CODE</Text>
                                <TextInput
                                    keyboardType={'numeric'}
                                    onChangeText={(changedText) => { this.setState({ "zip": changedText }) }}
                                    value={this.state.zip} style={styles.TextField}>
                                </TextInput>
                            </View>
                            <View style={styles.hrPartition}>
                                <Text style={styles.Headings}>STATE</Text>
                                <TextInput
                                    onChangeText={(changedText) => { this.setState({ "state": changedText }) }}
                                    value={this.state.state} style={styles.TextField}>
                                </TextInput>
                                <Text style={styles.Headings}>COUNTRY</Text>
                                <TextInput
                                    onChangeText={(changedText) => { this.setState({ "country": changedText }) }}
                                    value={this.state.country} style={styles.TextField}>
                                </TextInput>
                            </View>
                        </View>
                        <View style={styles.button}>
                            <TouchableOpacity style={styles.buttonStyle} onPress={() => this.AddAddress()}>
                                <Text style={styles.btnTxt}> SAVE ADDRESS </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </KeyboardAwareScrollView>
            </View>
        )
    }
}