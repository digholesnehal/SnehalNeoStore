import React, { Component } from 'react';
import {
    Platform, Dimensions, StyleSheet, Text, View,
    TextInput, TouchableOpacity
} from 'react-native';
import styles from './Styles';
import * as Colors from '../../../../utils/colors.js';
import Header from '../../../Header/header.js';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';
import Keyboard from 'react-native-keyboard';
import { AsyncStorage } from 'react-native';
import * as url from '../../../../lib/api.js';

export default class Cupboards extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Header
                    title={'Cupboards'}
                    mainTitle={false}
                    isDrawer={false}
                    isSearch={true}
                    back={() => { this.props.navigation.goBack(null) }} />
                <KeyboardAwareScrollView style={styles.cPartition}>
                    <View style={styles.rPartition}>

                    </View>
                    <View style={styles.rPartition}>

                    </View>
                    <View style={styles.rPartition}>

                    </View>
                    <View style={styles.rPartition}>

                    </View>
                    <View style={styles.rPartition}>

                    </View>
                </KeyboardAwareScrollView>
            </View>
        );
    }
}