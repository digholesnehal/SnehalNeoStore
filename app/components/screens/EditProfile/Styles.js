import { Platform, StyleSheet, Dimensions, } from 'react-native';
import * as Colors from '../../../utils/colors';

export default styles = StyleSheet.create({

    container: {
        flex: 1,
    },
    imageView: {
        flex: 5,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    image: {
        borderColor: Colors.primary,
        borderWidth: 2,
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
    },
    text: {
        paddingTop: Platform.OS === 'ios' ? 5 : 18,
        fontSize: Platform.OS === 'ios' ? 20 : 17,
        fontWeight: '500',
        color: Colors.primary,
    },
    icon: {
        fontSize: Platform.OS === 'ios' ? 20 : 15,
        color: Colors.primary,
    },

    envelope: {
        fontSize: Platform.OS === 'ios' ? 20 : 15,
        color: Colors.primary,
        paddingLeft: 8,
    },

    iconPhn: {
        fontSize: Platform.OS === 'ios' ? 25 : 20,
        color: Colors.primary,
    },
    iconCake: {
        fontSize: Platform.OS === 'ios' ? 22 : 18,
        color: Colors.primary,
        paddingLeft: 8,
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
    },
    btnTxt: {
        color: Colors.redBtnTxt,
        fontSize: Platform.OS === 'ios' ? 25 : 25,
        fontWeight: '500',
    },
});