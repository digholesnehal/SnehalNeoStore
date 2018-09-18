import { Platform, StyleSheet, Dimensions, } from 'react-native';
import * as Colors from '../../../utils/colors';
import * as family from '../../../utils/fontFamily';

export default styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    imageView: {
        flex: 3,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        flexDirection: 'row',
        alignSelf: 'center',
        justifyContent: 'center',
        height: 133.33,
        borderRadius: 66.5,
        width: 133.33,
        padding: 20,
    },
    mid: {
        flex: 5,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    textFieldView: {
        height: Platform.OS === 'ios' ? 45 : 35,
        width: 280,
        borderColor: Colors.primary,
        borderWidth: 1,
        padding: Platform.OS === 'ios' ? 10 : 8,
        margin: 6,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    textField: {
        width: 250,
        height: Platform.OS === 'ios' ? 35 : 60,
        fontSize: Platform.OS === 'ios' ? 20 : 17,
        alignSelf: 'center',
        paddingLeft: 15,
        fontWeight: '500',
        color: Colors.primary,
        fontFamily: "Gotham-Book",
        shadowOpacity: 0.75,
        shadowRadius: 5,
        shadowColor: Colors.black,
        shadowOffset: { height: 5, width: 2 },
    },
    icon: {
        fontSize: Platform.OS === 'ios' ? 20 : 15,
        color: Colors.primary,
        shadowOpacity: 0.75,
        shadowRadius: 5,
        shadowColor: Colors.black,
        shadowOffset: { height: 5, width: 2 },
    },

    envelope: {
        fontSize: Platform.OS === 'ios' ? 20 : 15,
        color: Colors.primary,
        paddingLeft: 8,
        shadowOpacity: 0.75,
        shadowRadius: 5,
        shadowColor: Colors.black,
        shadowOffset: { height: 5, width: 2 },
    },

    iconPhn: {
        fontSize: Platform.OS === 'ios' ? 22 : 18,
        color: Colors.primary,
        shadowOpacity: 0.75,
        shadowRadius: 5,
        shadowColor: Colors.black,
        shadowOffset: { height: 5, width: 2 },
    },
    iconCake: {
        fontSize: Platform.OS === 'ios' ? 22 : 18,
        color: Colors.primary,
        paddingLeft: 8,
        shadowOpacity: 0.75,
        shadowRadius: 5,
        shadowColor: Colors.black,
        shadowOffset: { height: 5, width: 2 },
    },
    resetPass: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.primary,
    },
    btnView: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-start',
        padding: 10,
    },
    buttonStyle: {
        backgroundColor: Colors.primary,
        width: Platform.OS === 'ios' ? 280 : 280,
        height: Platform.OS === 'ios' ? 50 : 40,
        borderRadius: 5,
        color: Colors.redBtnTxt,
        fontSize: Platform.OS === 'ios' ? 80 : 70,
        fontWeight: 'bold',
        alignItems: 'center',
        justifyContent: 'center',
        shadowOpacity: 0.75,
        shadowRadius: 5,
        shadowColor: Colors.black,
        shadowOffset: { height: 5, width: 2 },
    },
    btnTxt: {
        color: Colors.redBtnTxt,
        fontSize: Platform.OS === 'ios' ? 25 : 25,
        fontWeight: '500',
        textShadowColor: Colors.blackSecondary,
        textShadowOffset: Platform.OS === 'ios' ? { width: 2, height: 3 } : { width: 1, height: 1 },
        textShadowRadius: Platform.OS === 'ios' ? 3 : 1
    },
    ResetBtnTxt: {
        color: Colors.blackSecondary,
        fontSize: Platform.OS === 'ios' ? 25 : 25,
        fontWeight: '500',
        textShadowColor: Colors.blackSecondary,
        textShadowOffset: Platform.OS === 'ios' ? { width: 2, height: 3 } : { width: 1, height: 1 },
        textShadowRadius: Platform.OS === 'ios' ? 3 : 1
    }
});