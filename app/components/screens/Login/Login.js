import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ImageBackground, TextInput, TouchableOpacity  } from 'react-native';
import styles from "./Styles";
import Icon from 'react-native-vector-icons/dist/FontAwesome';

export default class Login extends Component{
    render(){
        return(
        
        <View style={styles.container}>
            <ImageBackground style={styles.container} source={require('../../../assets/images/Android_Master_bg.jpg')}>
                <View style={styles.loginHead}>
                    <Text style={styles.headFont}> NeoSTORE </Text>
                </View>
                
                <View style={styles.loginMid}> 
                    <View style={styles.userPass}>
                    <Icon name="user" size={30} color="white"/>
                    <TextInput style={styles.textField} placeholder="Username" placeholderTextColor="white">
                    </TextInput>
                    </View>

                    <View style={styles.userPass}>
                    <Icon name="lock" size={30} color="white"/>
                    <TextInput style={styles.textField} placeholder="Password" placeholderTextColor="white">

                    </TextInput>
                    </View>
                </View>
                <View style={styles.loginMid}> 
                    <View style={styles.pass}>
                        <TouchableOpacity style={styles.buttonStyle}> 
                            <Text style={styles.btnTxt}> LOGIN </Text> 
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={styles.fgotPass}> 
                        <Text style={styles.fgotPass}>
                        Forgot Password?
                        </Text>
                    </TouchableOpacity>
                </View>
                
                <View style={styles.loginFoot}> 
                    <View style={styles.bottom}>                    
                        <Text style={styles.noAcc}>
                            DONT HAVE AN ACCOUNT?
                        </Text>
                        <TouchableOpacity style={styles.newAcc}> 
                            <Icon name="plus" size={40} color="#fff"/>
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
        </View>
        );
    }

}

