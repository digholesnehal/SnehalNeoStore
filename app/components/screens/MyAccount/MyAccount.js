import React, { Component } from 'react';
import {
    Platform, StyleSheet, Dimensions, Text, View, Image,
    ImageBackground, TextInput, TouchableOpacity, ActivityIndicator
} from 'react-native';
import styles from "./Styles";
import Icon from '../../../utils/Icons.js';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { AsyncStorage } from 'react-native';
import * as url from '../../../lib/api.js';
import { apiCaller } from '../../../lib/Fetcher.js';
import Header from '../../Header/header.js';
import { connect } from 'react-redux';

class MyAccount extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loader: false,
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <ImageBackground style={styles.container} source={require('../../../assets/images/Android_Master_bg.jpg')}>
                    <Header
                        title={'My Account'}
                        mainTitle={false}
                        isDrawer={false}
                        isSearch={true}
                        back={() => { this.props.navigation.goBack(null) }} />
                    <View style={styles.imageView}>
                        {this.props.user_data.profile_pic === null || this.props.user_data.profile_pic === '' ? <Image style={styles.image} source={require('../../../assets/images/appdp.jpg')} /> : <Image style={styles.image} source={{ uri: this.props.user_data.profile_pic }} />}
                    </View>
                    <View style={styles.mid}>
                        <View style={styles.textFieldView}>
                            <Icon name="user" style={styles.icon} />
                            <TextInput style={styles.textField} value={this.props.user_data.first_name} editable={false}>
                            </TextInput>
                        </View>
                        <View style={styles.textFieldView}>
                            <Icon name="user" style={styles.icon} />
                            <TextInput style={styles.textField} value={this.props.user_data.last_name} editable={false}>
                            </TextInput>
                        </View>
                        <View style={styles.textFieldView}>
                            <Icon name="email" style={styles.envelope} />
                            <TextInput style={styles.textField} value={this.props.user_data.email} editable={false}>
                            </TextInput>
                        </View>
                        <View style={styles.textFieldView}>
                            <Icon name="phone" style={styles.iconPhn} />
                            <TextInput style={styles.textField} value={this.props.user_data.phone_no} editable={false}>
                            </TextInput>
                        </View>
                        <View style={styles.textFieldView}>
                            <Icon name="birthday" style={styles.iconCake} />
                            <TextInput style={styles.textField} value={this.props.user_data.dob} editable={false}>
                            </TextInput>
                        </View>
                    </View>
                    <View style={styles.btnView}>
                        <TouchableOpacity style={styles.buttonStyle} onPress={() => this.props.navigation.navigate('EditProfile')}>
                            <Text style={styles.btnTxt}> EDIT PROFILE </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.resetPass}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('ResetPass')}>
                            <Text style={styles.ResetBtnTxt}> RESET PASSWORD </Text>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return state;
};

export default connect(mapStateToProps)(MyAccount);