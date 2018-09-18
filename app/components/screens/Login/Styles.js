import { Platform, StyleSheet, Dimensions, } from 'react-native';
import * as Colors from '../../../utils/colors';
import * as family from '../../../utils/fontFamily';

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    loginHead: {
        alignItems: 'center',
        flexDirection: 'column',
    },
    headFont: {
        backgroundColor: 'transparent',
        color: Colors.primary,
        fontSize: Platform.OS === 'ios' ? 48 : 45,
        paddingTop: Platform.OS === 'ios' ? 140 : 120,
        fontFamily: family.Bold,
        textShadowColor: Colors.black,
        textShadowOffset: { width: 1, height: 5 },
        textShadowRadius: 5
    },
    loginMid: {
        flex: 3,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    textField: {
        fontFamily: family.Medium,
        width: 250,
        height: Platform.OS === 'ios' ? 40 : 60,
        fontSize: Platform.OS === 'ios' ? 20 : 18,
        alignSelf: 'center',
        paddingLeft: 15,
        color: Colors.primary,
        padding: 10,
        textShadowColor: Colors.black,
        textShadowOffset: { width: 1, height: 5 },
        textShadowRadius: 5
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
        marginTop: 20,
        shadowOpacity: 0.75,
        shadowRadius: 5,
        shadowColor: Colors.black,
        shadowOffset: { height: 5, width: 2 },
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
        textShadowColor: Colors.black,
        textShadowOffset: { width: 2, height: 5 },
        textShadowRadius: 5
    },
    icon: {
        fontSize: Platform.OS === 'ios' ? 20 : 15,
        color: Colors.primary,
        textShadowColor: Colors.black,
        textShadowOffset: { width: 1, height: 5 },
        textShadowRadius: 15
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
        flex: 4,
        flexDirection: 'column',
        justifyContent: 'flex-end',
        paddingTop: Platform.OS === 'ios' ? 130 : 135,
    },
    noAcc: {
        flex: 5,
        color: Colors.primary,
        fontSize: Platform.OS === 'ios' ? 18 : 16,
        alignSelf: "flex-end",
        paddingBottom: 15,
        fontFamily: family.Medium,
        backgroundColor: 'transparent',
        textShadowColor: Colors.black,
        textShadowOffset: { width: 2, height: 5 },
        textShadowRadius: 5
    },
    newAcc: {
        flex: 1,
        backgroundColor: Colors.redAddAccBtn,
        width: Platform.OS === 'ios' ? 60 : 40,
        height: Platform.OS === 'ios' ? 60 : 50,
        alignSelf: "flex-end",
        alignItems: 'center',
        justifyContent: 'center',
        shadowOpacity: 0.75,
        shadowRadius: 5,
        shadowColor: Colors.black,
        shadowOffset: { height: 5, width: 2 },
    },
    bottom: {
        flex: 1,
        flexDirection: 'row',
        alignSelf: "baseline",
        padding: Platform.OS === 'ios' ? 12 : 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    shadow: {
        backgroundColor: 'transparent',
        textShadowColor: Colors.black,
        textShadowOffset: { width: 2, height: 5 },
        textShadowRadius: 5
    }
});