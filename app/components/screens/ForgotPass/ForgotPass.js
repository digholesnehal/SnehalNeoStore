import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ImageBackground, TextInput, TouchableOpacity  } from 'react-native';
import styles from "./Styles";
import Icon from 'react-native-vector-icons/dist/FontAwesome';

export default class ForgotPass extends Component{
    render(){
        return(
        
        <View style={styles.container}>
            <ImageBackground style={styles.container} source={require('../../../assets/images/Android_Master_bg.jpg')}>
                <View style={styles.fpHead}>
                    <Text style={styles.headFont}> NeoSTORE </Text>
                </View>
                
                <View style={styles.fpMid}> 
                    <Text style={styles.midFont}> Change Password: </Text>
                    <View style={styles.userPass}>
                        <Icon name="user" style={styles.icon}/>
                        <TextInput style={styles.textField} placeholder="Username" placeholderTextColor="white">
                        </TextInput>
                    </View>

                    <View style={styles.userPass}>
                        <Icon name="unlock" style={styles.icon}/>
                        <TextInput style={styles.textField} placeholder="New Password" placeholderTextColor="white">
                        </TextInput>
                    </View>

                    <View style={styles.userPass}>
                        <Icon name="lock" style={styles.icon}/>
                        <TextInput style={styles.textField} placeholder="Confirm Password" placeholderTextColor="white">
                        </TextInput>
                    </View>
                    <View style={styles.pass}>
                        <TouchableOpacity style={styles.buttonStyle}> 
                            <Text style={styles.btnTxt}> Save Password </Text> 
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
        </View>
        );
    }

}