import { Platform, StyleSheet, Dimensions, } from 'react-native';
import * as Colors from '../../../utils/colors';
import * as family from '../../../utils/fontFamily';

export default styles = StyleSheet.create({

    container: {
        flex: 1,
    },

    loginHead: {
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'flex-end',
    },

    headFont: {
        color: Colors.primary,
        fontSize: Platform.OS === 'ios' ? 48 : 45,
        paddingTop: Platform.OS === 'ios' ? 150 : 100,
        paddingBottom: Platform.OS === 'ios' ? 0 : 20,
        fontFamily: family.Bold,
    },

    loginMid: {
        flex: 8,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },

    textField: {
        fontFamily: family.Medium,
        width: 250,
        height: Platform.OS === 'ios' ? 40 : 60,
        fontSize: Platform.OS === 'ios' ? 20 : 18,
        alignSelf: 'center',
        paddingLeft: 15,
        color: Colors.primary,
        padding: 10
    },

    user: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-end',

    },
    pass: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: Platform.OS === 'ios' ? 0 : 10,
    },

    buttonStyle: {
        backgroundColor: Colors.primary,
        width: 280,
        height: Platform.OS === 'ios' ? 50 : 45,
        borderRadius: 5,
        color: Colors.redBtnTxt,
        alignItems: 'center',
        justifyContent: 'center',
    },

    btnTxt: {
        color: Colors.redBtnTxt,
        fontSize: Platform.OS === 'ios' ? 30 : 26,
        fontFamily: family.Medium,
        paddingTop: Platform.OS === 'ios' ? 10 : 0,
    },

    fgotPass: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        color: Colors.primary,
        fontSize: Platform.OS === 'ios' ? 20 : 18,
        fontFamily: family.Medium,
        paddingTop: 3,
    },

    icon: {
        fontSize: Platform.OS === 'ios' ? 20 : 15,
        color: Colors.primary,
    },

    userPass: {
        height: Platform.OS === 'ios' ? 45 : 40,
        width: 280,
        borderColor: Colors.primary,
        borderWidth: 1,
        padding: Platform.OS === 'ios' ? 12 : 10,
        margin: 6,
        flexDirection: 'row',
        justifyContent: 'center',
    },

    loginFoot: {
        flex: 3,
        flexDirection: 'column',
        justifyContent: 'flex-end',
        paddingTop: Platform.OS === 'ios' ? 120 : 180,
    },

    noAcc: {
        flex: 5,
        color: Colors.primary,
        fontSize: Platform.OS === 'ios' ? 18 : 16,
        alignSelf: "center",
        paddingBottom: Platform.OS === 'ios' ? 50 : 25,
        fontFamily: family.Medium,
    },

    newAcc: {
        flex: 1,
        backgroundColor: Colors.redAddAccBtn,
        width: Platform.OS === 'ios' ? 60 : 40,
        height: Platform.OS === 'ios' ? 60 : 50,
        alignSelf: "flex-end",
        alignItems: 'center',
        justifyContent: 'center',
    },

    bottom: {
        flex: 1,
        flexDirection: 'row',
        alignSelf: "baseline",
        padding: Platform.OS === 'ios' ? 12 : 10,
        alignItems: 'center',
        justifyContent: 'center',
    },

});