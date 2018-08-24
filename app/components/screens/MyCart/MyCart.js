import React, { Component } from 'react';
import {
    Platform, Dimensions, ScrollView, StyleSheet, Text, View, KeyboardAvoidingView,
    TextInput, TouchableOpacity
} from 'react-native';
import styles from "./Styles";
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import Header from '../../../components/Header/header.js';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { userObj, userProvider } from '../../../lib/UserProvider.js';
import { apiCaller } from '../../../lib/Fetcher.js';
import * as url from '../../../lib/api.js';
import SwipeView from 'react-native-swipeview';


export default class MyCart extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Header
                    title={'My Cart'}
                    mainTitle={false}
                    isDrawer={false}
                    isSearch={false}
                    back={() => { this.props.navigation.goBack(null) }} />
                <SwipeView
                    renderVisibleContent={() => <Text style={styles.text}>SwipeMe</Text>}
                />
            </View>

        )
    }
}