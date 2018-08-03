import {Platform, StyleSheet} from 'react-native';
import {redHeader, primary} from '../../../utils/colors.js'

export default styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: Platform.OS === 'ios'? 55: 50,
        width: '100%',
        backgroundColor: redHeader,
        alignItems: 'center'
    },
    Titlecontainer: {
        width: '70%',
        alignItems: 'center'
    },
    Backcontainer: {
        width: '15%',
        alignItems: 'center'
    },
    text: {
        alignItems: 'center',
        fontSize: 30,
        marginTop: 5,
        color: primary,
        fontWeight:'bold',
    },
    menuIcon: {
        backgroundColor: 'transparent',
        marginLeft: 10
    }

});
