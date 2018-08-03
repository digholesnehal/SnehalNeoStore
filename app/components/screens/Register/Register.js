import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ImageBackground, TextInput, TouchableOpacity  } from 'react-native';
import styles from "./Styles";
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import Styles from './Styles';
import CheckBox from 'react-native-check-box';
import { white } from 'ansi-colors';


var gender=[
    {label: "Male" , value:0},
    {label: "Female", value:1}
];


export default class Register extends Component{

    constructor(props){
        super(props);
        this.state = {
            firstname : '',
            lastname :'',
            password : '',
            cpassword :'',
            email :'',
            mobile :'',
            check: false,
        }
    }

    snehal = ()=>{
        var regmail = /^[a-zA-Z{1}]+\w.+([\.-]?\w+)*@\w+([\.-]?\w+){1}(\.\w{2,3})$/;	
        var alphaExp = /^[a-zA-Zäöüß]+$/;
        var alNum=/^([a-zA-Z0-9]){5,10}$/;
        var num = /^([0-9*\+\#]){10,13}$/;

        if(this.state.firstname=="")
        {
            alert("Please enter the First Name");
            return false;
        }

        else if(!this.state.firstname.match(alphaExp))
        {
            alert("Enter the valid First Name");
            return false;
        }

        else if(this.state.lastname=="")
        {
            alert("Please enter the Last Name");
            return false;
        }

        else if(!this.state.lastname.match(alphaExp) )
        {
            alert("Enter the valid Last Name");
            return false;
        }

        else if(this.state.email=="")
        {
            alert("Please provide your Email address");
            return false;
        }

        else if(!this.state.email.match(regmail))
        {
            alert("Invalid Email address");
            return false;
        }

        else if(this.state.password=="")
        {
            alert("Password field shouldn't remain empty");
            return false;
        }

        else if(!this.state.password.match(alNum))
        {
            alert("Password should contain 5-10 alphanumeric characters");
            return false;
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
        else if(this.state.mobile=="")
        {
            alert("Please enter your mobile number");
            return false;
        }

        else if(!this.state.mobile.match(num))
        {
            alert("Mobile number should contain 10-13 numbers only");
            return false;
        }
        else if(this.state.check==false)
        {
            alert("Please agree terms and conditions.")
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
                    <TextInput onChangeText={(changedText)=>{this.setState({"firstname":changedText})}} value={this.state.firstname} style={styles.textField} placeholder="First Name" placeholderTextColor="white">
                    </TextInput>
                    </View>

                    <View style={styles.userPass}>
                    <Icon name="user" style={styles.icon}/>
                    <TextInput onChangeText={(changedText)=>{this.setState({"lastname":changedText})}} value={this.state.lastname} style={styles.textField} placeholder="Last Name" placeholderTextColor="white">
                    </TextInput>
                    </View>

                    <View style={styles.userPass}>
                    <Icon name="envelope" style={styles.envelope}/>
                    <TextInput onChangeText={(changedText)=>{this.setState({"email":changedText})}} value={this.state.email} style={styles.textField} placeholder="Email" placeholderTextColor="white">
                    </TextInput>
                    </View>

                    <View style={styles.userPass}>
                    <Icon name="lock" style={styles.icon}/>
                    <TextInput onChangeText={(changedText)=>{this.setState({"password":changedText})}} secureTextEntry={true} value={this.state.password} style={styles.textField} placeholder="Password" placeholderTextColor="white">
                    </TextInput>
                    </View>

                    <View style={styles.userPass}>
                    <Icon name="lock" style={styles.icon}/>
                    <TextInput onChangeText={(changedText)=>{this.setState({"cpassword":changedText})}} secureTextEntry={true} value={this.state.cpassword} style={styles.textField} placeholder="Confirm Password" placeholderTextColor="white">
                    </TextInput>
                    </View>

                    <View style={styles.rowFlex}>
                        <View style={styles.rowFlex}></View>
                        <View style={styles.radio}>
                            <Text style={styles.radioTitle}> Gender </Text>
                            <RadioForm 
                            formHorizontal={true} 
                            buttonSize={10} 
                            radio_props={gender} 
                            initial={0}
                            buttonColor={'#fff'}
                            selectedButtonColor={'#fff'}
                            labelStyle={{fontSize:17, fontWeight:'500', color:"#fff", padding:4}}
                            onPress={(value)=>{}}/>
                            <View style={styles.rowFlex}></View>
                        </View>
                    </View>

                    <View style={styles.userPass}>
                        <Icon name="mobile" style={styles.iconPhn}/>
                        <TextInput onChangeText={(changedText)=>{this.setState({"mobile":changedText})}} value={this.state.mobile} style={styles.textField} placeholder="Phone Number" placeholderTextColor="white">
                        </TextInput>
                    </View>
                    <View style={styles.checkBox}>
                    <CheckBox
                        onClick={()=>this.setState({check:!this.state.check})}
                        isChecked={this.state.check} checkBoxColor='white'/>
                    <Text style={styles.checkBoxTitle}> I agree the Terms and Conditons </Text>
                    </View>
                </View>
                <View style={styles.btn}>
                        <TouchableOpacity style={styles.buttonStyle} onPress={() => this.snehal()}> 
                            <Text style={styles.btnTxt}> REGISTER </Text> 
                        </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
        );
    }
}