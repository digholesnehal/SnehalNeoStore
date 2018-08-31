import { Platform, StyleSheet, Dimensions, } from 'react-native';
import * as Colors from '../../../utils/colors';
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
        color: Colors.primary,
        fontSize: Platform.OS === 'ios' ? 45 : 40,
        fontWeight: 'bold',
        paddingTop: 70,
        padding: 20,
    },

    fpMid: {
        flex: 9,
        flexDirection: 'column',
        justifyContent: 'flex-start',
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
    },

    pass: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
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
    },

    btnTxt: {
        color: Colors.redBtnTxt,
        fontSize: Platform.OS === 'ios' ? 25 : 25,
        fontWeight: '500',
    },

    userPass: {
        height: 45,
        width: 280,
        borderColor: Colors.primary,
        borderWidth: 1,
        padding: 10,
        margin: 6,
        flexDirection: 'row',
        justifyContent: 'center'
    },

    icon: {
        fontSize: 20,
        color: Colors.primary,
    },
});