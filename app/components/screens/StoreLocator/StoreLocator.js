import React, { Component } from 'react';
import {
    Platform, Dimensions, StyleSheet,
    Text, View, TouchableOpacity,
} from 'react-native';
import styles from './Styles';
import * as Colors from '../../../utils/colors.js';
import Header from '../../Header/header.js';
import Icon from '../../../utils/Icons.js';
import MapView, { Marker } from 'react-native-maps';


export default class OrderID extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loader: false
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <Header
                    title={'Store Locator'}
                    mainTitle={false}
                    isDrawer={false}
                    isSearch={true}
                    back={() => { this.props.navigation.goBack(null) }} />
                <View style={styles.map}>
                    <MapView style={styles.map}
                        initialRegion={{
                            latitude: 19.0244,
                            longitude: 72.8438,
                            latitudeDelta: 1,
                            longitudeDelta: 1,
                        }}
                    >
                        <Marker
                            coordinate={{ latitude: 19.0244, longitude: 72.8438 }}
                            title={'NeoSoft Technologies'}
                            description={'4th Floor, The Ruby, 29, Senapati Bapat Marg, Dadar West'}
                        />
                        <Marker
                            coordinate={{ latitude: 19.1411, longitude: 73.0087 }}
                            title={'NeoSoft Technologies'}
                            description={'5th Floor, Sigma IT Park,MIDC area, Rabale, Navi Mumbai'}
                        />
                        <Marker
                            coordinate={{ latitude: 18.5947, longitude: 73.7095 }}
                            title={'NeoSoft Technologies'}
                            description={'1st Floor, Rajiv Gandhi - Infotech Park, Phase-I, Hinjewadi'}
                        />
                        <Marker
                            coordinate={{ latitude: 19.0180, longitude: 72.8283 }}
                            title={'NeoSoft Technologies'}
                            description={'Unique Industrial Estate, 124, SVS Rd, Off, Prabhadevi'}
                        />
                    </MapView>
                </View>
                <TouchableOpacity style={styles.addressView}>
                    <View style={styles.Locator}>
                        <Icon name='Locator' style={styles.Icon} />
                    </View>
                    <View style={styles.StoreView}>
                        <Text style={styles.HeadText}>
                            SKYLAND STORE
                        </Text>
                        <Text style={styles.NormalText}>
                            6335 Edgewood Road Reisterstown, MD 21136
                        </Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.addressView}>
                    <View style={styles.Locator}>
                        <Icon name='Locator' style={styles.Icon} />
                    </View>
                    <View style={styles.StoreView}>
                        <Text style={styles.HeadText}>
                            WOODMOUNT STORE
                        </Text>
                        <Text style={styles.NormalText}>
                            9437 Pin Oak Drive South Plainfield, NJ 07080
                        </Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.addressView}>
                    <View style={styles.Locator}>
                        <Icon name='Locator' style={styles.Icon} />
                    </View>
                    <View style={styles.StoreView}>
                        <Text style={styles.HeadText}>
                            NATUFUR STORE
                        </Text>
                        <Text style={styles.NormalText}>
                            3798 Pennsylvania Avenue Brandon, FL 33510
                        </Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.addressView}>
                    <View style={styles.Locator}>
                        <Icon name='Locator' style={styles.Icon} />
                    </View>
                    <View style={styles.StoreView}>
                        <Text style={styles.HeadText}>
                            LAVANDER STORE
                        </Text>
                        <Text style={styles.NormalText}>
                            9311 Garfield Avenue Hamburg, NY 14075
                        </Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.addressView}>
                    <View style={styles.Locator}>
                        <Icon name='Locator' style={styles.Icon} />
                    </View>
                    <View style={styles.StoreView}>
                        <Text style={styles.HeadText}>
                            FURNIMATT STORE
                        </Text>
                        <Text style={styles.NormalText}>
                            7346 Hanover Court Arlington, MA 02474
                        </Text>
                    </View>
                </TouchableOpacity>
            </View >
        );
    }
}