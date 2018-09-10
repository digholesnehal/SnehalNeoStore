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
            address: '',
            landmark: '',
            city: '',
            state: '',
            zip: '',
            country: '',
            UserAdd: '',
            Index: 0,
            addList: []
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
            this.state.UserAdd = [{ address: this.state.address, landmark: this.state.landmark, city: this.state.city, state: this.state.state, zip: this.state.zip, country: this.state.country }]
            this.state.UserAdd1 = { address: this.state.address, landmark: this.state.landmark, city: this.state.city, state: this.state.state, zip: this.state.zip, country: this.state.country }
            AsyncStorage.getItem('Address').then((Address) => {
                this.state.addList = Address ? JSON.parse(Address) : [];
                if (this.state.Index == 0) {
                    this.state.addList = this.state.addList.concat(this.state.UserAdd);
                    console.log('addList', this.state.addList)
                    AsyncStorage.setItem('Address', JSON.stringify(this.state.addList), () => {
                        Toast.show({
                            text: 'Address added successfully.',
                            duration: 3000
                        })
                        this.props.navigation.replace('AddressList');
                    });
                }
                else {
                    this.state.addList.splice(this.props.navigation.state.params.Index, 1, this.state.UserAdd1);
                    AsyncStorage.setItem('Address', JSON.stringify(this.state.addList), () => {
                        Toast.show({
                            text: 'Address edited successfully.',
                            duration: 3000
                        })
                        console.log(this.state.addList)
                        this.props.navigation.replace('AddressList');
                    });
                }
            });
        }
    }

    componentDidMount() {
        if (this.props.navigation.state.params == undefined) {
        }
        else {
            console.log('addressList2', this.props.navigation.state.params.Item)
            this.setState({
                address: this.props.navigation.state.params.Item.address,
                landmark: this.props.navigation.state.params.Item.landmark,
                city: this.props.navigation.state.params.Item.city,
                state: this.props.navigation.state.params.Item.state,
                zip: this.props.navigation.state.params.Item.zip,
                country: this.props.navigation.state.params.Item.country,
                Index: 2,
            });
            console.log('states', this.state)
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