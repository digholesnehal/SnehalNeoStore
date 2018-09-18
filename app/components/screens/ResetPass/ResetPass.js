import React, { Component } from 'react';
import {
    Platform, Dimensions, ScrollView, StyleSheet, Text, View, KeyboardAvoidingView,
    ImageBackground, TextInput, TouchableOpacity, AsyncStorage
} from 'react-native';
import styles from "./Styles";
import Icon from '../../../utils/Icons.js';
import Header from '../../../components/Header/header.js';
import { primary } from '../../../utils/colors.js';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { apiCaller } from '../../../lib/Fetcher.js';
import * as url from '../../../lib/api.js';
import { Toast } from 'native-base';
import { connect } from 'react-redux';
import Loader from '../../Loader/Loader.js';
import { StackActions, NavigationActions } from 'react-navigation';

class ResetPass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loader: false,
            password: '',
            npassword: '',
            cpassword: '',
            access_token: this.props.user_data.access_token,
        }
    }

    validate = () => {
        var alNum = /^([a-zA-Z0-9]){5,10}$/;
        if (this.state.password == "" || !this.state.password.match(alNum)) {
            Toast.show({
                text: "Please insert the correct password.",
                duration: 3000
            })
            return false;
        }

        else if (this.state.cpassword != this.state.npassword) {
            Toast.show({
                text: "Password should be same as above",
                duration: 3000
            })
            return false;
        }
        else {
            this.reset()
        }
    }
    reset() {
        this.setState({ loader: true })
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
                    Toast.show({
                        text: response.user_msg,
                        duration: 3000
                    })
                    AsyncStorage.removeItem('access_token', (err) => {
                        const resetAction = StackActions.reset({
                            index: 0,
                            actions: [NavigationActions.navigate({ routeName: 'Login' })],
                        });
                        this.props.navigation.dispatch(resetAction);
                    });
                }
                else {
                    if (response.hasOwnProperty('user_msg')) {
                        Toast.show({
                            text: response.user_msg,
                            duration: 3000
                        })
                    }
                    else {
                        Toast.show({
                            text: response.user_msg,
                            duration: 3000
                        })
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
                    <KeyboardAwareScrollView style={{ flex: 1 }}>
                        <View style={styles.fpHead}>
                            <Text style={styles.headFont}> NeoSTORE </Text>
                        </View>
                        <View style={styles.fpMid}>
                            <View style={styles.userPass}>
                                <Icon name="Lock" style={styles.icon} />
                                <TextInput onSubmitEditing={() => { this.input2.focus(); }} returnKeyType={'next'}
                                    onChangeText={(changedText) => { this.setState({ "password": changedText }) }} value={this.state.username}
                                    style={styles.textField} placeholder="Current Password" placeholderTextColor={primary}>
                                </TextInput>
                            </View>
                            <View style={styles.userPass}>
                                <Icon name="Lock" style={styles.icon} />
                                <TextInput ref={(input) => { this.input2 = input; }} returnKeyType={'next'}
                                    onSubmitEditing={() => { this.input3.focus(); }}
                                    onChangeText={(changedText) => { this.setState({ "npassword": changedText }) }} value={this.state.npassword}
                                    style={styles.textField} placeholder="New Password" placeholderTextColor={primary}>
                                </TextInput>
                            </View>
                            <View style={styles.userPass}>
                                <Icon name="Lock" style={styles.icon} />
                                <TextInput ref={(input) => { this.input3 = input; }}
                                    onChangeText={(changedText) => { this.setState({ "cpassword": changedText }) }} value={this.state.cpassword}
                                    style={styles.textField} placeholder="Confirm Password" placeholderTextColor={primary}>
                                </TextInput>
                            </View>
                            <View style={styles.pass}>
                                <TouchableOpacity style={styles.buttonStyle} onPress={() => this.validate()}>
                                    <Text style={styles.btnTxt}> Reset Password </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </KeyboardAwareScrollView>
                </ImageBackground>
            </View >
        );
    }
}

const mapStateToProps = (state) => {
    return state;
};

export default connect(mapStateToProps)(ResetPass);