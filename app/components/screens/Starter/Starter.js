import React, { Component } from 'react';
import {
    Platform, StyleSheet, Dimensions, Text, View,
    ImageBackground, TextInput, TouchableOpacity
} from 'react-native';
import styles from "./Styles";
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { AsyncStorage } from 'react-native';
import * as url from '../../../lib/api.js';
import { apiCaller } from '../../../lib/Fetcher';

export default class Starter extends Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        AsyncStorage.getItem('access_token').then((value) => {
            //Check if the value exists or not
            if (value !== null) {
                //Check if the accesstoken is valid or not by calling the api.
                apiCaller(url.host + url.fAccDetails, 'GET', {}, null, callback = (response) => {
                    if (response.status == 200) { // Access Token valid please send to homescreen with response
                        this.props.navigation.replace('DrawerStack', response);
                    }
                    else {// Access Token invalid please send to Login
                        AsyncStorage.removeItem('access_token').then(() => {
                            this.props.navigation.replace('Login');
                        });
                    }
                })
                    .catch((error) => {
                        //Some error. Navigate to login.
                        console.log(error.message);
                        this.props.navigation.replace('Login');

                    })
            }
            else { // accesstoken doesnt exists please navigate to login
                this.props.navigation.replace('Login');
            }
        })
            .catch((error) => {
                //Some error. Navigate to login.
                console.log(error.message);
            })
    }


    render() {
        return (
            <View style={styles.container}>
                <ImageBackground style={styles.container} source={require('../../../assets/images/Android_Master_bg.jpg')}>
                    <View style={styles.Head}>
                        <Text style={styles.headFont}> NeoSTORE </Text>
                    </View>
                </ImageBackground>
            </View>
        );
    }
};

