import React, { Component } from 'react';
import {
    Platform, Dimensions, StyleSheet, Text, View,
    TouchableOpacity, ScrollView,
    FlatList, backgroundColor
} from 'react-native';
import Icon from '../../../utils/Icons.js';
import styles from './Styles';
import * as Colors from '../../../utils/colors';
import Header from '../../../components/Header/header.js';
import { AsyncStorage } from 'react-native';
import { userObj, userProvider } from '../../../lib/UserProvider.js';
import * as url from '../../../lib/api.js';
import { apiCaller } from '../../../lib/Fetcher.js';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';


export default class AddressList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            Address: [],
            selected: 0,
            loader: true,
        }
    }

    componentDidMount() {
        var rad = this.state.selected
        this.setState({ selected: rad - 1 })
        const didBlurSubscription = this.props.navigation.addListener(
            'willFocus',
            payload => {
                AsyncStorage.getItem('Address').then((Address) => {
                    const UserAddress = Address ? JSON.parse(Address) : [];
                    this.state.Address.push(UserAddress);
                    this.setState({ selected: rad })
                    console.log('address list refreshed')
                })
            }
        );
    }

    delete = (index) => {
        this.setState({ selected: index - 2 })
        this.state.Address[0].splice(index, 1)
        AsyncStorage.setItem('Address', JSON.stringify(this.state.Address[0]));
        this.setState({ selected: index })
    }

    select = (index) => {
        console.log('index', index)
        this.setState({ selected: index })
    }

    placeOrder = () => {
        var order = this.state.Address[0].slice(this.state.selected, this.state.selected + 1)
        var place = JSON.stringify(order[0])
        let formData = new FormData();
        formData.append('address', place)
        this.setState({ loader: true })
        apiCaller(url.host + url.Order, 'POST', { access_token: userObj.user_data.access_token }, formData,
            (response) => {
                this.setState({ loader: false })
                if (response.status == 200) {
                    alert(response.user_msg)
                    this.props.navigation.navigate('HomeScreen')
                }
                else {
                    alert(response.user_msg)
                }
            });
    }

    render() {
        console.log('render index value=', this.state.selected)
        return (
            <View style={styles.container} >
                <Header
                    title={'Address List'}
                    mainTitle={false}
                    isDrawer={false}
                    isSearch={false}
                    back={() => { this.props.navigation.goBack(null) }}
                    search={() => { this.props.navigation.navigate('AddAddress') }} />
                <ScrollView>
                    <View style={styles.container1}>
                        <Text style={styles.shippping}>Shipping Address</Text>
                        <FlatList
                            onEndReachedThreshold={0.1}
                            data={this.state.Address[0]}
                            keyExtractor={(item, index) => index + ""}
                            extraData={this.state.selected}
                            renderItem={({ item, index }) =>
                                <View style={styles.itemRow}>
                                    {console.log(index)}

                                    <TouchableOpacity style={styles.radioView} onPress={() => this.select(index)} >
                                        <View style={[styles.radio, this.state.selected == index ? { backgroundColor: Colors.gRadioChecked } : { backgroundColor: Colors.primary }]} />
                                    </TouchableOpacity>
                                    <View style={styles.addressBox}>
                                        <View style={styles.HeadView}>
                                            <Text style={styles.Heading}>{userObj.user_data.first_name} {userObj.user_data.last_name}</Text>
                                            <TouchableOpacity onPress={() => this.delete(index)}>
                                                <Icon name="multiply" size={15} color={Colors.blackSecondary} />
                                            </TouchableOpacity>
                                        </View>
                                        <Text style={styles.shippping}>
                                            {item}
                                        </Text>
                                    </View>
                                </View>
                            } />
                        <View style={styles.btnView}>
                            <TouchableOpacity style={styles.buttonStyle} onPress={() => this.placeOrder()}>
                                <Text style={styles.btnTxt}> PLACE ORDER </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

