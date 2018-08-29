import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from '../../utils/Icons.js';
import styles from './styles';
import { primary } from '../../utils/colors.js';

class Header extends Component {

    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.white}>
                </View>
                <View style={styles.header}>
                    <TouchableOpacity style={styles.Backcontainer}
                        onPress={this.props.back}>
                        {this.props.isDrawer ? <Icon name="menu" size={20} style={styles.menuIcon} color={primary} /> : <Icon name="back" size={18} style={styles.backMenuIcon} color={primary} />}
                    </TouchableOpacity>
                    <View style={styles.Titlecontainer}>
                        {this.props.mainTitle ? <Text style={styles.mainText}>{this.props.title}</Text> : <Text style={styles.text}>{this.props.title}</Text>}
                    </View>
                    <TouchableOpacity style={styles.SearchBackcontainer}
                        onPress={this.props.search}>
                        {this.props.isSearch ? <Icon name="search" size={26} style={styles.menuIcon} color={primary} /> : <Icon name="add" size={26} style={styles.menuIcon} color={primary} />}
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
export default (Header);


