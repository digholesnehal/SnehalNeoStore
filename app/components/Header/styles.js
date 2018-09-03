import { Platform, StyleSheet } from 'react-native';
import * as Colors from '../../utils/colors.js';
import * as family from '../../utils/fontFamily.js';

export default styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'column',
    },
    white: {
        height: Platform.OS === 'ios' ? 20 : 0,
        width: Platform.OS === 'ios' ? '100%' : 0,
        backgroundColor: Colors.redAddAccBtn,
    },
    header: {
        backgroundColor: Colors.redHeader,
        height: Platform.OS === 'ios' ? 55 : 50,
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
    },
    Titlecontainer: {
        width: '70%',
        alignItems: 'center'
    },
    Backcontainer: {
        width: '15%',
        alignItems: 'flex-start'
    },
    SearchBackcontainer: {
        width: '15%',
        alignItems: 'flex-end',
        paddingRight: 10,
    },
    mainText: {
        fontFamily: family.Bold,
        alignItems: 'center',
        fontSize: 26,
        marginTop: Platform.OS === 'ios' ? 5 : 0,
        color: Colors.primary,
    },
    text: {
        alignSelf: 'center',
        fontFamily: family.Book,
        fontSize: 22,
        marginTop: Platform.OS === 'ios' ? 5 : 0,
        color: Colors.primary,
    },
    menuIcon: {
        backgroundColor: 'transparent',
        paddingLeft: 10,
    },
    backMenuIcon: {
        backgroundColor: 'transparent',
        paddingLeft: 5,
    }
});
