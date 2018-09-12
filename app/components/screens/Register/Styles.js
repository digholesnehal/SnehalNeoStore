import { Platform, StyleSheet, Dimensions, } from 'react-native';
import { primary, redHeader, redBtnTxt } from '../../../utils/colors'
import { xxSmall } from '../../../utils/fonts'
import * as family from '../../../utils/fontFamily';

export default styles = StyleSheet.create({

    container: {
        flex: 1,
    },
    regHead: {
        flex: 2,
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        paddingTop: Platform.OS === 'ios' ? 45 : 12,
        paddingBottom: 10,
    },
    headFont: {
        color: primary,
        fontSize: Platform.OS === 'ios' ? 48 : 45,
        fontFamily: family.Bold,
    },
    regMid: {
        flex: 10,
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
        color: primary,
        padding: 10
    },
    btn: {
        flex: 2,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-start',
        padding: 10,
    },
    buttonStyle: {
        backgroundColor: primary,
        width: Platform.OS === 'ios' ? 300 : 280,
        height: Platform.OS === 'ios' ? 50 : 45,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnTxt: {
        color: redBtnTxt,
        fontSize: Platform.OS === 'ios' ? 30 : 26,
        fontFamily: family.Medium,
        paddingTop: Platform.Os === 'ios' ? 10 : 0,
    },
    icon: {
        fontSize: Platform.OS === 'ios' ? 20 : 15,
        color: primary,
    },
    envelope: {
        fontSize: Platform.OS === 'ios' ? 20 : 15,
        color: primary,
        paddingLeft: 8,
    },
    iconPhn: {
        fontSize: Platform.OS === 'ios' ? 22 : 18,
        color: primary,
    },
    userPass: {
        height: Platform.OS === 'ios' ? 40 : 35,
        width: 280,
        borderColor: primary,
        borderWidth: 1,
        padding: 8,
        margin: 6,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    valueText: {
        fontSize: 18,
        marginBottom: 50,
    },
    radioTitle: {
        fontFamily: family.Medium,
        fontSize: Platform.OS === 'ios' ? 20 : 18,
        color: primary,
        paddingRight: 20,
        paddingLeft: 5,
        fontWeight: '500',
    },
    rowFlex: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    radio: {
        flex: 7,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        color: primary,
    },
    checkBox:
        {
            flex: 1,
            flexDirection: 'row',
            color: primary,
            alignItems: 'center',
            justifyContent: 'center',
            padding: 10,
        },
    checkBoxTitle: {
        color: primary,
        fontFamily: family.Medium,
    }
});