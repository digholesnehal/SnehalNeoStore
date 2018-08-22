import React, { Component } from 'react';
import {
    Platform, StyleSheet, Dimensions, Text, View, Image,
    ImageBackground, TextInput, TouchableOpacity, ActivityIndicator
} from 'react-native';
import styles from "./Styles";
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { AsyncStorage } from 'react-native';
import * as url from '../../../lib/api.js';
import { apiCaller } from '../../../lib/Fetcher.js';
import Loader from '../../Loader/Loader.js';
import Header from '../../Header/header.js';
import DateTimePicker from 'react-native-modal-datetime-picker';
import { userObj, userProvider } from '../../../lib/UserProvider.js';


export default class EditProfile extends Component {
    constructor(props) {
        super(props);
        this.data = props.navigation.state.params.aa;
        this.state = {
            loader: false,
            access_token: '',
            isDateTimePickerVisible: false,
            first_name: userObj.user_data.first_name,
            last_name: userObj.user_data.last_name,
            email: userObj.user_data.email,
            phone_no: userObj.user_data.phone_no,
            dob: userObj.user_data.dob,
            profile_pic: ''
        }
    }


    setData() {
        this.setState({ loader: true })
        this.setState({ access_token: userObj.user_data.access_token })
        let formData = new FormData();
        formData.append('first_name', this.state.first_name)
        formData.append('last_name', this.state.last_name)
        formData.append('email', this.state.email)
        formData.append('dob', this.state.dob)
        formData.append('profile_pic', this.state.profile_pic)
        formData.append('phone_no', this.state.phone_no)
        return apiCaller(
            url.host + url.update,
            'POST', { access_token: this.state.access_token }, formData,
            (response) => {
                this.setState({ loader: false })
                if (response.status == 200) {
                    userProvider.setUserObj(formData);
                }
                else {
                    if (response.hasOwnProperty('user_msg')) {
                        // alert(response.user_msg);
                    }
                    else {
                        alert(response.message);
                    }
                }
            }
        );
    }

    _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });

    _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

    _handleDatePicked = (date) => {
        console.log('A date has been picked: ', date);
        this._hideDateTimePicker();
        this.setState({ dob: date })
    };

    render() {
        return (
            <View style={styles.container}>
                <ImageBackground style={styles.container} source={require('../../../assets/images/Android_Master_bg.jpg')}>
                    <Header
                        title={'Edit Profile'}
                        mainTitle={false}
                        isDrawer={false}
                        isSearch={true}
                        back={() => { this.props.navigation.goBack(null) }} />
                    {this.state.loader ? <Loader /> : null}
                    <KeyboardAwareScrollView style={styles.container}>
                        <View style={styles.imageView}>
                            <Image style={styles.image} source={require('../../../assets/images/appdp.jpg')} />
                        </View>
                        <View style={styles.mid}>
                            <View style={styles.textFieldView}>
                                <Icon name="user" style={styles.icon} />
                                <TextInput style={styles.textField} onChangeText={(changedText) => { this.setState({ "first_name": changedText }) }} value={this.state.first_name == null ? this.data.first_name : this.state.first_name}>
                                </TextInput>
                            </View>
                            <View style={styles.textFieldView}>
                                <Icon name="user" style={styles.icon} />
                                <TextInput style={styles.textField} onChangeText={(changedText) => { this.setState({ "last_name": changedText }) }} value={this.state.last_name == null ? this.data.last_name : this.state.last_name}>
                                </TextInput>
                            </View>
                            <View style={styles.textFieldView}>
                                <Icon name="envelope" style={styles.envelope} />
                                <TextInput style={styles.textField} onChangeText={(changedText) => { this.setState({ "email": changedText }) }} value={this.state.email == null ? this.data.email : this.state.email}>
                                </TextInput>
                            </View>
                            <View style={styles.textFieldView}>
                                <Icon name="mobile" style={styles.iconPhn} />
                                <TextInput style={styles.textField} onChangeText={(changedText) => { this.setState({ "phone_no": changedText }) }} value={this.state.phone_no == null ? this.data.phone_no : this.state.phone_no}>
                                </TextInput>
                            </View>
                            <View style={styles.textFieldView}>
                                <Icon name="birthday-cake" style={styles.iconCake} />
                                <TextInput style={styles.textField} value={this.dob} onFocus={this._showDateTimePicker}>
                                </TextInput>
                            </View>
                            <DateTimePicker
                                isVisible={this.state.isDateTimePickerVisible}
                                onConfirm={this._handleDatePicked}
                                onCancel={this._hideDateTimePicker}
                            />
                        </View>
                        <View style={styles.btnView}>
                            <TouchableOpacity style={styles.buttonStyle} onPress={() => { this.setData(); }}>
                                <Text style={styles.btnTxt}> SUBMIT </Text>
                            </TouchableOpacity>
                        </View>
                    </KeyboardAwareScrollView>
                </ImageBackground>
            </View >
        )
    }
}