import React, { Component } from 'react';
import {
    Platform, Dimensions, ScrollView, StyleSheet, Text, View,
    KeyboardAvoidingView, Image, Alert,
    TextInput, TouchableOpacity
} from 'react-native';
import styles from "./Styles";
import Header from '../../../components/Header/header.js';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { userObj, userProvider } from '../../../lib/UserProvider.js';
import { apiCaller } from '../../../lib/Fetcher.js';
import * as url from '../../../lib/api.js';
import * as Colors from '../../../utils/colors';


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
            loader: false,
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
                    back={() => { this.props.navigation.goBack(null) }} />
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
                        <TouchableOpacity style={styles.buttonStyle} onPress={() => this.props.navigation.navigate('AddressList')}>
                            <Text style={styles.btnTxt}> SAVE ADDRESS </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}