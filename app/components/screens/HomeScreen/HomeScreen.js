import React, { Component } from 'react';
import {
    Platform, StyleSheet, Dimensions, Image, ScrollView, Text, View, KeyboardAvoidingView,
    ImageBackground, TextInput, TouchableOpacity
} from 'react-native';
import styles from "./styles";
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import Header from '../../../components/Header/header.js';
import Swiper from 'react-native-swiper';
import SideBar from '../../Drawer/SideBar';
import * as Colors from '../../../utils/colors';
import { userObj, userProvider } from '../../../lib/UserProvider.js';
import SplashScreen from 'react-native-splash-screen';

export default class HomeScreen extends Component {


    constructor(props) {
        super(props);
    }

    swiperContent = (data) => {
        let returnData = [];
        for (let i = 0; i < 4; i++) {
            returnData.push(
                <View key={"k" + i} style={styles.slide}>
                    <Image style={styles.images} source={{ uri: userObj.product_categories[i].icon_image }} />
                </View>);
        }
        return returnData;
    }

    componentDidMount() {
        SplashScreen.hide();
    }

    render = () => {
        return (
            <View style={styles.container}>
                <Header
                    mainTitle={true}
                    title={'NeoSTORE'}
                    isDrawer={true}
                    isSearch={true}
                    back={() => {
                        this.props.navigation.openDrawer(this.Drawer);
                    }} />
                <View style={styles.swipe}>
                    <Swiper activeDotColor={Colors.enterQtyB} dotColor={Colors.redHeader} autoplay={true}>
                        {this.swiperContent(userObj.product_categories)}
                    </Swiper>
                </View>
                <View style={styles.components}>
                    <View style={styles.cpartitions}>
                        <View style={styles.rpartitions}>
                            <TouchableOpacity style={styles.TO} onPress={() => this.props.navigation.navigate('ProductList', { ID: 1, Name: 'Tables' })}>
                                <Text style={styles.cTitle1}> Tables </Text>
                                <Icon name="columns" style={styles.icon1} />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.rpartitions}>
                            <TouchableOpacity style={styles.TO} onPress={() => this.props.navigation.navigate('ProductList', { ID: 2, Name: 'Chairs' })} >
                                <Text style={styles.cTitle2}> Chairs </Text>
                                <Icon name="cube" style={styles.icon2} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.cpartitions}>
                        <View style={styles.rpartitions}>
                            <TouchableOpacity style={styles.TO} onPress={() => this.props.navigation.navigate('ProductList', { ID: 3, Name: 'Sofas' })} >
                                <Icon name="archive" style={styles.icon3} />
                                <Text style={styles.cTitle3}> Sofas </Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.rpartitions}>
                            <TouchableOpacity style={styles.TO} onPress={() => this.props.navigation.navigate('ProductList', { ID: 4, Name: 'Cupboards' })} >
                                <Icon name="building" style={styles.icon4} />
                                <Text style={styles.cTitle4}> Cupboards </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        );
    }

}

