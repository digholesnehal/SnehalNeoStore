import React, { Component } from 'react';
import {
    Platform, Dimensions, StyleSheet, Text, View,
    TextInput, TouchableOpacity, FlatList, Image
} from 'react-native';
import styles from './Styles';
import * as Colors from '../../../../utils/colors.js';
import Header from '../../../Header/header.js';
import { AsyncStorage } from 'react-native';
import * as url from '../../../../lib/api.js';
import { apiCaller } from '../../../../lib/Fetcher.js';
import Stars from 'react-native-stars';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import Stars from 'react-native-stars-rating';

export default class Beds extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dataArray: [],
        }
    }

    componentDidMount() {
        return apiCaller(url.host + url.productListing + "?product_category_id=4", 'GET', {}, null,
            (response) => {
                if (response.status == 200) {
                    this.setState({ dataArray: response.data });
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
                    title={'Beds'}
                    mainTitle={false}
                    isDrawer={false}
                    isSearch={true}
                    back={() => { this.props.navigation.goBack(null) }} />
                <FlatList
                    data={this.state.dataArray}
                    keyExtractor={(item, index) => index + ""}
                    renderItem={({ item }) =>
                        <TouchableOpacity>
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
                                            fullStar={<Icon name={'star'} style={[styles.myStarStyle]} />}
                                            emptyStar={<Icon name={'star-outline'} style={[styles.myStarStyle, styles.myEmptyStarStyle]} />}
                                            halfStar={<Icon name={'star-half'} style={[styles.myStarStyle]} />}
                                        />
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>
                    } />
            </View>
        );
    }
}
