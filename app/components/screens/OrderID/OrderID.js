import React, { Component } from 'react';
import {
    Platform, Dimensions, StyleSheet, Text, View,
    TouchableOpacity, FlatList, ScrollView, Image
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

class OrderID extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loader: false,
            OrderId: this.props.navigation.state.params.ID,
            response: '',
        }
    }

    componentDidMount() {
        this.setState({ loader: true })
        return apiCaller(
            url.host + url.OrderDetail + "?order_id=" + this.state.OrderId,
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
                    title={'Order ID: ' + this.state.OrderId}
                    mainTitle={false}
                    isDrawer={false}
                    isSearch={true}
                    back={() => { this.props.navigation.goBack(null) }} />
                {this.state.loader ? <Loader /> : null}
                <ScrollView>
                    <FlatList
                        onEndReachedThreshold={0.1}
                        data={this.state.response.order_details}
                        keyExtractor={(item, index) => index + ""}
                        renderItem={({ item }) =>
                            <View style={styles.SwipeView}>
                                <View style={styles.imgView}>
                                    <Image style={styles.img} source={{ uri: item.prod_image }} />
                                </View>
                                <View style={styles.midSwipe}>
                                    <View style={styles.midPartitionC}>
                                        <Text style={styles.name} numberOfLines={1}>{item.prod_name}</Text>
                                        <Text style={styles.category}>({item.prod_cat_name})</Text>
                                    </View>
                                    <View style={styles.midPartitionR}>
                                        <Text style={styles.quantity}>QTY : {item.quantity}</Text>
                                        <Text>&#8377;{item.total}</Text>
                                    </View>
                                </View>
                            </View>
                        }
                    />
                    <View style={styles.totalView}>
                        <Text style={styles.totalTxt}>TOTAL</Text>
                        <Text style={styles.totalTxt}>&#8377;{this.state.response.cost}</Text>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    return state;
};

export default connect(mapStateToProps)(OrderID);