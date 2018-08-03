import React, { Component } from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/dist/Feather';
import styles from './styles';
import { primary } from '../../../utils/colors';

class Header extends Component {

  constructor(props) {
    super(props);  
  }

  render() {
  return (
    <View style={styles.container}>
        
        <TouchableOpacity style={styles.Backcontainer} 
        onPress={this.props.back}>
        {this.props.isDrawer ? <FeatherIcon name="menu" size={26} style={styles.menuIcon} color="#000" /> : <FeatherIcon name="chevron-left" size={26} style={styles.menuIcon} color={primary} />}
            
        </TouchableOpacity>
        <View style={styles.Titlecontainer}>
            <Text style={styles.text}>
                {this.props.title}
            </Text>       
        </View>
        <TouchableOpacity style={styles.Backcontainer} 
        onPress={this.props.back}>
        {this.props.isDrawer ? <FeatherIcon name="menu" size={26} style={styles.menuIcon} color="#000" /> : <FeatherIcon name="search" size={22} style={styles.menuIcon} color={primary} />}
            
        </TouchableOpacity>     
    </View>
  );
}
}


export default (Header);


