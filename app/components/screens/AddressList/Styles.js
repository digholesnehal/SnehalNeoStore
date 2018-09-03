import { Platform, StyleSheet, Dimensions, } from 'react-native';
import * as Colors from '../../../utils/colors';
import * as family from '../../../utils/fontFamily';

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.primary,
        flexDirection: 'column',
    },
    container1: {
        flexDirection: 'column',
        padding: 10,
    },
    shippping: {
        fontSize: 17,
        fontFamily: family.Book,
        color: Colors.blackPrimary,
    },
    radioView: {
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    radio: {
        height: 15,
        width: 15,
        borderColor: Colors.gRadioUnchecked,
        borderWidth: 3,
        borderRadius: 7.5,
        alignSelf: 'center',
    },
    itemRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    addressBox: {
        marginRight: 0,
        margin: 10,
        flex: 9,
        flexDirection: 'column',
        borderColor: Colors.blackSecondary,
        borderWidth: 1,
        borderRadius: 4,
        justifyContent: 'center',
        padding: 10,
        paddingRight: 5,
    },
    HeadView: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
    },
    Heading: {
        fontSize: 17,
        fontFamily: family.Medium,
        color: Colors.blackPrimary,
    },
    buttonStyle: {
        backgroundColor: Colors.redBtnBG,
        height: Platform.OS === 'ios' ? 50 : 40,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnView: {
        paddingTop: 30,
    },
    btnTxt: {
        color: Colors.primary,
        fontSize: Platform.OS === 'ios' ? 25 : 25,
        fontFamily: family.Medium,
        paddingTop: Platform.OS === 'ios' ? 10 : 0,
    },

})