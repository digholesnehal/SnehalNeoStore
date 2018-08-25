import React, { Component } from 'react';
import {
    Platform, Dimensions, ScrollView, StyleSheet, Text, View,
    KeyboardAvoidingView, Image,
    TextInput, TouchableOpacity
} from 'react-native';
import styles from "./Styles";
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import Header from '../../../components/Header/header.js';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { userObj, userProvider } from '../../../lib/UserProvider.js';
import { apiCaller } from '../../../lib/Fetcher.js';
import * as url from '../../../lib/api.js';
import { SwipeListView } from 'react-native-swipe-list-view';
// import Icon from 'react-native-vector-icons/dist/FontAwesome';


export default class MyCart extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dataArray: [{ product: {} }],
            loader: false,
        }
    }

    componentDidMount() {
        this.fetchResult();
    }

    fetchResult = () => {
        this.setState({ loader: true })
        const { dataArray } = this.state
        return apiCaller(
            url.host + url.MyCart, 'GET', {}, null,
            (response) => {
                this.setState({ loader: false })
                if (response.status == 200) {
                    this.setState({
                        dataArray: response.data,
                    });
                    console.log('dataArray:', this.state.dataArray)
                }
                else {
                    if (response.hasOwnProperty('user_msg')) {
                        alert(response.user_msg);
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
                    title={'My Cart'}
                    mainTitle={false}
                    isDrawer={false}
                    isSearch={false}
                    back={() => { this.props.navigation.goBack(null) }} />
                <SwipeListView
                    useFlatList
                    data={this.state.dataArray}
                    keyExtractor={(item, index) => "" + index}
                    renderItem={({ item }) => (
                        <View style={styles.SwipeView}>
                            <View style={styles.imgView}>
                                <Image style={styles.img} source={{ uri: item.product.product_images }} />
                            </View>
                            <View style={styles.midSwipe}>
                                <View style={styles.midPartitionC}>
                                    <Text style={styles.name}>{item.product.name}</Text>
                                    <Text style={styles.category}>{item.product.product_category}</Text>
                                </View>
                                <View style={styles.midPartitionR}>
                                    <TouchableOpacity style={styles.quantityView}>
                                        <Text>{item.quantity}</Text>
                                        {/* <Icon name="angle-down" style={styles.icon} /> */}
                                    </TouchableOpacity>
                                    <Text>&#8377;{item.product.cost}</Text>
                                </View>
                            </View>
                            <View style={styles.priceView}>
                            </View>
                        </View>
                    )}
                    renderHiddenItem={(item, rowMap) => (
                        <View style={styles.rowBack}>

                        </View>
                    )}
                    leftOpenValue={75}
                    rightOpenValue={-75}
                />
            </View>

        )
    }
}