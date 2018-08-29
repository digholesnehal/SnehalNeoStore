import React, { Component } from 'react';
import {
    Platform, Dimensions, StyleSheet, Text, View,
    ImageBackground, TextInput, TouchableOpacity, FlatList
} from 'react-native';
import Icon from '../../../utils/Icons.js';
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';
import styles from './Styles';
import * as Colors from '../../../utils/colors';
import Header from '../../../components/Header/header.js';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';
import { AsyncStorage } from 'react-native';
import * as url from '../../../lib/api.js';
import { userObj, userProvider } from '../../../lib/UserProvider.js';

export default class AddressList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            Address: [],
        }
    }

    componentDidMount() {
        AsyncStorage.getItem('Address').then((Address) => {

            const UserAddress = Address ? JSON.parse(Address) : [];
            this.state.Address.push(UserAddress);

            console.log(this.state.Address)
        })
    }


    render() {
        return (
            <View style={styles.container}>
                <Header
                    title={'Address List'}
                    mainTitle={false}
                    isDrawer={false}
                    isSearch={false}
                    back={() => { this.props.navigation.goBack(null) }}
                    search={() => { this.props.navigation.navigate('AddAddress') }} />
                <View style={styles.container1}>
                    <Text style={styles.shippping}>Shipping Address</Text>
                    <FlatList
                        onEndReachedThreshold={0.1}
                        data={this.state.Address}
                        keyExtractor={(item, index) => index + ""}
                        renderItem={({ item }) =>
                            <View style={styles.itemRow}>
                                <View>
                                </View>
                                <View style={styles.addressBox}>
                                    <View style={styles.HeadView}>
                                        <Text style={styles.Heading}>{userObj.user_data.first_name} {userObj.user_data.last_name}</Text>
                                        <Icon name="multiply" size={15} style={styles.close} color={Colors.blackSecondary} />
                                    </View>
                                </View>
                            </View>

                        }
                        onEndReached={this.fetchResult}
                    />
                </View>
            </View>
        )
    }
}

