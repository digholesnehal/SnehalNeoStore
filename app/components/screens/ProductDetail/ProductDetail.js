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


export default class ProductList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataArray: [],
            loader: false,
            product_id: this.props.navigation.state.params.ID,
            category: this.props.navigation.state.params.category,
        }
    }

    componentDidMount() {
        this.setState({ loader: true })
        const { dataArray } = this.state
        return apiCaller(
            url.host + url.productDetailing + "?product_id=" + this.state.product_id,
            'GET', {}, null,
            (response) => {
                this.setState({ loader: false })
                if (response.status == 200) {
                    this.setState({
                        dataArray: response.data,
                    });
                    console.log('dataArray', this.state.dataArray)
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
    imgContent = (data) => {
        console.log("m here", data)
        let returnData = [];
        for (let i = 0; i < data.length; i++) {
            returnData.push(
                <TouchableOpacity key={"k" + i} onPress={() => this.bigImg(data, i)}>
                    <Image style={styles.img} source={{ uri: data[i].image }} />
                </TouchableOpacity>
            );
        }
        return returnData;
    }
    bigImg = (data, i) => {
        console.log("m again here", data, i)
        return ()
    }
    render() {
        return (
            <View>
                <Header
                    title={this.state.dataArray.name}
                    mainTitle={false}
                    isDrawer={false}
                    isSearch={true}
                    back={() => { this.props.navigation.goBack(null) }} />
                <ScrollView>
                    {this.state.loader ? <Loader /> : null}
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
                            <Image style={styles.img} source={{ uri: this.state.URI.image }} />
                        </View>
                        <View style={styles.subImages}>
                            {this.state.dataArray.product_images !== undefined ? this.imgContent(this.state.dataArray.product_images) : null}
                        </View>
                    </View>

                </ScrollView>
            </View>
        )
    }

}