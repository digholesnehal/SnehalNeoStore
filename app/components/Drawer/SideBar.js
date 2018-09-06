import React, { Component } from 'react';
import { Text, TouchableOpacity, View, Image, Platform, ScrollView } from "react-native";
import styles from './Styles';
import Icon from '../../utils/Icons.js';
import { AsyncStorage } from 'react-native';
import { withNavigation } from 'react-navigation';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { MyCart } from '../../lib/api';
import { connect } from 'react-redux';

class SideBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loader: false
        };
    }

    drawerClose(screen, id) {
        setTimeout(() => {
            this.props.navigation.navigate(screen, id);
        }, 800);
    }

    clearData = () => {
        AsyncStorage.removeItem('access_token', (err) => {
            this.props.navigation.replace('Login');
        });
    }

    render() {
        return (
            <View style={styles.bg}>
                <ScrollView>
                    {/* <TouchableOpacity style={styles.}> */}
                    <View style={styles.top}>
                        {this.props.user_data.profile_pic === null || this.props.user_data.profile_pic === '' ? <Image style={styles.image} source={require('../../assets/images/appdp.jpg')} /> : <Image style={styles.image} source={{ uri: this.props.user_data.profile_pic }} />}
                        <Text style={styles.UserName}>{this.props.user_data.first_name} {this.props.user_data.last_name}</Text>
                        <Text style={styles.email}>{this.props.user_data.email}</Text>
                    </View>
                    {/* </TouchableOpacity> */}
                    <TouchableOpacity style={{ flexDirection: 'row' }} onPress={() => { this.drawerClose('MyCart', {}); this.props.navigation.closeDrawer() }}>
                        <View style={styles.partitions}>
                            <View style={{ flex: 1 }}>
                                <Icon name="cart" style={styles.icon} />
                            </View>
                            <View style={{ flex: 5 }}>
                                <Text style={styles.options}>My Cart</Text>
                            </View>
                            <View style={styles.itemCount}>
                                <Text style={styles.count}>
                                    {this.props.total_carts}
                                </Text>
                            </View>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ flexDirection: 'row' }} onPress={() => { this.drawerClose('ProductList', { ID: 1, Name: 'Tables' }); this.props.navigation.closeDrawer() }}>
                        <View style={styles.partitions}>
                            <Icon name="table" style={styles.icon} />
                            <Text style={styles.options}>Tables</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ flexDirection: 'row' }} onPress={() => { this.drawerClose('ProductList', { ID: 3, Name: 'Sofas' }); this.props.navigation.closeDrawer() }}>
                        <View style={styles.partitions}>
                            <Icon name="sofa" style={styles.icon} />
                            <Text style={styles.options}>Sofas</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ flexDirection: 'row' }} onPress={() => { this.drawerClose('ProductList', { ID: 2, Name: 'Chairs' }); this.props.navigation.closeDrawer() }}>
                        <View style={styles.partitions}>
                            <Icon name="chair" style={styles.icon} />
                            <Text style={styles.options}>Chairs</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ flexDirection: 'row' }} onPress={() => { this.drawerClose('ProductList', { ID: 4, Name: 'Cupboards' }); this.props.navigation.closeDrawer() }}>
                        <View style={styles.partitions}>
                            <Icon name="cupboard" style={styles.icon} />
                            <Text style={styles.options}>Cupboards</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ flexDirection: 'row' }} onPress={() => { this.drawerClose('MyAccount', {}); this.props.navigation.closeDrawer() }}>
                        <View style={styles.partitions}>
                            <Icon name="user" style={styles.icon} />
                            <Text style={styles.options}>My Account</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ flexDirection: 'row' }} onPress={() => { this.drawerClose('StoreLocator', {}); this.props.navigation.closeDrawer() }}>
                        <View style={styles.partitions}>
                            <Icon name="Locator" style={styles.icon} />
                            <Text style={styles.options}>Store Locator</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ flexDirection: 'row' }} onPress={() => { this.drawerClose('MyOrders', {}); this.props.navigation.closeDrawer() }}>
                        <View style={styles.partitions}>
                            <Icon name="orders" style={styles.icon} />
                            <Text style={styles.options}>My Orders</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ flexDirection: 'row' }} onPress={() => this.clearData()}>
                        <View style={styles.partitions}>
                            <Icon name="log_out" style={styles.icon} />
                            <Text style={styles.options}>Logout</Text>
                        </View>
                    </TouchableOpacity>
                </ScrollView>
            </View >
        );
    }
}

const mapStateToProps = (state) => {
    return state;
};

export default connect(mapStateToProps)(SideBar);