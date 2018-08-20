import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import FeatherIcon from 'react-native-vector-icons/dist/Feather';
import styles from './styles';
import { primary } from '../../utils/colors.js';

class Header extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>

                <TouchableOpacity style={styles.Backcontainer}
                    onPress={this.props.back}>
                    {this.props.isDrawer ? <FeatherIcon name="menu" size={26} style={styles.menuIcon} color={primary} /> : <FeatherIcon name="chevron-left" size={26} style={styles.menuIcon} color={primary} />}
                </TouchableOpacity>
                <View style={styles.Titlecontainer}>
                    {this.props.mainTitle ? <Text style={styles.mainText}>{this.props.title}</Text> : <Text style={styles.text}>{this.props.title}</Text>}
                </View>
                <TouchableOpacity style={styles.Backcontainer}>
                    {this.props.isSearch ? <FeatherIcon name="search" size={26} style={styles.menuIcon} color={primary} /> : null}
                </TouchableOpacity>
            </View>
        );
    }
}


export default (Header);


