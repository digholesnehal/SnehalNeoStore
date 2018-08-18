import { Platform, StyleSheet, Dimensions, } from 'react-native';
import * as Colors from '../../../utils/colors';

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
        fontSize: Platform.OS === 'ios' ? 45 : 40,
        fontWeight: 'bold',
        paddingTop: Platform.OS === 'ios' ? 150 : 100,
        padding: 30,
    },

    loginMid: {
        flex: 8,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },

    textField: {

        width: 250,
        height: Platform.OS === 'ios' ? 40 : 60,
        fontSize: Platform.OS === 'ios' ? 20 : 17,
        alignSelf: 'center',
        paddingLeft: 15,
        fontWeight: '500',
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
        padding: Platform.OS === 'ios' ? 20 : 15,
    },

    buttonStyle: {
        backgroundColor: Colors.primary,
        width: Platform.OS === 'ios' ? 300 : 280,
        height: Platform.OS === 'ios' ? 50 : 40,
        borderRadius: 5,
        color: Colors.redBtnTxt,
        alignItems: 'center',
        justifyContent: 'center',
    },

    btnTxt: {
        color: Colors.redBtnTxt,
        fontSize: Platform.OS === 'ios' ? 30 : 25,
        fontWeight: 'bold',
    },

    fgotPass: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        color: Colors.primary,
        fontSize: Platform.OS === 'ios' ? 20 : 18,
        fontWeight: '600',
    },

    icon: {
        fontSize: Platform.OS === 'ios' ? 20 : 15,
        color: Colors.primary,
    },

    userPass: {
        height: Platform.OS === 'ios' ? 45 : 35,
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
        fontSize: Platform.OS === 'ios' ? 20 : 18,
        fontWeight: '600',
        alignSelf: "flex-end",
        marginBottom: Platform.OS === 'ios' ? 20 : 15,
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
        justifyContent: 'flex-end',
    },

});