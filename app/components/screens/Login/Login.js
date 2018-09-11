import React, { Component } from 'react';
import {
    KeyboardAvoidingView, Platform, StyleSheet, Dimensions, Text, View,
    ScrollView, ImageBackground, TextInput, TouchableOpacity, ActivityIndicator
} from 'react-native';
import styles from "./Styles";
import Icon from '../../../utils/Icons.js';
import { AsyncStorage } from 'react-native';
import * as url from '../../../lib/api.js';
import { apiCaller } from '../../../lib/Fetcher.js';
import Loader from '../../Loader/Loader.js';
import SplashScreen from 'react-native-splash-screen';
import { connect } from "react-redux";
import { Toast } from 'native-base';

const setProfile = (state) => {
    return {
        type: 'EDIT',
        state,
    }
}

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: 'digholesnehal@gmail.com',
            password: '123456789',
            loader: false,
        }
    }
    componentDidMount() {
        SplashScreen.hide();
    }
    login() {
        let formData = new FormData();
        formData.append('email', this.state.username)
        formData.append('password', this.state.password)
        apiCaller(url.host + url.login, 'POST', {}, formData,
            (response) => {
                this.setState({ loader: false })
                if (response.status == 200) {
                    AsyncStorage.setItem('access_token', response.data.access_token, () => {
                        apiCaller(url.host + url.fAccDetails, 'GET', {}, null,
                            (response) => {
                                if (response.status == 200) { // Access Token valid please send to homescreen with response
                                    this.props.setProfile(response.data)
                                    this.props.navigation.replace('DrawerStack');
                                }
                                else { // Some Error. Stay on this page.
                                    if (response.hasOwnProperty('user_msg')) {
                                        Toast.show({
                                            text: response.user_msg,
                                            duration: 5000
                                        })
                                    }
                                    else {
                                        Toast.show({
                                            text: response.message,
                                            duration: 5000
                                        })
                                    }
                                }
                            }
                        );
                    });
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

    validate = () => {
        this.setState({ loader: true })
        var reg = /^[a-zA-Z{1}]+\w.+([\.-]?\w+)*@\w+([\.-]?\w+){1}(\.\w{2,3})$/;
        var alNum = /^([a-zA-Z0-9]){5,10}$/;
        if ((!this.state.username.match(reg) || this.state.username == "") || (!this.state.password.match(alNum) || this.state.password == "")) {
            alert("Username or Password is Invalid");
            this.setState({ loader: false })
        }
        else
            this.login();
    }

    render() {
        return (
            <KeyboardAvoidingView style={{ flex: 1, height: Dimensions.get('screen').height }}>
                <ScrollView style={{ flex: 1 }}>
                    <ImageBackground style={styles.container} source={require('../../../assets/images/Android_Master_bg.jpg')}>
                        {this.state.loader ? <Loader /> : null}


                        <View style={styles.loginHead}>
                            <Text style={styles.headFont}> NeoSTORE </Text>
                        </View>

                        <View style={styles.loginMid}>
                            <View style={styles.userPass}>
                                <Icon name='user' style={styles.icon} />
                                <TextInput returnKeyType={'next'}
                                    onSubmitEditing={() => { this.input2.focus(); }}
                                    onChangeText={(changedText) => { this.setState({ "username": changedText }) }}
                                    style={styles.textField} placeholder="Username" value={this.state.username} placeholderTextColor="white">
                                </TextInput>
                            </View>

                            <View style={styles.userPass}>
                                <Icon name="Lock" style={styles.icon} />
                                <TextInput ref={(input) => { this.input2 = input; }}
                                    onChangeText={(changedText) => { this.setState({ "password": changedText }) }} secureTextEntry={true} style={styles.textField} placeholder="Password" placeholderTextColor="white" value={this.state.password}>
                                </TextInput>
                            </View>
                            <View style={styles.pass}>
                                <TouchableOpacity style={styles.buttonStyle} onPress={() => this.validate()}>
                                    <Text style={styles.btnTxt}> LOGIN </Text>
                                </TouchableOpacity>
                            </View>
                            <TouchableOpacity style={styles.fgotPass} onPress={() => this.props.navigation.navigate('ForgotPass')}>
                                <Text style={styles.fgotPass}>
                                    Forgot Password?
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.loginFoot}>
                            <View style={styles.bottom}>
                                <Text style={styles.noAcc}>
                                    DONT HAVE AN ACCOUNT?
                                </Text>
                                <TouchableOpacity style={styles.newAcc} onPress={() => this.props.navigation.navigate('Register')}>
                                    <Icon name="addAcc" size={30} color="#fff" />
                                </TouchableOpacity>
                            </View>
                        </View>


                    </ImageBackground>
                </ScrollView>
            </KeyboardAvoidingView >
        );
    }
}
const mapStateToProps = (state) => {
    return state;
};

export default connect(mapStateToProps, { setProfile })(Login);