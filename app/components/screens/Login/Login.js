import React, { Component } from 'react';
import {
    Platform, StyleSheet, Dimensions, Text, View,
    ImageBackground, TextInput, TouchableOpacity, ActivityIndicator
} from 'react-native';
import styles from "./Styles";
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { AsyncStorage } from 'react-native';
import * as url from '../../../lib/api.js';
import { apiCaller } from '../../../lib/Fetcher.js';
import Loader from '../../Loader/Loader.js';
import { userObj, userProvider } from '../../../lib/UserProvider.js';
import SplashScreen from 'react-native-splash-screen'

export default class Login extends Component {
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
        this.setState({ loader: true })
        apiCaller(url.host + url.login, 'POST', {}, formData,
            (response) => {
                this.setState({ loader: false })
                if (response.status == 200) {

                    AsyncStorage.setItem('access_token', response.data.access_token, () => {
                        apiCaller(url.host + url.fAccDetails, 'GET', {}, null,
                            (response) => {
                                if (response.status == 200) { // Access Token valid please send to homescreen with response
                                    userProvider.setUserObj(response.data);
                                    this.props.navigation.replace('DrawerStack');
                                }
                                else { // Some Error. Stay on this page.
                                    if (response.hasOwnProperty('user_msg')) {
                                        alert(response.user_msg);
                                    }
                                    else {
                                        alert(response.message);
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
        var reg = /^[a-zA-Z{1}]+\w.+([\.-]?\w+)*@\w+([\.-]?\w+){1}(\.\w{2,3})$/;
        var alNum = /^([a-zA-Z0-9]){5,10}$/;
        if ((!this.state.username.match(reg) || this.state.username == "") || (!this.state.password.match(alNum) || this.state.password == "")) {
            alert("Username or Password is Invalid");
        }
        else
            this.login();
    }

    render() {
        return (
            <View style={styles.container}>
                <ImageBackground style={styles.container} source={require('../../../assets/images/Android_Master_bg.jpg')}>
                    {this.state.loader ? <Loader /> : null}
                    <KeyboardAwareScrollView style={flex = 1}>
                        <View style={styles.loginHead}>
                            <Text style={styles.headFont}> NeoSTORE </Text>
                        </View>
                        <View style={styles.loginMid}>
                            <View style={styles.userPass}>
                                <Icon name="user" style={styles.icon} />
                                <TextInput onChangeText={(changedText) => { this.setState({ "username": changedText }) }} style={styles.textField} placeholder="Username" value={this.state.username} placeholderTextColor="white">
                                </TextInput>
                            </View>

                            <View style={styles.userPass}>
                                <Icon name="lock" style={styles.icon} />
                                <TextInput onChangeText={(changedText) => { this.setState({ "password": changedText }) }} secureTextEntry={true} style={styles.textField} placeholder="Password" placeholderTextColor="white" value={this.state.password}>
                                </TextInput>
                            </View>
                        </View>
                        <View style={styles.loginMid}>
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
                                    <Icon name="plus" size={40} color="#fff" />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </KeyboardAwareScrollView>
                </ImageBackground>
            </View>
        );
    }
}