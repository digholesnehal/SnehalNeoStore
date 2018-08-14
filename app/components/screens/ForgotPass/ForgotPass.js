import React, { Component } from 'react';
import {
    Platform, Dimensions, ScrollView, StyleSheet, Text, View, KeyboardAvoidingView,
    ImageBackground, TextInput, TouchableOpacity
} from 'react-native';
import styles from "./Styles";
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import Header from '../../../components/Header/header.js';
import { primary } from '../../../utils/colors.js'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import * as url from '../../../lib/api';
import { AsyncStorage } from 'react-native';
import { apiCaller } from '../../../lib/Fetcher';

export default class ForgotPass extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email: 'snehal.dighole@neosofttech.com',
        }
    }

    userCheck() {
        let formData = new FormData();
        formData.append('email', this.state.email)
        AsyncStorage.setItem('email', this.state.email)
        console.log(formData)
        apiCaller(url.host + url.forgot, 'POST', {}, formData,
            callBack = (response) => {
                if (response.status == 200) {
                    AsyncStorage.getItem('email').then((value) => {
                    })
                }
                else {
                    alert(response.user_msg)
                    AsyncStorage.getItem('email').then((value) => {
                    }).catch = ((error) => {
                        alert(error.message);
                    })
                }

            });
    }

    validate = () => {
        var reg = /^[a-zA-Z{1}]+\w.+([\.-]?\w+)*@\w+([\.-]?\w+){1}(\.\w{2,3})$/;
        var alNum = /^([a-zA-Z0-9]){5,10}$/;
        if (this.state.email == "") {
            alert("Please enter your email address");
            return false
        }
        else if (!this.state.email.match(reg)) {
            alert("Enter valid email address")
            return false
        }
        else {
            this.userCheck();
        }
    }

    render() {
        return (

            <View style={styles.container}>
                <ImageBackground style={styles.container} source={require('../../../assets/images/Android_Master_bg.jpg')}>
                    <Header
                        title={'Forgot Password'}
                        mainTitle={false}
                        isDrawer={false}
                        isSearch={false}
                        back={() => { this.props.navigation.goBack(null) }} />
                    <KeyboardAwareScrollView style={flex = 1}>
                        <View style={styles.fpHead}>
                            <Text style={styles.headFont}> NeoSTORE </Text>
                        </View>

                        <View style={styles.fpMid}>
                            <View style={styles.userPass}>
                                <Icon name="user" style={styles.icon} />
                                <TextInput onChangeText={(changedText) => { this.setState({ "email": changedText }) }} value={this.state.email}
                                    style={styles.textField} placeholder="email" placeholderTextColor={primary}>
                                </TextInput>
                            </View>
                            <View style={styles.pass}>
                                <TouchableOpacity style={styles.buttonStyle} onPress={() => this.validate()} style={styles.buttonStyle}>
                                    <Text style={styles.btnTxt}> Send Password </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </KeyboardAwareScrollView>
                </ImageBackground>
            </View>
        );
    }

}