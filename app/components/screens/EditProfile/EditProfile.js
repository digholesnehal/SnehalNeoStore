import React, { Component } from 'react';
import {
    Platform, StyleSheet, Dimensions, Text, View, Image,
    ImageBackground, TextInput, TouchableOpacity, ActivityIndicator
} from 'react-native';
import styles from "./Styles";
import Icon from '../../../utils/Icons.js';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { AsyncStorage } from 'react-native';
import * as url from '../../../lib/api.js';
import { apiCaller } from '../../../lib/Fetcher.js';
import Loader from '../../Loader/Loader.js';
import Header from '../../Header/header.js';
import DateTimePicker from 'react-native-modal-datetime-picker';
import ImagePicker from 'react-native-image-picker';
import { connect } from 'react-redux';
import { Toast } from 'native-base';

const setProfile = (state) => {
    return {
        type: 'EDIT',
        state,
    }
}

class EditProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loader: false,
            access_token: this.props.user_data.access_token,
            isDateTimePickerVisible: false,
            first_name: this.props.user_data.first_name,
            last_name: this.props.user_data.last_name,
            email: this.props.user_data.email,
            phone_no: this.props.user_data.phone_no,
            dob: this.props.user_data.dob,
            profile_pic: this.props.user_data.profile_pic,
        }
    }

    setData() {
        this.setState({ loader: true })
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
                    this.props.setProfile({ user_data: response.data })
                    Toast.show({
                        text: response.user_msg,
                        duration: 3000
                    })
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
                            text: response.message,
                            duration: 3000
                        })
                    }
                }
            }
        );
    }

    _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });

    _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

    _handleDatePicked = (date) => {
        var day = date.getDate();
        var month = date.getMonth() + 1;
        var year = date.getFullYear();
        this._hideDateTimePicker();
        this.setState({ dob: day + '-' + month + '-' + year })
    };

    showImagePicker = () => {
        ImagePicker.showImagePicker((response) => {
            if (response.didCancel) {
                alert('cancelled')
                Toast.show({
                    text: 'Cancelled..!',
                    duration: 3000
                })
            }
            else if (response.error) {
                Toast.show({
                    text: response.error,
                    duration: 3000
                })
            }
            else if (response.customButton) { }
            else {
                let source = 'data:image/jpeg;base64,' + response.data;

                this.setState({
                    profile_pic: source
                });
            }
        });

    }

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
                            <TouchableOpacity onPress={() => { this.showImagePicker() }}>
                                {this.state.profile_pic === null || this.state.profile_pic === '' ? <Image style={styles.image} source={require('../../../assets/images/appdp.jpg')} /> : <Image style={styles.image} source={{ uri: this.state.profile_pic }} />}
                            </TouchableOpacity>
                        </View>
                        <View style={styles.mid}>
                            <View style={styles.textFieldView}>
                                <Icon name="user" style={styles.icon} />
                                <TextInput style={styles.textField} onSubmitEditing={() => { this.input3.focus(); }} returnKeyType={'next'}
                                    onChangeText={(changedText) => { this.setState({ "first_name": changedText }) }} value={this.state.first_name == null ? this.data.first_name : this.state.first_name}>
                                </TextInput>
                            </View>
                            <View style={styles.textFieldView}>
                                <Icon name="user" style={styles.icon} />
                                <TextInput style={styles.textField} ref={(input) => { this.input3 = input; }} onSubmitEditing={() => { this.input4.focus(); }} returnKeyType={'next'}
                                    onChangeText={(changedText) => { this.setState({ "last_name": changedText }) }} value={this.state.last_name == null ? this.data.last_name : this.state.last_name}>
                                </TextInput>
                            </View>
                            <View style={styles.textFieldView}>
                                <Icon name="email" style={styles.envelope} />
                                <TextInput style={styles.textField} keyboardType={'email-address'} ref={(input) => { this.input4 = input; }} returnKeyType={'next'}
                                    onSubmitEditing={() => { this.input5.focus(); }}
                                    onChangeText={(changedText) => { this.setState({ "email": changedText }) }} value={this.state.email == null ? this.data.email : this.state.email}>
                                </TextInput>
                            </View>
                            <View style={styles.textFieldView}>
                                <Icon name="phone" style={styles.iconPhn} />
                                <TextInput style={styles.textField} keyboardType={'phone-pad'} ref={(input) => { this.input5 = input; }}
                                    onChangeText={(changedText) => { this.setState({ "phone_no": changedText }) }} value={this.state.phone_no == null ? this.data.phone_no : this.state.phone_no}>
                                </TextInput>
                            </View>
                            <View style={styles.textFieldView}>
                                <Icon name="birthday" style={styles.iconCake} />
                                <TouchableOpacity style={styles.textField} onPress={this._showDateTimePicker}>
                                    <Text style={styles.text}> {this.state.dob} </Text>
                                </TouchableOpacity>
                            </View>
                            <DateTimePicker
                                isVisible={this.state.isDateTimePickerVisible}
                                onConfirm={this._handleDatePicked}
                                onCancel={this._hideDateTimePicker}
                                minimumDate={new Date('1950-01-01')}
                                maximumDate={new Date('2005-01-01')}
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

const mapStateToProps = (state) => {
    return state;
};

export default connect(mapStateToProps, { setProfile })(EditProfile);