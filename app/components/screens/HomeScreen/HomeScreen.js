import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ImageBackground, TextInput, TouchableOpacity  } from 'react-native';
import styles from "./Styles";
import Icon from 'react-native-vector-icons/dist/FontAwesome';

export default class HomeScreen extends Component{
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.hsHeader}>
                    <View style={styles.menuAlign}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')}> 
                            <Icon name="bars" style={styles.menu}/> 
                        </TouchableOpacity>
                    </View>
                    <View style={styles.headText}>
                        <Text style={styles.neostore}> NeoSTORE </Text>
                    </View>
                    <View style={styles.menuAlign}>
                    </View>
                </View>
            </View>
        );
    }

}

