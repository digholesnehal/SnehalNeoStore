import React, { Component } from 'react'
import {
    ActivityIndicator,
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Dimensions
} from 'react-native'

export default class Loader extends Component {
    render() {
        return (
            <View style={{ position: 'absolute', zIndex: 10, height: Dimensions.get('window').height, width: 360, alignSelf: 'center', justifyContent: 'center' }}>
                <ActivityIndicator size="large" color="#000" />
            </View>
        );
    }
}