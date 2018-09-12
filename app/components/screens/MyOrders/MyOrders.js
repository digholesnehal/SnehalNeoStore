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
import { connect } from 'react-redux';
import { Toast } from 'native-base';

class MyOrders extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loader: false,
            response: '',
        }
    }

    componentDidMount() {
        this.fetchOrdersData();
    }

    fetchOrdersData = () => {
        this.setState({ loader: true })
        return apiCaller(
            url.host + url.OrderList,
            'GET', { access_token: this.props.user_data.access_token }, null,
            (response) => {
                this.setState({ loader: false })
                if (response.status == 200) {
                    this.setState({
                        response: response.data
                    });
                }
                else {
                    if (response.hasOwnProperty('user_msg')) {
                        Toast.show({
                            text: response.user_msg,
                            duration: 5000
                        })
                    }
                    else {
                        Toast.show({
                            text: response.message,
                            duration: 5000
                        })
                    }
                }
            }
        );
    }

    render() {
        return (
            <View style={styles.container}>
                <Header
                    title={'My Orders'}
                    mainTitle={false}
                    isDrawer={false}
                    isSearch={true}
                    back={() => { this.props.navigation.goBack() }} />
                {this.state.loader ? <Loader /> : null}
                <FlatList
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
                                    <Text style={styles.cost}>&#8377;{item.cost}</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    }
                />
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return state;
};

export default connect(mapStateToProps)(MyOrders);