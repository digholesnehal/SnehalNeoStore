import React, { Component } from 'react';
import {
    Platform, Dimensions, StyleSheet, Text, View,
    TextInput, TouchableOpacity, FlatList, Image, ScrollView
} from 'react-native';
import styles from './Styles';
import * as Colors from '../../../utils/colors.js';
import Header from '../../Header/header.js';
import { AsyncStorage } from 'react-native';
import * as url from '../../../lib/api.js';
import { apiCaller } from '../../../lib/Fetcher.js';
import Stars from 'react-native-stars';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Loader from '../../Loader/Loader.js';
import Feather from 'react-native-vector-icons/dist/Feather';
import Modal from "react-native-modal";

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

    BuyNowPopUp() {
        this.setState({ buyNowVisible: true })
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
            <View style={styles.container}>
                <Header
                    title={this.state.dataArray.name}
                    mainTitle={false}
                    isDrawer={false}
                    isSearch={true}
                    back={() => { this.props.navigation.goBack(null) }} />
                {this.state.loader ? <Loader /> : null}

                <ScrollView >
                    <View style={styles.Details}>
                        <View >
                            <Text style={styles.Name}>
                                {this.state.dataArray.name}
                            </Text>
                        </View>
                        <View style={styles.categoryView}>
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
                                starSize={70}
                                disabled={true}
                                backingColor={Colors.ratingBefore}
                                fullStar={<Icon name={'star'} style={[styles.myStarStyle]} />}
                                emptyStar={<Icon name={'star-outline'} style={[styles.myStarStyle, styles.myEmptyStarStyle]} />}
                                halfStar={<Icon name={'star-half'} style={[styles.myStarStyle]} />}
                            />
                        </View>
                    </View>
                    <View style={styles.imgGrp}>
                        <View style={styles.priceView}>
                            <Text style={styles.price}>
                                Rs. {this.state.dataArray.cost}
                            </Text>
                            <TouchableOpacity>
                                <Feather name="share-2" size={20} color={Colors.ratingBefore} />
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
                        <TouchableOpacity style={styles.BuyNow} onPress={() => {
                            this.BuyNowPopUp();
                        }}>
                            <Text style={styles.BuyNowTxt}> BUY NOW </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.Rate}>
                            <Text style={styles.RateTxt}> RATE </Text>
                        </TouchableOpacity>
                    </View>
                    {/* modal for buy now */}
                    <View style={{ marginTop: 30 }}>
                        <Modal visible={this.state.buyNowVisible} style={styles.modalView}>
                        </Modal>
                    </View>
                </ScrollView>
            </View>
        )
    }

}