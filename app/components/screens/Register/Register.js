import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ImageBackground, TextInput, TouchableOpacity  } from 'react-native';
import styles from "./Styles";
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import {RadioGroup, RadioButton} from 'react-native-flexi-radio-button';

export default class Register extends Component{
    render(){
        return(
        
        <View style={styles.container}>
            <ImageBackground style={styles.container} source={require('../../../assets/images/Android_Master_bg.jpg')}>
                <View style={styles.regHeader}>
                    <View style={styles.backAlign}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')}> 
                            <Icon name="angle-left" style={styles.back}/> 
                        </TouchableOpacity>
                    </View>
                    <View style={styles.headText}>
                        <Text style={styles.register}> Register </Text>
                    </View>
                    <View style={styles.backAlign}>
                    </View>
                </View>
                <View style={styles.regHead}>
                    <Text style={styles.headFont}> NeoSTORE </Text>
                </View>
                
                <View style={styles.regMid}> 
                    <View style={styles.userPass}>
                    <Icon name="user" style={styles.icon}/>
                    <TextInput style={styles.textField} placeholder="First Name" placeholderTextColor="white">
                    </TextInput>
                    </View>

                    <View style={styles.userPass}>
                    <Icon name="user" style={styles.icon}/>
                    <TextInput style={styles.textField} placeholder="Last Name" placeholderTextColor="white">
                    </TextInput>
                    </View>

                    <View style={styles.userPass}>
                    <Icon name="envelope" style={styles.icon}/>
                    <TextInput style={styles.textField} placeholder="Email" placeholderTextColor="white">
                    </TextInput>
                    </View>

                    <View style={styles.userPass}>
                    <Icon name="lock" style={styles.icon}/>
                    <TextInput style={styles.textField} placeholder="Password" placeholderTextColor="white">
                    </TextInput>
                    </View>

                    <View style={styles.userPass}>
                    <Icon name="lock" style={styles.icon}/>
                    <TextInput style={styles.textField} placeholder="Confirm Password" placeholderTextColor="white">
                    </TextInput>
                    </View>

                    

                    <View style={styles.userPass}>
                    <Icon name="mobile" style={styles.iconPhn}/>
                    <TextInput style={styles.textField} placeholder="Phone Number" placeholderTextColor="white">
                    </TextInput>
                    </View>
                </View>
                <View style={styles.btn}>
                        <TouchableOpacity style={styles.buttonStyle}> 
                            <Text style={styles.btnTxt}> REGISTER </Text> 
                        </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
        );
    }

}

