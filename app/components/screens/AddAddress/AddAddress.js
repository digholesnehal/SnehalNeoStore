import React, { Component } from 'react';
import {
    Platform, Dimensions, ScrollView, StyleSheet, Text, View,
    KeyboardAvoidingView, Image, Alert,
    TextInput, TouchableOpacity
} from 'react-native';
import styles from "./Styles";
import Header from '../../../components/Header/header.js';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { userObj, userProvider } from '../../../lib/UserProvider.js';
import { apiCaller } from '../../../lib/Fetcher.js';
import * as url from '../../../lib/api.js';
import * as Colors from '../../../utils/colors';


export default class AddAddress extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Header
                    title={'Add Address'}
                    mainTitle={false}
                    isDrawer={false}
                    isSearch={true}
                    back={() => { this.props.navigation.goBack(null) }} />

            </View>
        )
    }
}