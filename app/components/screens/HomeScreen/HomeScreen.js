import React, {Component} from 'react';
import {Platform, StyleSheet, Dimensions, Image, ScrollView, Text, View, KeyboardAvoidingView,
        ImageBackground, TextInput, TouchableOpacity  } from 'react-native';
import styles from "./Styles";
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import Header from '../../../components/Header/MainHeader/header.js';
import Swiper from 'react-native-swiper';




export default class HomeScreen extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Header
                title={'NeoSTORE'}
                isDrawer={false}
                back={() => {this.props.navigation.goBack(null)}}/>
                <Swiper>
                    <View style={styles.slide1}>
                    <Image style={{width:380, height: 220,}} source={require('../../../assets/images/furniture1.jpeg')}/>
                    </View>
                    <View style={styles.slide1}>
                    <Image style={{width:380, height: 220,}} source={require('../../../assets/images/furniture2.jpeg')}/>
                    </View>
                    <View style={styles.slide1}>
                    <Image style={{width:380, height: 220,}} source={require('../../../assets/images/furniture3.jpeg')}/>
                    </View>
                    <View style={styles.slide1}>
                    <Image style={{width:380, height: 220,}} source={require('../../../assets/images/furniture4.jpeg')}/>
                    </View>
                </Swiper>
            </View>
        );
    }

}

