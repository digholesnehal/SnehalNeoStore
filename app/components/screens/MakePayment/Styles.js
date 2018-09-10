import { Platform, StyleSheet, Dimensions, } from 'react-native';
import * as Colors from '../../../utils/colors';
import * as family from '../../../utils/fontFamily';

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    buttonStyle: {
        backgroundColor: Colors.primary,
        height: Platform.OS === 'ios' ? 50 : 40,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnView: {
        padding: 30,
    },
    btnTxt: {
        color: Colors.redBtnBG,
        fontSize: Platform.OS === 'ios' ? 25 : 25,
        fontFamily: family.Medium,
        paddingTop: Platform.OS === 'ios' ? 10 : 0,
    },
})