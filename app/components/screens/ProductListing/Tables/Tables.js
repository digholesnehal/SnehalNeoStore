import React, { Component } from 'react';
import {
    Platform, Dimensions, StyleSheet, Text, View,
    TextInput, TouchableOpacity, FlatList, Image
} from 'react-native';
import styles from './Styles';
import * as Colors from '../../../../utils/colors.js';
import Header from '../../../Header/header.js';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';
import Keyboard from 'react-native-keyboard';
import { AsyncStorage } from 'react-native';
import * as url from '../../../../lib/api.js';
import { apiCaller } from '../../../../lib/Fetcher.js';
// import Stars from 'react-native-stars-rating';

export default class Tables extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dataArray: [],
        }
    }

    componentDidMount() {
        return apiCaller(url.host + url.productListing + "?product_category_id=1", 'GET', {}, null,
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
                    title={'Tables'}
                    mainTitle={false}
                    isDrawer={false}
                    isSearch={true}
                    back={() => { this.props.navigation.goBack(null) }} />
                <KeyboardAwareScrollView style={styles.cPartition}>
                    <FlatList
                        data={this.state.dataArray}
                        renderItem={({ item }) =>
                            <View style={styles.itemRow}>
                                <View style={styles.container}>
                                    <Image source={{ uri: item.product_images }} style={styles.img}></Image>
                                </View>
                                <View style={styles.productInfo}>
                                    <View style={styles.rPartition}>
                                        <Text style={styles.iName}> {item.name} </Text>
                                        <Text style={styles.iProducer}> {item.producer} </Text>
                                    </View>
                                    <View style={styles.cPartition}>
                                        <Text style={styles.iCost}>Rs. {item.cost} </Text>
                                        {/* <Stars
                                            isActive={true}
                                            rateMax={5}
                                            isHalfStarEnabled={false}
                                            onStarPress={(rating) => console.log(rating)}
                                            rate={3}
                                            size={60}
                                        /> */}
                                    </View>
                                </View>
                            </View>
                        } />
                </KeyboardAwareScrollView>
            </View>
        );
    }
}