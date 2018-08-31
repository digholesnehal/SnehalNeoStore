import { Platform, StyleSheet } from 'react-native';
import * as Colors from '../../utils/colors.js'

export default styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'column',
    },
    white: {
        height: Platform.OS === 'ios' ? 20 : 0,
        width: Platform.OS === 'ios' ? '100%' : 0,
        backgroundColor: '#282727',
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
        alignItems: 'center',
        fontSize: 28,
        marginTop: 5,
        color: Colors.primary,
        fontWeight: 'bold',
    },
    text: {
        alignSelf: 'center',
        fontSize: 22,
        fontWeight: Platform.OS === 'ios' ? '500' : 'normal',
        marginTop: 5,
        color: Colors.primary,
        paddingBottom: 5,
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
