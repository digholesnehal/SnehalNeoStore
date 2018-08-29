import React, { Component } from 'react';
import {
    Platform, Dimensions, StyleSheet, Text, View,
    TextInput, TouchableOpacity, FlatList, Image,
    ScrollView, KeyboardAvoidingView
} from 'react-native';
import styles from './Styles';
import * as Colors from '../../../utils/colors.js';
import Header from '../../Header/header.js';
import { AsyncStorage } from 'react-native';
import * as url from '../../../lib/api.js';
import { apiCaller } from '../../../lib/Fetcher.js';
import Stars from 'react-native-stars';
import Loader from '../../Loader/Loader.js';
import Icon from '../../../utils/Icons.js';
import Modal from "react-native-modal";
import { Share } from 'react-native';
import { userObj, userProvider } from '../../../lib/UserProvider.js';

export default class ProductList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataArray: [],
            loader: false,
            product_id: this.props.navigation.state.params.ID,
            category: this.props.navigation.state.params.category,
            URI: 'abc',
            horizontalScroll: false,
            buyNowVisible: false,
            RatingVisible: false,
            opacity: 1,
            Qty: '',
            access_token: '',
            stars: ''
        }
    }

    componentDidMount() {
        this.setState({ loader: true })
        const { dataArray, URI } = this.state
        return apiCaller(
            url.host + url.productDetailing + "?product_id=" + this.state.product_id,
            'GET', {}, null,
            (response) => {
                this.setState({ loader: false })
                if (response.status == 200) {
                    this.setState({
                        dataArray: response.data,
                        URI: response.data.product_images[0].image,
                    });
                    response.data.product_images.length > 2 ? this.setState({ horizontalScroll: true }) : null
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
    sharing = () => {
        Share.share({
            message: 'Product Name:' + this.state.dataArray.name + '  Category:' + this.state.category,
            url: 'http://bam.tech',
            title: 'Category:' + this.state.category
        }, {
                // Android only:
                dialogTitle: 'Product Name:' + this.state.dataArray.name,
                // iOS only:
                excludedActivityTypes: [
                    'com.apple.UIKit.activity.PostToTwitter'
                ]
            })
    }

    Submit(Qty) {
        AsyncStorage.getItem('access_token').then((value) => {
            this.setState({ access_token: value })
        })
        this.setState({ loader: true })
        let formData = new FormData();
        formData.append('quantity', this.state.Qty)
        formData.append('product_id', this.state.product_id)
        apiCaller(url.host + url.AddToCart, 'POST', { access_token: this.state.access_token }, formData,
            (response) => {
                console.log('response=', response)
                this.setState({ loader: false })
                if (response.status == 200) {
                    this.BuyNowPopUp(!this.state.buyNowVisible)
                    userProvider.setObjKey('total_carts', response.total_carts)
                    alert(response.user_msg)
                }
                else {
                    if (response.hasOwnProperty('user_msg')) {
                        console.log(response.status)

                        alert(response.user_msg);
                    }
                    else {
                        alert(response.message);
                    }
                }
            }
        );
    }
    Rate() {
        this.setState({ loader: true })
        let formData = new FormData();
        formData.append('rating', this.state.stars)
        formData.append('product_id', this.state.product_id)
        apiCaller(url.host + url.Rating, 'POST', {}, formData,
            (response) => {
                this.setState({ loader: false })
                if (response.status == 200) {
                    this.setState({ dataArray: response.data, })
                    this.RatingPopUp(!this.state.RatingVisible)
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


    RatingPopUp(visible) {
        this.setState({ RatingVisible: visible })
        visible ? this.setState({ opacity: 0.3 }) : this.setState({ opacity: 1 });
    }

    BuyNowPopUp(visible) {
        this.setState({ buyNowVisible: visible })
        visible ? this.setState({ opacity: 0.3 }) : this.setState({ opacity: 1 });
    }

    imgContent = (data) => {
        let returnData = [];
        for (let i = 0; i < data.length; i++) {
            returnData.push(
                <TouchableOpacity key={"k" + i} onPress={() => this.setState({ URI: data[i].image })}>
                    {(this.state.URI === data[i].image) ? <Image source={{ uri: data[i].image }} style={styles.Rimg} /> : <Image source={{ uri: data[i].image }} style={styles.Gimg} />}
                </TouchableOpacity>
            );
        }
        return returnData;
    }

    render() {
        return (
            <View style={[styles.container, { opacity: this.state.opacity }]}>
                <Header
                    title={this.state.dataArray.name}
                    mainTitle={false}
                    isDrawer={false}
                    isSearch={true}
                    back={() => { this.props.navigation.goBack(null) }} />
                {this.state.loader ? <Loader /> : null}

                <ScrollView>
                    <View style={styles.Details}>
                        <View >
                            <Text style={styles.Name}>
                                {this.state.dataArray.name}
                            </Text>
                        </View>
                        <View style={styles.container}>
                            <Text style={styles.category}>
                                Category - {this.state.category}
                            </Text>
                        </View>
                        <View style={styles.row} >
                            <Text style={styles.producer}>
                                {this.state.dataArray.producer}
                            </Text>
                            <Stars
                                default={this.state.dataArray.rating}
                                count={5}
                                half={true}
                                disabled={true}
                                backingColor={Colors.ratingBefore}
                                fullStar={<Icon name={'star'} style={[styles.myStarStyle]} />}
                                emptyStar={<Icon name={'star'} style={[styles.myStarStyle, styles.myEmptyStarStyle]} />}
                            />
                        </View>
                    </View>
                    <View style={styles.imgGrp}>
                        <View style={styles.priceView}>
                            <Text style={styles.price}>
                                Rs. {this.state.dataArray.cost}
                            </Text>
                            <TouchableOpacity onPress={() => { this.sharing() }}>
                                <Icon name="share" size={25} color={Colors.ratingBefore} />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.largeImg}>
                            {this.state.URI !== 'abc' ? <Image style={styles.Bimg} source={{ uri: this.state.URI }} />
                                : null}
                        </View>
                        <ScrollView horizontal={this.state.horizontalScroll}>
                            <View style={styles.subImages}>
                                {this.state.dataArray.product_images !== undefined ? this.imgContent(this.state.dataArray.product_images) : null}
                            </View>
                        </ScrollView>

                        <View style={styles.Description}>
                            <Text style={styles.heading}>DESCRIPTION</Text>
                            <Text style={styles.normalTxt}>{this.state.dataArray.description}</Text>
                        </View>
                    </View>
                    <View style={styles.footerBtn}>
                        <TouchableOpacity style={styles.BuyNow} onPress={() => { this.BuyNowPopUp(!this.state.buyNowVisible); }}>
                            <Text style={styles.BuyNowTxt}> BUY NOW </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.Rate} onPress={() => { this.RatingPopUp(!this.state.RatingVisible); }}>
                            <Text style={styles.RateTxt}> RATE </Text>
                        </TouchableOpacity>
                    </View>
                    {/* modal for buy now */}
                    <Modal visible={this.state.buyNowVisible} style={styles.modalView} transparent={true}>
                        <View style={{ flex: 2 }}></View>
                        <View style={styles.modalInnerView}>
                            <TouchableOpacity onPress={() => { this.BuyNowPopUp(!this.state.buyNowVisible); }}>
                                <Icon name="multiply" size={20} style={styles.close} color={Colors.redBtnBG} />
                            </TouchableOpacity>
                            <View style={styles.Submit}>
                                <Text style={styles.ModalName}>
                                    {this.state.dataArray.name}
                                </Text>
                            </View>
                            <View style={styles.Submit}>
                                <Image style={styles.Bimg} source={{ uri: this.state.URI }} />
                            </View>
                            <View style={styles.Submit}>
                                <Text style={styles.category}>
                                    Enter Qty
                            </Text>
                            </View>
                            <View style={styles.Submit}>
                                <View style={styles.qtyInput}>
                                    <TextInput maxLength={1} onChangeText={(changedText) => { this.setState({ "Qty": changedText }) }} style={styles.textField} keyboardType="number-pad">
                                    </TextInput>
                                </View>
                            </View>
                            <View style={styles.Submit}>
                                <TouchableOpacity style={styles.BuyNow} onPress={() => { this.Submit(!this.state.Qty); }}>
                                    <Text style={styles.BuyNowTxt}>SUBMIT</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={{ flex: 2 }}></View>
                    </Modal>


                    {/* modal for rating button */}
                    <Modal visible={this.state.RatingVisible} style={styles.modalView} transparent={true}>
                        <View style={{ flex: 1 }}></View>
                        <View style={styles.modalInnerView}>
                            <TouchableOpacity onPress={() => { this.RatingPopUp(!this.state.RatingVisible); }}>
                                <Icon name="multiply" size={20} style={styles.close} color={Colors.redBtnBG} />
                            </TouchableOpacity>
                            <View style={styles.Submit}>
                                <Text style={styles.ModalName}>
                                    {this.state.dataArray.name}
                                </Text>
                            </View>
                            <View style={styles.Submit}>
                                <Image style={styles.Bimg} source={{ uri: this.state.URI }} />
                            </View>
                            <View style={styles.Submit}>
                                <Stars
                                    default={this.state.dataArray.rating}
                                    count={5}
                                    half={true}
                                    disabled={false}
                                    backingColor={Colors.ratingBefore}
                                    fullStar={<Icon name={'star'} style={[styles.ratingStarStyle]} />}
                                    emptyStar={<Icon name={'star'} style={[styles.ratingStarStyle, styles.myEmptyStarStyle]} />}
                                    update={(val) => this.setState({ stars: val })}
                                />
                            </View>
                            <View style={styles.Submit}>
                                <TouchableOpacity style={styles.BuyNow} onPress={() => { this.Rate(); }}>
                                    <Text style={styles.BuyNowTxt}>RATE NOW</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={{ flex: 2 }}></View>
                    </Modal>
                </ScrollView>
            </View>
        )
    }

}