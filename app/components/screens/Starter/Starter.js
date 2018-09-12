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

class Starter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loader: false,
        }
    }

    componentDidMount() {
        AsyncStorage.getItem('access_token').then((value) => {
            //Check if the value exists or not
            if (value !== null) {
                //Check if the accesstoken is valid or not by calling the api.
                apiCaller(url.host + url.fAccDetails, 'GET', {}, null, callback = (response) => {
                    if (response.status == 200) { // Access Token valid please send to homescreen with response
                        this.props.setProfile(response.data)
                        this.setState({ loader: true })
                        this.props.navigation.replace('DrawerStack');
                    }
                    else {// Access Token invalid please send to Login
                        AsyncStorage.removeItem('access_token').then(() => {
                            this.setState({ loader: true })
                            this.props.navigation.replace('Login');
                        });
                    }
                })
            }
            else { // accesstoken doesnt exists please navigate to login
                this.setState({ loader: true })
                this.props.navigation.replace('Login');
            }
        })
            .catch((error) => {
                //Some error. Navigate to login.
                this.props.navigation.replace('Login');
                Toast.show({
                    text: error.message,
                    duration: 5000
                })
            })
    }

    render() {
        return (
            <View style={styles.container}>
                {this.state.loader ? <Loader /> : null}
                <View style={styles.Head}>
                </View>
            </View >
        );
    }
};

const mapStateToProps = (state) => {
    return state;
};

export default connect(mapStateToProps, { setProfile })(Starter);
