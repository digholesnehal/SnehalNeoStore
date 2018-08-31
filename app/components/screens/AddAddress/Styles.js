import { Platform, StyleSheet, Dimensions, } from 'react-native';
import * as Colors from '../../../utils/colors';

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    container1: {
        flex: 1,
        flexDirection: 'column',
        padding: 10,
        paddingTop: 0,
    },
    addressHead: {
        paddingLeft: 6.5,
        paddingRight: 6.5,
    },
    Headings: {
        fontSize: 17,
        fontWeight: '600',
        color: Colors.blackPrimary,
        paddingTop: 27,
        paddingBottom: 17,
    },
    AddressTextField: {
        backgroundColor: Colors.primary,
        height: 100,
        fontSize: 17,
        padding: 10,
    },
    addressMid: {
        flexDirection: 'row',
        paddingBottom: 13,
    },
    TextField: {
        backgroundColor: Colors.primary,
        height: 35,
        fontSize: 17,
        padding: Platform.OS === 'ios' ? 10 : 5,
    },
    hrPartition: {
        flex: 1,
        flexDirection: 'column',
        padding: 6.5,
        paddingTop: 0,
    },
    buttonStyle: {
        backgroundColor: Colors.redBtnBG,
        height: Platform.OS === 'ios' ? 50 : 40,
        borderRadius: 5,
        color: Colors.redBtnTxt,
        fontSize: Platform.OS === 'ios' ? 80 : 70,
        fontWeight: 'bold',
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnTxt: {
        color: Colors.primary,
        fontSize: Platform.OS === 'ios' ? 25 : 25,
        fontWeight: '500',
    },
    button: {
        padding: 6.5,
    },
})