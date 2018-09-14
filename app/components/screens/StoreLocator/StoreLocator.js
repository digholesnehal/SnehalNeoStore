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
import Polyline from '@mapbox/polyline';

export default class OrderID extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loader: false,
            latitude: 0,
            longitude: 0,
            x: "false",
            coords: [],
        };
    }

    highLight = (Latitude, Longitude) => {
        this.map.fitToCoordinates([{ latitude: Latitude, longitude: Longitude }], {
            edgePadding: { top: 100, right: 100, bottom: 100, left: 100 },
            animated: true,
        });
        this.getDirections(`${this.state.latitude},${this.state.longitude}`, `${Latitude},${Longitude}`)
    }

    componentDidMount() {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                    error: null,
                });
            },
            (error) => this.setState({ error: error.message }),
            { enableHighAccuracy: false, timeout: 200000, maximumAge: 5000 },
        );
    }

    async getDirections(startLoc, destinationLoc) {
        try {
            console.log('start end location', startLoc, destinationLoc)
            let resp = await fetch(`https://maps.googleapis.com/maps/api/directions/json?origin=${startLoc}&destination=${destinationLoc}`)
            let respJson = await resp.json();
            let points = Polyline.decode(respJson.routes[0].overview_polyline.points);
            console.log('points', points)
            let coords = points.map((point, index) => {
                return {
                    latitude: point[0],
                    longitude: point[1]
                }
            })
            console.log('coords', coords)
            this.setState({ coords: coords })
            this.setState({ x: "true" })
            return coords
        } catch (error) {
            this.setState({ x: "error" })
            return error
        }
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
                        ref={ref => { this.map = ref; }}
                        initialRegion={{
                            latitude: 19.0244,
                            longitude: 72.8438,
                            latitudeDelta: 1,
                            longitudeDelta: 1,
                        }}
                    >
                        {!!this.state.latitude && !!this.state.longitude && <MapView.Marker
                            coordinate={{ "latitude": this.state.latitude, "longitude": this.state.longitude }}
                            title={"Current Location"} pinColor={'#2288aa'}
                        />}
                        {!!this.state.latitude && !!this.state.longitude && this.state.x == 'true' && <MapView.Polyline
                            coordinates={this.state.coords}
                            strokeWidth={2}
                            strokeColor="red" />
                        }
                        <Marker
                            coordinate={{ latitude: 19.1044, longitude: 72.8438 }}
                            title={'NeoSoft Technologies'}
                            description={'4th Floor, The Ruby, 29, Senapati Bapat Marg, Dadar West'}
                        />
                        <Marker
                            coordinate={{ latitude: 19.1898, longitude: 73.0087 }}
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
                <TouchableOpacity style={styles.addressView} onPress={() => this.highLight(19.0244, 72.8438)}>
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
                <TouchableOpacity style={styles.addressView} onPress={() => this.highLight(20.1411, 73.0087)}>
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
                <TouchableOpacity style={styles.addressView} onPress={() => this.highLight(18.5947, 73.7095)}>
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
                <TouchableOpacity style={styles.addressView} onPress={() => this.highLight(19.0180, 72.8283)}>
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
                <TouchableOpacity style={styles.addressView} onPress={() => this.highLight(18.5947, 73.7095)}>
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