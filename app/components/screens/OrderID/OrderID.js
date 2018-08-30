import React, { Component } from 'react';
import {
    Platform, Dimensions, StyleSheet, Text, View,
    TouchableOpacity, FlatList,
} from 'react-native';
import styles from './Styles';
import * as Colors from '../../../utils/colors.js';
import Header from '../../Header/header.js';
import { AsyncStorage } from 'react-native';
import * as url from '../../../lib/api.js';
import { apiCaller } from '../../../lib/Fetcher.js';
import Icon from '../../../utils/Icons.js';
import Loader from '../../Loader/Loader.js';
import { userObj, userProvider } from '../../../lib/UserProvider.js';

export default class OrderID extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loader: false,
            OrderId: this.props.navigation.state.params.ID,
            response: '',
        }
    }

    componentDidMount() {
        this.fetchOrdersData();
    }

    fetchOrdersData = () => {
        this.setState({ loader: true })
        return apiCaller(
            url.host + url.OrderDetail,
            'GET', { access_token: userObj.user_data.access_token }, null,
            (response) => {
                this.setState({ loader: false })
                if (response.status == 200) {
                    this.setState({
                        response: response.data
                    });
                    console.log(this.state.response)
                }
                else {
                    if (response.hasOwnProperty('user_msg')) {
                        alert(response.user_msg)
                    }
                    else {
                        alert(response.message);
                    }
                }
            }
        );
    }

    render() {
        return (
            <View style={styles.container}>
                <Header
                    title={'Order ID: ' + this.OrderId}
                    mainTitle={false}
                    isDrawer={false}
                    isSearch={true}
                    back={() => { this.props.navigation.goBack(null) }} />
                {/* <FlatList
                    onEndReachedThreshold={0.1}
                    data={this.state.response}
                    keyExtractor={(item, index) => index + ""}
                    renderItem={({ item }) =>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('OrderID', { ID: item.id })}>
                            <View style={styles.itemRow}>
                                <View style={styles.column1}>
                                    <View style={styles.headingPadding}>
                                        <Text style={styles.Heading}>Order ID : {item.id}</Text>
                                    </View>
                                    <View style={styles.dateView}>
                                        <Text style={styles.orderDate}>Ordered Date : {item.created}</Text>
                                    </View>
                                </View>
                                <View style={styles.column2}>
                                    <Text style={styles.Heading}>&#8377;{item.cost}</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    }
                /> */}
            </View>
        );
    }
}

