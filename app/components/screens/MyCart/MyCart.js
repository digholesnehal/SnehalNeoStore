import React, { Component } from 'react';
import {
    Platform, Dimensions, ScrollView, StyleSheet, Text, View,
    KeyboardAvoidingView, Image, Alert,
    TextInput, TouchableOpacity
} from 'react-native';
import styles from "./Styles";
import Icon from '../../../utils/Icons.js';
import Header from '../../../components/Header/header.js';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { userObj, userProvider } from '../../../lib/UserProvider.js';
import { apiCaller } from '../../../lib/Fetcher.js';
import * as url from '../../../lib/api.js';
import { SwipeListView } from 'react-native-swipe-list-view';
import * as Colors from '../../../utils/colors';
import ModalDropdown from 'react-native-modal-dropdown';
import { DrawerActions } from 'react-navigation';


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

    trash = (item, index) => {
        Alert.alert(
            'Are you sure, you want to delete?',
            [
                { text: 'Cancel', onPress: () => '', style: 'cancel' },
                { text: 'OK', onPress: () => this.delete(item, index) },
            ],
            { cancelable: false }
        )

    }

    delete = (item, index) => {
        this.setState({ loader: true })

        let formData = new FormData();
        formData.append('product_id', item.product_id)
        return apiCaller(
            url.host + url.Delete,
            'POST', { access_token: this.state.access_token }, formData,
            (response) => {
                this.setState({ loader: false })
                if (response.status == 200) {
                    this.state.response.total = this.state.response.total - this.state.response.data[index].product.sub_total;
                    this.state.response.data.splice(index, 1)
                    userProvider.setObjKey('total_carts', response.total_carts)
                    this.setState({ loader: false })
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

    selectQty = (index, id, value) => {
        this.setState({ loader: true })
        let formData = new FormData();
        formData.append('product_id', id)
        formData.append('quantity', value)
        console.log(this.state.response.data[index])
        return apiCaller(
            url.host + url.EditCart,
            'POST', { access_token: this.state.access_token }, formData,
            (response) => {
                this.setState({ loader: false })
                if (response.status == 200) {
                    alert(response.user_msg)
                    this.state.response.data[index].quantity = value
                    this.state.response.total = this.state.response.total - this.state.response.data[index].product.sub_total;
                    this.state.response.data[index].product.sub_total = (this.state.response.data[index].product.cost) * (this.state.response.data[index].quantity);
                    this.state.response.total = this.state.response.total + this.state.response.data[index].product.sub_total;
                    this.setState({ loader: false })
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
                    isSearch={true}
                    back={() => { this.props.navigation.goBack(null) }} />
                <View>
                    <SwipeListView
                        useFlatList
                        data={this.state.response.data}
                        keyExtractor={(item, index) => "" + index}

                        renderItem={({ item, index }) => (
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
                                        <ModalDropdown
                                            dropdownTextStyle={styles.quantity}
                                            onSelect={(i, value) => { return this.selectQty(index, item.product_id, value) }}
                                            options={['1', '2', '3', '4', '5', '6', '7', '8']}
                                            dropdownStyle={styles.dropDown}>
                                            <View style={styles.quantityView} >
                                                <Text style={styles.quantity}>{item.quantity}</Text>
                                                <Icon name="dropDown" size={10} color={Colors.blackPrimary} />
                                            </View>
                                        </ModalDropdown>
                                        <Text>&#8377;{item.product.sub_total}</Text>
                                    </View>
                                </View>
                            </View>
                        )}
                        renderHiddenItem={({ item, index }) => (
                            <View style={styles.deleteView}>
                                <TouchableOpacity style={styles.trash} onPress={() => this.trash(item, index)}>
                                    <Icon name="Delete" size={25} color={Colors.primary} />
                                </TouchableOpacity>
                            </View>
                        )}
                        rightOpenValue={-80}
                    />
                    <View style={styles.totalView}>
                        <Text style={styles.totalTxt}>TOTAL</Text>
                        <Text style={styles.totalTxt}>&#8377;{this.state.response.total}</Text>
                    </View>
                    <View style={styles.btnView}>
                        <TouchableOpacity style={styles.buttonStyle} onPress={() => this.props.navigation.navigate('AddAddress')}>
                            <Text style={styles.btnTxt}> ORDER NOW </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

        )
    }
}