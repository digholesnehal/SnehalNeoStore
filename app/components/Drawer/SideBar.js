import React, { Component } from 'react';
import { Text, TouchableOpacity, View, Image, Platform } from "react-native";
import styles from './Styles';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import { AsyncStorage } from 'react-native';
import { withNavigation } from 'react-navigation';
import { userObj, userProvider } from '../../lib/UserProvider.js';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export default class SideBar extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    clearData = () => {
        AsyncStorage.removeItem('access_token', (err) => {
            this.props.navigation.replace('Login');
        });
    }

    render() {
        return (
            <View style={styles.bg}>
                <KeyboardAwareScrollView>
                    <View style={styles.top}>
                        {userObj.user_data.profile_pic === null || userObj.user_data.profile_pic === '' ? <Image style={styles.image} source={require('../../assets/images/appdp.jpg')} /> : <Image style={styles.image} source={{ uri: userObj.user_data.profile_pic }} />}
                        <Text style={styles.UserName}> {userObj.user_data.username} </Text>
                        <Text style={styles.email}>{userObj.user_data.email}</Text>
                    </View>
                    <TouchableOpacity style={{ flexDirection: 'row' }} onPress={() => this.props.navigation.navigate('MyCart')}>
                        <View style={styles.partitions}>
                            <Icon name="shopping-cart" style={styles.icon} />
                            <Text style={styles.options}>My Cart</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ flexDirection: 'row' }} onPress={() => this.props.navigation.navigate('ProductList', { ID: 1, Name: 'Tables' })}>
                        <View style={styles.partitions}>
                            <Icon name="columns" style={styles.icon} />
                            <Text style={styles.options}>Tables</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ flexDirection: 'row' }} onPress={() => this.props.navigation.navigate('ProductList', { ID: 3, Name: 'Sofas' })}>
                        <View style={styles.partitions}>
                            <Icon name="archive" style={styles.icon} />
                            <Text style={styles.options}>Sofas</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ flexDirection: 'row' }} onPress={() => this.props.navigation.navigate('ProductList', { ID: 2, Name: 'Chairs' })}>
                        <View style={styles.partitions}>
                            <Icon name="cube" style={styles.icon} />
                            <Text style={styles.options}>Chairs</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ flexDirection: 'row' }} onPress={() => this.props.navigation.navigate('ProductList', { ID: 4, Name: 'Cupboards' })}>
                        <View style={styles.partitions}>
                            <Icon name="building" style={styles.icon} />
                            <Text style={styles.options}>Cupboards</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ flexDirection: 'row' }} onPress={() => this.props.navigation.navigate('MyAccount')}>
                        <View style={styles.partitions}>
                            <Icon name="user" style={styles.icon} />
                            <Text style={styles.options}>My Account</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ flexDirection: 'row' }} onPress={() => this.props.navigation.navigate('Tables')}>
                        <View style={styles.partitions}>
                            <Icon name="map-marker" style={styles.icon} />
                            <Text style={styles.options}>Store Locator</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ flexDirection: 'row' }} onPress={() => this.props.navigation.navigate('Tables')}>
                        <View style={styles.partitions}>
                            <Icon name="list-alt" style={styles.icon} />
                            <Text style={styles.options}>My Orders</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ flexDirection: 'row' }} onPress={() => this.clearData()}>
                        <View style={styles.partitions}>
                            <Icon name="sign-out" style={styles.icon} />
                            <Text style={styles.options}>Logout</Text>
                        </View>
                    </TouchableOpacity>
                </KeyboardAwareScrollView>
            </View >
        );
    }
}