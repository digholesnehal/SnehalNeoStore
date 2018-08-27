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
import * as Colors from '../../../utils/colors';
import FeatherIcon from 'react-native-vector-icons/dist/Feather';
import ModalDropdown from 'react-native-modal-dropdown';


export default class MyCart extends Component {

    constructor(props) {
        super(props);
        this.state = {
            response: '',
            loader: false,
            access_token: userObj.user_data.access_token,
        }
    }

    componentDidMount() {
        this.fetchResult();
    }

    fetchResult = () => {
        this.setState({ loader: true })
        return apiCaller(
            url.host + url.MyCart, 'GET', {}, null,
            (response) => {
                this.setState({ loader: false })
                if (response.status == 200) {
                    this.setState({
                        response: response,
                    });
                    console.log('dataArray:', response)
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

    trash = (id) => {
        this.setState({ loader: true })
        let formData = new FormData();
        console.log('id:', id.item.product_id)
        formData.append('product_id', id.item.product_id)
        return apiCaller(
            url.host + url.Delete,
            'POST', { access_token: this.state.access_token }, formData,
            (response) => {
                this.setState({ loader: false })
                if (response.status == 200) {
                    alert(response.user_msg)
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
                <View>
                    <SwipeListView
                        useFlatList
                        data={this.state.response.data}
                        keyExtractor={(item, index) => "" + index}
                        renderItem={({ item }) => (
                            <View style={styles.SwipeView}>
                                <View style={styles.imgView}>
                                    <Image style={styles.img} source={{ uri: item.product.product_images }} />
                                </View>
                                <View style={styles.midSwipe}>
                                    <View style={styles.midPartitionC}>
                                        <Text style={styles.name}>{item.product.name}</Text>
                                        <Text style={styles.category}>({item.product.product_category})</Text>
                                    </View>
                                    <View style={styles.midPartitionR}>
                                        <ModalDropdown options={['1', '2', '3', '4', '5', '6', '7', '8']}>
                                            <View style={styles.quantityView} >
                                                <Text style={styles.quantity}>{item.quantity}</Text>
                                                <FeatherIcon name="chevron-down" size={20} color={Colors.blackPrimary} />
                                            </View>
                                        </ModalDropdown>
                                        <Text>&#8377;{item.product.cost}</Text>
                                    </View>
                                </View>

                            </View>
                        )}
                        renderHiddenItem={(item, rowMap) => (
                            <View style={styles.deleteView}>
                                <TouchableOpacity style={styles.trash} onPress={() => this.trash(item)}>
                                    <FeatherIcon name="trash-2" size={30} color={Colors.primary} />
                                </TouchableOpacity>
                            </View>
                        )}
                        rightOpenValue={-80}
                    />
                    <View style={styles.totalView}>
                        <Text style={styles.totalTxt}>TOTAL</Text>
                        <Text style={styles.totalTxt}>&#8377;{this.state.response.total}</Text>
                    </View>
                </View>

            </View>

        )
    }
}