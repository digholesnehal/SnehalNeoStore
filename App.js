/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createDrawerNavigator } from 'react-navigation';
import Login from './app/components/screens/Login/Login.js';
import ForgotPass from './app/components/screens/ForgotPass/ForgotPass.js'
import Register from './app/components/screens/Register/Register.js'
import HomeScreen from './app/components/screens/HomeScreen/HomeScreen.js'
import SideBar from "./app/components/Drawer/SideBar.js";
import Starter from './app/components/screens/Starter/Starter.js';
import Tables from './app/components/screens/ProductListing/Tables/Tables.js';
import Sofas from './app/components/screens/ProductListing/Sofas/Sofas.js';
import Chairs from './app/components/screens/ProductListing/Chairs/Chairs.js';
import Beds from './app/components/screens/ProductListing/Beds/Beds.js';


const DrawerStack = createDrawerNavigator({
    HomeScreen: {
        screen: HomeScreen,
        navigationOptions: {
            header: null,
        },
    },
},
    {
        contentComponent: (props) => {
            return <SideBar navigation={props.navigation} />
        },
    }
);


const RootStack = createStackNavigator({

    Login: {
        screen: Login,
        navigationOptions: {
            header: null,
        }
    },

    Register: {
        screen: Register,
        navigationOptions: {
            header: null,
        }
    },

    ForgotPass: {
        screen: ForgotPass,
        navigationOptions: {
            header: null,
        }
    },

    DrawerStack: {
        screen: DrawerStack,
        navigationOptions: {
            header: null,
        }
    },

    Tables: {
        screen: Tables,
        navigationOptions: {
            header: null
        }
    },

    Chairs: {
        screen: Chairs,
        navigationOptions: {
            header: null
        }
    },

    Sofas: {
        screen: Sofas,
        navigationOptions: {
            header: null
        }
    },

    Beds: {
        screen: Beds,
        navigationOptions: {
            header: null
        }
    },

    Starter: {
        screen: Starter,
        navigationOptions: {
            header: null,
        }
    },
},
    {
        initialRouteName: 'Starter',
    },

);

export default class App extends Component {
    render() {
        return (<RootStack />);
    }
}