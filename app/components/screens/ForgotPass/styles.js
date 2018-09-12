import { Platform, StyleSheet, Dimensions, } from 'react-native';
import { primary, redHeader, redBtnTxt } from '../../../utils/colors';
import { xxSmall } from '../../../utils/fonts';
import * as family from '../../../utils/fontFamily';

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-between",
    },
    fpHead: {
        flex: 3,
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    headFont: {
        color: primary,
        fontSize: Platform.OS === 'ios' ? 48 : 45,
        paddingTop: Platform.OS === 'ios' ? 150 : 100,
        paddingBottom: Platform.OS === 'ios' ? 0 : 20,
        fontFamily: family.Bold,
    },
    midFont: {
        color: primary,
        fontSize: Platform.OS === 'ios' ? 25 : 22,
        fontWeight: 'bold',
        alignSelf: "center",
    },
    fpMid: {
        flex: 9,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    textField: {
        fontFamily: family.Medium,
        width: 250,
        height: Platform.OS === 'ios' ? 40 : 60,
        fontSize: Platform.OS === 'ios' ? 20 : 18,
        alignSelf: 'center',
        paddingLeft: 15,
        color: primary,
        padding: 10
    },
    pass: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    buttonStyle: {
        backgroundColor: primary,
        width: 280,
        height: Platform.OS === 'ios' ? 50 : 45,
        borderRadius: 5,
        color: redBtnTxt,
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnTxt: {
        color: redBtnTxt,
        fontSize: Platform.OS === 'ios' ? 30 : 26,
        fontFamily: family.Medium,
        paddingTop: Platform.OS === 'ios' ? 10 : 0,
    },
    userPass: {
        height: 45,
        width: 280,
        borderColor: primary,
        borderWidth: 1,
        padding: 10,
        margin: 6,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    icon: {
        fontSize: 20,
        color: primary,
    },
});