import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ImageBackground, TextInput, TouchableOpacity  } from 'react-native';
import styles from "./Styles";
import Icon from 'react-native-vector-icons/dist/FontAwesome';

export default class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            username : '',
            password : '',
        }
    }


    snehal = ()=>{
        var reg = /^[a-zA-Z{1}]+\w.+([\.-]?\w+)*@\w+([\.-]?\w+){1}(\.\w{2,3})$/;	
        var alNum=/^([a-zA-Z0-9]){5,10}$/;
        if((!this.state.username.match(reg) || this.state.username=="") || (!this.state.password.match(alNum) || this.state.password==""))
        {
            alert("Username or Password is Invalid");
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
                <View style={styles.loginHead}>
                    <Text style={styles.headFont}> NeoSTORE </Text>
                </View>
                
                <View style={styles.loginMid}> 
                    <View style={styles.userPass}>
                    <Icon name="user" style={styles.icon}/>
                    <TextInput onChangeText={(changedText)=>{this.setState({"username":changedText})}} style={styles.textField} placeholder="Username" value={this.state.username} placeholderTextColor="white">
                    </TextInput>
                    </View>

                    <View style={styles.userPass}>
                    <Icon name="lock" style={styles.icon}/>
                    <TextInput onChangeText={(changedText)=>{this.setState({"password":changedText})}} secureTextEntry={true} style={styles.textField} placeholder="password" placeholderTextColor="white" value={this.state.password}>
                    </TextInput>
                    </View>
                </View>
                <View style={styles.loginMid}> 
                    <View style={styles.pass}>
                        <TouchableOpacity style={styles.buttonStyle} onPress={() => this.snehal()}> 
                            <Text style={styles.btnTxt}> LOGIN </Text> 
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={styles.fgotPass} onPress={() => this.props.navigation.navigate('ForgotPass')}> 
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
                        <TouchableOpacity style={styles.newAcc} onPress={() => this.props.navigation.navigate('Register')}> 
                            <Icon name="plus" size={40} color="#fff"/>
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
        </View>
        );
    }

}

