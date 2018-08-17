import React, { Component } from 'react'
import {
    ActivityIndicator,
    AppRegistry,
    StyleSheet,
    Text,
    View,
} from 'react-native'

export default class Loader extends Component {
    render() {
        return (
            <View style={{ position: 'absolute', margin: '100%', alignSelf: 'center', justifyContent: 'center' }}>
                <ActivityIndicator size="large" color="#000" />
            </View>
        );
    }
}