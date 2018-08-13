import React, { Component } from 'react';
import { Text, TouchableOpacity, View, Image, Platform } from "react-native";
import styles from './Styles';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import { AsyncStorage } from 'react-native';
import { withNavigation } from 'react-navigation';


export default class SideBar extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        console.log(this
            .props
            .navigation);
    }

    clearData = () => {
        AsyncStorage.removeItem('access_token', (err) => {
            this.props.navigation.navigate('Login');
        });
    }

    render() {
        return (
            <View style={styles.bg}>
                <View style={styles.top}>
                    <Image style={styles.image} source={require('../../assets/images/appdp.jpg')} />
                    <Text style={styles.UserName}> Snehal Dighole </Text>
                    <Text style={styles.email}>snehal.dighole@neosofttech.com</Text>
                </View>
                <View style={styles.partitions}>
                    <TouchableOpacity style={{ flexDirection: 'row' }}>
                        <Icon name="shopping-cart" style={styles.icon} />
                        <Text style={styles.options}>My Cart</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.partitions}>
                    <TouchableOpacity style={{ flexDirection: 'row' }} onPress={() => this.props.navigation.navigate('Tables')}>
                        <Icon name="columns" style={styles.icon} />
                        <Text style={styles.options}>Tables</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.partitions}>
                    <TouchableOpacity style={{ flexDirection: 'row' }}>
                        <Icon name="archive" style={styles.icon} />
                        <Text style={styles.options}>Sofas</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.partitions}>
                    <TouchableOpacity style={{ flexDirection: 'row' }}>
                        <Icon name="cube" style={styles.icon} />
                        <Text style={styles.options}>Chairs</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.partitions}>
                    <TouchableOpacity style={{ flexDirection: 'row' }}>
                        <Icon name="building" style={styles.icon} />
                        <Text style={styles.options}>Cupboards</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.partitions}>
                    <TouchableOpacity style={{ flexDirection: 'row' }}>
                        <Icon name="user" style={styles.icon} />
                        <Text style={styles.options}>My Account</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.partitions}>
                    <TouchableOpacity style={{ flexDirection: 'row' }}>
                        <Icon name="map-marker" style={styles.icon} />
                        <Text style={styles.options}>Store Locator</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.partitions}>
                    <TouchableOpacity style={{ flexDirection: 'row' }}>
                        <Icon name="list-alt" style={styles.icon} />
                        <Text style={styles.options}>My Orders</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.partitions}>
                    <TouchableOpacity style={{ flexDirection: 'row' }} onPress={() => this.clearData()}>
                        <Icon name="sign-out" style={styles.icon} />
                        <Text style={styles.options}>Logout</Text>
                    </TouchableOpacity>
                </View>
            </View>

        );
    }
}