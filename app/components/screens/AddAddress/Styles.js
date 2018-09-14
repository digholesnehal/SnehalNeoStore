import { Platform, StyleSheet, Dimensions, } from 'react-native';
import * as Colors from '../../../utils/colors';
import * as family from '../../../utils/fontFamily';

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
        fontFamily: family.Medium,
        color: Colors.blackPrimary,
        paddingTop: 27,
        paddingBottom: 17,
        textShadowColor: Colors.blackSecondary,
        textShadowOffset: { width: 1, height: 2 },
        textShadowRadius: 2
    },
    AddressTextField: {
        backgroundColor: Colors.primary,
        height: 100,
        fontSize: 17,
        padding: 10,
        shadowOpacity: 0.75,
        shadowRadius: 5,
        shadowColor: Colors.black,
        shadowOffset: { height: 5, width: 2 },
    },
    addressMid: {
        flexDirection: 'row',
        paddingBottom: 13,
    },
    TextField: {
        backgroundColor: Colors.primary,
        height: 35,
        fontSize: 17,
        fontFamily: family.Book,
        padding: Platform.OS === 'ios' ? 10 : 5,
        shadowOpacity: 0.75,
        shadowRadius: 5,
        shadowColor: Colors.black,
        shadowOffset: { height: 5, width: 2 },
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
        alignItems: 'center',
        justifyContent: 'center',
        shadowOpacity: 0.75,
        shadowRadius: 5,
        shadowColor: Colors.black,
        shadowOffset: { height: 5, width: 2 },
    },
    btnTxt: {
        color: Colors.primary,
        fontSize: Platform.OS === 'ios' ? 25 : 25,
        fontFamily: family.Medium,
        paddingTop: Platform.OS === 'ios' ? 10 : 0,
    },
    button: {
        padding: 6.5,
    },
})