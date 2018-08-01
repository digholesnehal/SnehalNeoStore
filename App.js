/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
//import { createStackNavigator } from 'react-navigation';
import Login from './app/components/screens/Login/Login.js';


  // export default createStackNavigator({
  //   Home: {
  //         Login: screens.Loginscreen.Login
  //   },
  // });

  export default class App extends Component{
    render(){
      return(
        <Login/>
      );
    }
  }