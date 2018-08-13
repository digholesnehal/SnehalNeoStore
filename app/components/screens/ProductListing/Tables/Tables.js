import React, { Component } from 'react';
import {
    Platform, Dimensions, StyleSheet, Text, View,
    ImageBackground, TextInput, TouchableOpacity
} from 'react-native';
import styles from './Styles';
import * as Colors from '../../../../utils/colors';
import Header from '../../../../components/Header/PageHeader/header.js';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';
import Keyboard from 'react-native-keyboard';
import { AsyncStorage } from 'react-native';
import * as url from '../../../../lib/api.js';

export default class ProductListing extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ImageBackground style={styles.container} source={require('../../../assets/images/Android_Master_bg.jpg')}>
                    <Header
                        title={'Tables'}
                        isDrawer={false}
                        back={() => { this.props.navigation.goBack(null) }} />
                    <KeyboardAwareScrollView style={flex = 1}>
                    </KeyboardAwareScrollView>
                </ImageBackground>
            </View>
        );
    }
}