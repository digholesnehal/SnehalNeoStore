import React, { Component } from 'react';
import {
    Platform, Dimensions, StyleSheet, Text, View,
    ImageBackground, TextInput, TouchableOpacity
} from 'react-native';
import Icon from '../../../utils/Icons.js';
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';
import styles from './Styles';
import CheckBox from 'react-native-check-box';
import * as Colors from '../../../utils/colors';
import Header from '../../../components/Header/header.js';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';
import Keyboard from 'react-native-keyboard';
import { AsyncStorage } from 'react-native';
import * as url from '../../../lib/api.js';
import Loader from '../../Loader/Loader.js';
import { userObj, userProvider } from '../../../lib/UserProvider.js';
import { apiCaller } from '../../../lib/Fetcher.js';


var gender = [
    { label: "Male", value: 0 },
    { label: "Female", value: 1 }
];

export default class Register extends Component {

    constructor(props) {
        super(props);
        this.state = {
            firstname: 'Snehal',
            lastname: 'Dighole',
            password: '123456789',
            cpassword: '123456789',
            email: 'digholesnehal@gmail.com',
            mobile: '7588961004',
            check: false,
        }
        this.state = {
            loader: false,
        }
    }

    register() {
        let formData = new FormData();
        formData.append('first_name', this.state.firstname)
        formData.append('last_name', this.state.lastname)
        formData.append('email', this.state.email)
        formData.append('password', this.state.password)
        formData.append('confirm_password', this.state.cpassword)
        formData.append('gender', this.state.gender)
        formData.append('phone_no', this.state.mobile)
        this.setState({ loader: true })
        apiCaller(url.host + url.register, 'POST', {}, formData,
            callBack = (response) => {
                this.setState({ loader: false })
                if (response.status == 200) {
                    userProvider.setObjKey('user_data', response.data);
                    alert(response.user_msg)
                    this.props.navigation.navigate('Login');
                }
                else {
                    if (response.hasOwnProperty('user_msg')) {
                        alert(response.user_msg);
                    }
                    else {
                        alert(response.message);
                    }
                }
            })
    }


    validate = () => {
        var regmail = /^[a-zA-Z{1}]+\w.+([\.-]?\w+)*@\w+([\.-]?\w+){1}(\.\w{2,3})$/;
        var alphaExp = /^[a-zA-Zäöüß]+$/;
        var alNum = /^([a-zA-Z0-9]){5,10}$/;
        var num = /^([0-9*\+\#]){10,13}$/;

        if (this.state.firstname == "") {
            alert("Please enter the First Name");
            return false;
        }

        else if (!this.state.firstname.match(alphaExp)) {
            alert("Enter the valid First Name");
            return false;
        }

        else if (this.state.lastname == "") {
            alert("Please enter the Last Name");
            return false;
        }

        else if (!this.state.lastname.match(alphaExp)) {
            alert("Enter the valid Last Name");
            return false;
        }

        else if (this.state.email == "") {
            alert("Please provide your Email address");
            return false;
        }

        else if (!this.state.email.match(regmail)) {
            alert("Invalid Email address");
            return false;
        }

        else if (this.state.password == "") {
            alert("Password field shouldn't remain empty");
            return false;
        }

        else if (!this.state.password.match(alNum)) {
            alert("Password should contain 5-10 alphanumeric characters");
            return false;
        }

        else if (this.state.cpassword != this.state.password) {
            alert("Password should be same as above");
            return false;
        }

        else if (this.state.cpassword == "") {
            alert("Please confirm the password");
            return false;
        }
        else if (this.state.mobile == "") {
            alert("Please enter your mobile number");
            return false;
        }

        else if (!this.state.mobile.match(num)) {
            alert("Mobile number should contain 10-13 numbers only");
            return false;
        }
        else if (this.state.check == false) {
            alert("Please agree terms and conditions.")
            console.log('checkbox', this.state.check)
            return false;
        }
        else {
            this.register();
        }

    }

    render() {
        return (
            <View style={styles.container}>
                <ImageBackground style={styles.container} source={require('../../../assets/images/Android_Master_bg.jpg')}>
                    <Header
                        title={'Register'}
                        mainTitle={false}
                        isDrawer={false}
                        isSearch={false}
                        isADD={true}
                        back={() => { this.props.navigation.goBack(null) }} />
                    {this.state.loader ? <Loader /> : null}
                    <KeyboardAwareScrollView style={flex = 1}>
                        <View style={styles.regHead}>
                            <Text style={styles.headFont}> NeoSTORE </Text>
                        </View>

                        <View style={styles.regMid}>
                            <View style={styles.userPass}>
                                <Icon name="user" style={styles.icon} />
                                <TextInput onChangeText={(changedText) => { this.setState({ "firstname": changedText }) }} value={this.state.firstname} style={styles.textField} placeholder="First Name" placeholderTextColor={Colors.primary}>
                                </TextInput>
                            </View>

                            <View style={styles.userPass}>
                                <Icon name="user" style={styles.icon} />
                                <TextInput onChangeText={(changedText) => { this.setState({ "lastname": changedText }) }} value={this.state.lastname} style={styles.textField} placeholder="Last Name" placeholderTextColor={Colors.primary}>
                                </TextInput>
                            </View>

                            <View style={styles.userPass}>
                                <Icon name="email" style={styles.envelope} />
                                <TextInput keyboardType={'email-address'} onChangeText={(changedText) => { this.setState({ "email": changedText }) }} value={this.state.email} style={styles.textField} placeholder="Email" placeholderTextColor={Colors.primary}>
                                </TextInput>
                            </View>

                            <View style={styles.userPass}>
                                <Icon name="Lock" style={styles.icon} />
                                <TextInput onChangeText={(changedText) => { this.setState({ "password": changedText }) }} secureTextEntry={true} value={this.state.password} style={styles.textField} placeholder="Password" placeholderTextColor={Colors.primary}>
                                </TextInput>
                            </View>

                            <View style={styles.userPass}>
                                <Icon name="Lock" style={styles.icon} />
                                <TextInput onChangeText={(changedText) => { this.setState({ "cpassword": changedText }) }} secureTextEntry={true} value={this.state.cpassword} style={styles.textField} placeholder="Confirm Password" placeholderTextColor={Colors.primary}>
                                </TextInput>
                            </View>

                            <View style={styles.rowFlex}>
                                <View style={styles.rowFlex}></View>
                                <View style={styles.radio}>
                                    <Text style={styles.radioTitle}> Gender </Text>
                                    <RadioForm
                                        formHorizontal={true}
                                        buttonSize={Platform.OS === 'ios' ? 10 : 8}
                                        radio_props={gender}
                                        initial={0}
                                        buttonColor={'#fff'}
                                        selectedButtonColor={'#fff'}
                                        labelStyle={{ fontSize: Platform.OS === 'ios' ? 17 : 13, fontWeight: '500', color: "#fff", padding: 4 }}
                                        onPress={(value) => { }} />
                                    <View style={styles.rowFlex}></View>
                                </View>
                            </View>

                            <View style={styles.userPass}>
                                <Icon name="phone" style={styles.iconPhn} />
                                <TextInput keyboardType="phone-pad" onChangeText={(changedText) => { this.setState({ "mobile": changedText }) }} value={this.state.mobile} style={styles.textField} placeholder="Phone Number" placeholderTextColor={Colors.primary}>
                                </TextInput>
                            </View>
                            <View style={styles.checkBox}>
                                <CheckBox
                                    onClick={() => this.setState({ check: !this.state.check })}
                                    isChecked={this.state.check} checkBoxColor={Colors.primary} />
                                <Text style={styles.checkBoxTitle}> I agree the Terms and Conditons </Text>
                            </View>
                        </View>
                        <View style={styles.btn}>
                            <TouchableOpacity style={styles.buttonStyle} onPress={() => this.validate()}>
                                <Text style={styles.btnTxt}> REGISTER </Text>
                            </TouchableOpacity>
                        </View>
                    </KeyboardAwareScrollView>
                </ImageBackground>
            </View>
        );
    }
}