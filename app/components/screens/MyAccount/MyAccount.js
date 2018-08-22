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
import { userObj, userProvider } from '../../../lib/UserProvider.js';



export default class MyAccount extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loader: false,
            user_data: userObj.user_data,
            first_name: userObj.user_data.first_name,
            last_name: userObj.user_data.last_name,
            email: userObj.user_data.email,
            phone_no: userObj.user_data.phone_no,
            dob: userObj.user_data.dob,
        }
    }

    // componentDidMount() {
    //     // this.setState({ loader: true })
    //     // return apiCaller(
    //     //     url.host + url.fAccDetails,
    //     //     'GET', {}, null,
    //     //     (response) => {
    //     //         this.setState({ loader: false })
    //     //         if (response.status == 200) {
    //     //             this.setState({
    //     //                 first_name: userObj.user_data.first_name,
    //     //                 last_name: userObj.user_data.last_name,
    //     //                 email: userObj.user_data.email,
    //     //                 phone_no: userObj.user_data.phone_no,
    //     //                 dob: userObj.user_data.dob,
    //     //             });
    //     //         }
    //     //         else {
    //     //             if (response.hasOwnProperty('user_msg')) {
    //     //                 // alert(response.user_msg);
    //     //             }
    //     //             else {
    //     //                 alert(response.message);
    //     //             }
    //     //         }
    //     //     }
    //     // );
    // }

    render() {
        return (
            <View style={styles.container}>
                <ImageBackground style={styles.container} source={require('../../../assets/images/Android_Master_bg.jpg')}>
                    <Header
                        title={'My Account'}
                        mainTitle={false}
                        isDrawer={false}
                        isSearch={true}
                        back={() => { this.props.navigation.goBack(null) }} />
                    {this.state.loader ? <Loader /> : null}
                    <View style={styles.imageView}>
                        <Image style={styles.image} source={require('../../../assets/images/appdp.jpg')} />
                    </View>
                    <View style={styles.mid}>
                        <View style={styles.textFieldView}>
                            <Icon name="user" style={styles.icon} />
                            <TextInput style={styles.textField} value={this.state.first_name} editable={false}>
                            </TextInput>
                        </View>
                        <View style={styles.textFieldView}>
                            <Icon name="user" style={styles.icon} />
                            <TextInput style={styles.textField} value={this.state.last_name} editable={false}>
                            </TextInput>
                        </View>
                        <View style={styles.textFieldView}>
                            <Icon name="envelope" style={styles.envelope} />
                            <TextInput style={styles.textField} value={this.state.email} editable={false}>
                            </TextInput>
                        </View>
                        <View style={styles.textFieldView}>
                            <Icon name="mobile" style={styles.iconPhn} />
                            <TextInput style={styles.textField} value={this.state.phone_no} editable={false}>
                            </TextInput>
                        </View>
                        <View style={styles.textFieldView}>
                            <Icon name="birthday-cake" style={styles.iconCake} />
                            <TextInput style={styles.textField} value={this.state.dob} editable={false}>
                            </TextInput>
                        </View>
                    </View>
                    <View style={styles.btnView}>
                        <TouchableOpacity style={styles.buttonStyle} onPress={() => this.props.navigation.navigate('EditProfile', { aa: this.state.user_data })}>
                            <Text style={styles.btnTxt}> EDIT PROFILE </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.resetPass}>
                        <TouchableOpacity>
                            <Text style={styles.ResetBtnTxt}> RESET PASSWORD </Text>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
            </View>
        )
    }
}