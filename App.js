/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Login from './app/components/screens/Login/Login.js';
import ForgotPass from './app/components/screens/ForgotPass/ForgotPass.js'
import Register from './app/components/screens/Register/Register.js'
import HomeScreen from './app/components/screens/HomeScreen/HomeScreen.js'
  const RootStack = createStackNavigator({
    
      Login:{ 
        screen:Login,
        navigationOptions:{
          header:null,
        }
      },

      Register:{
        screen:Register,
        navigationOptions:{
          header:null,
        }
      },


      ForgotPass:{
        screen:ForgotPass,
        navigationOptions:{
          header:null,
        }
      },


      HomeScreen:{
        screen:HomeScreen,
        navigationOptions:{
          header:null,
        }
      },
    },


      {
      initialRouteName: 'Login',
      },
    );

  export default class App extends Component{
    render(){
      return(
        <RootStack/>
      );
    }
  }