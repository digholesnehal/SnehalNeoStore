import React, { Component } from 'react';
import {
    Platform, StyleSheet, Dimensions, Image, ScrollView, Text, View, KeyboardAvoidingView,
    ImageBackground, TextInput, TouchableOpacity, BackHandler,
} from 'react-native';
import styles from "./styles";
import Icon from '../../../utils/Icons.js';
import Header from '../../../components/Header/header.js';
import Swiper from 'react-native-swiper';
import SideBar from '../../Drawer/SideBar';
import * as Colors from '../../../utils/colors';
import SplashScreen from 'react-native-splash-screen';
import { connect } from 'react-redux';
import { Toast } from 'native-base';

class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            back: false
        }
    }

    swiperContent = (data) => {
        let returnData = [];
        for (let i = 0; i < 4; i++) {
            returnData.push(
                <View key={"k" + i} style={styles.slide}>
                    <Image style={styles.images} source={{ uri: this.props.product_categories[i].icon_image }} />
                </View>);
        }
        return returnData;
    }

    componentDidMount() {
        if (Platform.OS == "android") {
            BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
        }

        SplashScreen.hide();
    }
    handleBackButton = () => {
        if (!this.props.navigation.isFocused()) return false
        Toast.show({
            text: 'Double Tap to exit.',
            type: "warning",
            duration: 2000
        })
        if (this.state.back) {
            BackHandler.exitApp()
        }
        setTimeout(() => {
            this.setState({ back: false })
        }, 2000);
        this.setState({ back: true })
        return true;
    }
    componentWillUnmount() {
        this.setState({ back: !this.state.back })
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
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
                        {this.swiperContent(this.props.product_categories)}
                    </Swiper>
                </View>
                <View style={styles.components}>
                    <View style={styles.cpartitions}>
                        <View style={styles.rpartitions}>
                            <TouchableOpacity style={styles.TO} onPress={() => this.props.navigation.navigate('ProductList', { ID: 1, Name: 'Tables' })}>
                                <Text style={styles.cTitle1}> Tables </Text>
                                <Icon name="table" style={styles.icon1} />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.rpartitions}>
                            <TouchableOpacity style={styles.TO} onPress={() => this.props.navigation.navigate('ProductList', { ID: 2, Name: 'Chairs' })} >
                                <Text style={styles.cTitle2}> Chairs </Text>
                                <Icon name="chair" style={styles.icon2} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.cpartitions}>
                        <View style={styles.rpartitions}>
                            <TouchableOpacity style={styles.TO} onPress={() => this.props.navigation.navigate('ProductList', { ID: 3, Name: 'Sofas' })} >
                                <Icon name="sofa" style={styles.icon3} />
                                <Text style={styles.cTitle3}> Sofas </Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.rpartitions}>
                            <TouchableOpacity style={styles.TO} onPress={() => this.props.navigation.navigate('ProductList', { ID: 4, Name: 'Cupboards' })} >
                                <Icon name="cupboard" style={styles.icon4} />
                                <Text style={styles.cTitle4}> Cupboards </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    return state;
};

export default connect(mapStateToProps)(HomeScreen);