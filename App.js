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
import ProductList from './app/components/screens/ProductListing/ProductList.js';
import ProductDetail from './app/components/screens/ProductDetail/ProductDetail.js';
import MyAccount from './app/components/screens/MyAccount/MyAccount.js';
import EditProfile from './app/components/screens/EditProfile/EditProfile.js';
import ResetPass from './app/components/screens/ResetPass/ResetPass.js';
import MyCart from './app/components/screens/MyCart/MyCart.js';
import SplashScreen from 'react-native-splash-screen';
import AddAddress from './app/components/screens/AddAddress/AddAddress.js';
import AddressList from './app/components/screens/AddressList/AddressList.js';
import MyOrders from './app/components/screens/MyOrders/MyOrders.js';
import OrderID from './app/components/screens/OrderID/OrderID.js';
import StoreLocator from './app/components/screens/StoreLocator/StoreLocator.js';
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Root } from 'native-base';


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

    ResetPass: {
        screen: ResetPass,
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

    MyAccount: {
        screen: MyAccount,
        navigationOptions: {
            header: null,
        }
    },

    EditProfile: {
        screen: EditProfile,
        navigationOptions: {
            header: null,
        }
    },

    ProductList: {
        screen: ProductList,
        navigationOptions: {
            header: null
        }
    },

    ProductDetail: {
        screen: ProductDetail,
        navigationOptions: {
            header: null
        }
    },

    MyCart: {
        screen: MyCart,
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

    AddAddress: {
        screen: AddAddress,
        navigationOptions: {
            header: null,
        }
    },

    AddressList: {
        screen: AddressList,
        navigationOptions: {
            header: null,
        }
    },
    MyOrders: {
        screen: MyOrders,
        navigationOptions: {
            header: null,
        }
    },
    OrderID: {
        screen: OrderID,
        navigationOptions: {
            header: null,
        }
    },
    StoreLocator: {
        screen: StoreLocator,
        navigationOptions: {
            header: null
        }
    }
},
    {
        initialRouteName: 'Starter',
    },

);

const initialState = {}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case "EDIT":
            return { ...state, ...action.state }
            break;

        default:
            return state;
    }
};


const store = createStore(
    profileReducer
);

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Root>
                    <RootStack />
                </Root>
            </Provider>
        );
    }
}