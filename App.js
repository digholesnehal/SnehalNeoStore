/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { createStackNavigator, createDrawerNavigator } from 'react-navigation';
import Login from './app/components/screens/Login/Login.js';
import ForgotPass from './app/components/screens/ForgotPass/ForgotPass.js'
import Register from './app/components/screens/Register/Register.js'
import HomeScreen from './app/components/screens/HomeScreen/HomeScreen.js'
import SideBar from "./app/components/Drawer/SideBar.js";
import {AsyncStorage} from 'react-native';


  const DrawerStack = createDrawerNavigator({
    HomeScreen:{
      screen:HomeScreen,
      navigationOptions:{
        header:null,
      },
    },
  },
  {
    contentComponent: (props) => {
      return <SideBar navigation = {props.navigation}/>
    },
    }
); 


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

    DrawerStack:{
      screen:DrawerStack,
      navigationOptions:{
        header:null,
      }
    },
  },
      {
      initialRouteName: 'Login',
      },
    
    );



    const RootStack1= createStackNavigator({
    
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

    DrawerStack:{
      screen:DrawerStack,
      navigationOptions:{
        header:null,
      }
    },
  },
      {
      initialRouteName: 'DrawerStack',
      },
    
    );



  export default class App extends Component{

    constructor(props, context) {
      super(props, context);
      this.state = {
        logged: false,
        loading: true,
      };
    };

    async componentWillMount(){
      const value = await AsyncStorage.getItem('email');
      console.log(value);
      if(value !== null){
          this.setState({
            logged: true,
            loading:false,
          });
          return <RootStack1/>;
      }
      else{

        this.setState({
          loading:false,
        })
        return <RootStack/>;
        }
    }

    render(){
      if (this.state.loading) {
        return <View><Text>Loading...</Text></View>;
      }
      else if(this.state.logged && !this.state.loading)
      return(  
        <RootStack1/>
      );
      else
      return(<RootStack/>)
    }
  }