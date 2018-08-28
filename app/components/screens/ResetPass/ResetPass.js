import React, { Component } from 'react';
import {
    Platform, Dimensions, ScrollView, StyleSheet, Text, View, KeyboardAvoidingView,
    ImageBackground, TextInput, TouchableOpacity
} from 'react-native';
import styles from "./Styles";
import Icon from '../../../utils/Icons.js';
import Header from '../../../components/Header/header.js';
import { primary } from '../../../utils/colors.js';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { userObj, userProvider } from '../../../lib/UserProvider.js';
import { apiCaller } from '../../../lib/Fetcher.js';
import * as url from '../../../lib/api.js';

export default class ResetPass extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loader: false,
            password: '',
            npassword: '',
            cpassword: '',
            access_token: userObj.user_data.access_token,
        }
    }

    validate = () => {
        console.log(userObj);
        var alNum = /^([a-zA-Z0-9]){5,10}$/;
        if (this.state.password == "" || !this.state.password.match(alNum)) {
            alert("Please enter the correct password");
            return false;
        }
        else if (!this.state.npassword.match(alNum)) {
            alert("Password should contain 5-10 alphanumeric characters")
        }
        else if (this.state.cpassword != this.state.npassword) {
            alert("Password should be same as above");
            return false;
        }
        else if (this.state.cpassword == "") {
            alert("Please confirm the password");
            return false;
        }
        else {
            this.reset()
        }
    }
    reset() {
        thi.setState({ loader: true })
        let formData = new FormData();
        formData.append('old_password', this.state.password)
        formData.append('password', this.state.npassword)
        formData.append('confirm_password', this.state.cpassword)
        return apiCaller(
            url.host + url.change,
            'POST', { access_token: this.state.access_token }, formData,
            (response) => {
                this.setState({ loader: false })
                if (response.status == 200) {
                    alert(response.user_msg);
                }
                else {
                    if (response.hasOwnProperty('user_msg')) {
                        alert(response.user_msg);
                    }
                    else {
                        alert(response.message);
                    }
                }
            }
        );
    }

    render() {
        return (

            <View style={styles.container}>
                <ImageBackground style={styles.container} source={require('../../../assets/images/Android_Master_bg.jpg')}>
                    <Header
                        title={'Reset Password'}
                        isDrawer={false}
                        isSearch={false}
                        back={() => { this.props.navigation.goBack(null) }} />
                    {this.state.loader ? <Loader /> : null}
                    <View style={styles.fpHead}>
                        <Text style={styles.headFont}> NeoSTORE </Text>
                    </View>

                    <View style={styles.fpMid}>
                        <View style={styles.userPass}>
                            <Icon name="Lock" style={styles.icon} />
                            <TextInput onChangeText={(changedText) => { this.setState({ "password": changedText }) }} value={this.state.username}
                                style={styles.textField} placeholder="Current Password" placeholderTextColor={primary}>
                            </TextInput>
                        </View>

                        <View style={styles.userPass}>
                            <Icon name="Lock" style={styles.icon} />
                            <TextInput onChangeText={(changedText) => { this.setState({ "npassword": changedText }) }} value={this.state.npassword}
                                style={styles.textField} placeholder="New Password" placeholderTextColor={primary}>
                            </TextInput>
                        </View>

                        <View style={styles.userPass}>
                            <Icon name="Lock" style={styles.icon} />
                            <TextInput onChangeText={(changedText) => { this.setState({ "cpassword": changedText }) }} value={this.state.cpassword}
                                style={styles.textField} placeholder="Confirm Password" placeholderTextColor={primary}>
                            </TextInput>
                        </View>
                        <View style={styles.pass}>
                            <TouchableOpacity style={styles.buttonStyle} onPress={() => this.validate()}>
                                <Text style={styles.btnTxt}> Reset Password </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ImageBackground>
            </View >
        );
    }

}