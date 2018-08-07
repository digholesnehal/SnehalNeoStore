import React, {Component} from 'react';
import {Platform,  Dimensions, ScrollView, StyleSheet, Text, View, KeyboardAvoidingView,
        ImageBackground, TextInput, TouchableOpacity  } from 'react-native';
import styles from "./Styles";
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import Header from '../../../components/Header/PageHeader/header.js';
import {primary} from '../../../utils/colors.js'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export default class ForgotPass extends Component{

    constructor(props){
        super(props);
        this.state = {
            username : '',
            npassword : '',
            cpassword : '',
        }
    }

    snehal = ()=>{
        var reg = /^[a-zA-Z{1}]+\w.+([\.-]?\w+)*@\w+([\.-]?\w+){1}(\.\w{2,3})$/;	
        var alNum=/^([a-zA-Z0-9]){5,10}$/;
        if(this.state.username=="")
        {
            alert("Please enter your Usename");
            return false
        }
        else if(!this.state.username.match(reg) )
        {
            alert("Enter valid username")
            return false
        }
        
        else if(this.state.npassword=="")
        {
            alert("Password field shouldn't remain empty");
            return false;        
        }
        else if(!this.state.npassword.match(alNum))
        {
            alert("Password should contain 5-10 alphanumeric characters")
        }
        else if(this.state.cpassword!=this.state.password)
        {
            alert("Password should be same as above");
            return false;
        }
        else if(this.state.cpassword=="")
        {
            alert("Please confirm the password");
            return false; 
        }
        else
        {
            this.props.navigation.navigate('HomeScreen');
        }
    }

    render(){
        return(
        
        <View style={styles.container}>
            <ImageBackground style={styles.container} source={require('../../../assets/images/Android_Master_bg.jpg')}>
            <Header
                title={'Forgot Password'}
                isDrawer={false}
                back={() => {this.props.navigation.goBack(null)}}/>
                <KeyboardAwareScrollView style={flex=1}>

                        <View style={styles.fpHead}>
                            <Text style={styles.headFont}> NeoSTORE </Text>
                        </View>
                        
                        <View style={styles.fpMid}> 
                            <Text style={styles.midFont}> Change Password </Text>
                            <View style={styles.userPass}>
                                <Icon name="user" style={styles.icon}/>
                                <TextInput onChangeText={(changedText)=>{this.setState({"username":changedText})}} value={this.state.username} 
                                style={styles.textField} placeholder="Username" placeholderTextColor={primary}>
                                </TextInput>
                            </View>

                            <View style={styles.userPass}>
                                <Icon name="unlock" style={styles.icon}/>
                                <TextInput onChangeText={(changedText)=>{this.setState({"npassword":changedText})}} value={this.state.npassword}
                                style={styles.textField} placeholder="New Password" placeholderTextColor={primary}>
                                </TextInput>
                            </View>

                            <View style={styles.userPass}>
                                <Icon name="lock" style={styles.icon}/>
                                <TextInput onChangeText={(changedText)=>{this.setState({"cpassword":changedText})}} value={this.state.cpassword}
                                style={styles.textField} placeholder="Confirm Password" placeholderTextColor={primary}>
                                </TextInput>
                            </View>
                            <View style={styles.pass}>
                                <TouchableOpacity style={styles.buttonStyle} onPress={() => this.snehal()} style={styles.buttonStyle}> 
                                    <Text style={styles.btnTxt}> Save Password </Text> 
                                </TouchableOpacity>
                            </View>
                        </View>
                        
                    </KeyboardAwareScrollView>
            </ImageBackground>
        </View>
        );
    }

}