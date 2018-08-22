import React, { Component } from 'react';
import {
    Platform, Dimensions, StyleSheet, Text, View,
    TextInput, TouchableOpacity, FlatList, Image
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
import { userObj, userProvider } from '../../../lib/UserProvider.js';

export default class ProductList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dataArray: [],
            loader: false,
            page: 1,
            product_category_id: this.props.navigation.state.params.ID,
            Title: this.props.navigation.state.params.Name,
        }
    }

    componentDidMount() {
        this.fetchResult();
    }

    fetchResult = () => {
        this.setState({ loader: true })
        const { page, limit, dataArray } = this.state
        return apiCaller(
            url.host + url.productListing + "?product_category_id=" + this.state.product_category_id + "&limit=7&page=" + this.state.page,
            'GET', {}, null,
            (response) => {
                this.setState({ loader: false })
                if (response.status == 200) {
                    this.setState({
                        dataArray: dataArray.concat(response.data),
                        page: page + 1,
                    });
                }
                else {
                    if (response.hasOwnProperty('user_msg')) {
                        // alert(response.user_msg);
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
                    title={this.state.Title}
                    mainTitle={false}
                    isDrawer={false}
                    isSearch={true}
                    back={() => { this.props.navigation.goBack(null) }} />
                {this.state.loader ? <Loader /> : null}
                <FlatList
                    onEndReachedThreshold={0.1}
                    data={this.state.dataArray}
                    keyExtractor={(item, index) => index + ""}
                    renderItem={({ item }) =>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('ProductDetail', { ID: item.id, category: this.state.Title })}>
                            <View style={styles.itemRow}>
                                <View style={styles.container}>
                                    <Image source={{ uri: item.product_images }} style={styles.img}></Image>
                                </View>
                                <View style={styles.productInfo}>
                                    <View style={styles.rPartition}>
                                        <Text style={styles.iName}> {item.name} </Text>
                                        <Text style={styles.iProducer}>  {item.producer} </Text>
                                    </View>
                                    <View style={styles.cPartition}>
                                        <Text style={styles.iCost}> Rs. {item.cost} </Text>
                                        <Stars
                                            default={item.rating}
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
                            </View>
                        </TouchableOpacity>
                    }
                    onEndReached={this.fetchResult}
                />
                <View style={styles.footer}>
                    <Text style={styles.counter}>
                        {this.state.dataArray.length} of {this.state.dataArray.length}
                    </Text>
                </View>
            </View>
        );
    }
}