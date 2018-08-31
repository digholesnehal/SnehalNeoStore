import { Platform, StyleSheet, Dimensions, } from 'react-native';
import * as Colors from '../../../utils/colors';
import * as family from '../../../utils/fontFamily';

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.primary,
        flexDirection: 'column',
    },
    SwipeView: {
        backgroundColor: Colors.primary,
        flex: 1,
        flexDirection: 'row',
        padding: 10,
        borderBottomColor: Colors.myCartSmallBG,
        borderBottomWidth: 1,
        height: 110,
    },
    imgView: {
        flex: 1.2,
    },
    img: {
        height: '100%',
        width: '100%',
    },
    midSwipe: {
        flex: 3,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        paddingTop: 0,
        paddingBottom: 0,
        padding: 10,
    },
    name: {
        fontSize: 23,
        color: Colors.orderIDH,
    },
    quantity: {
        fontSize: 15,
        color: Colors.orderIDH,
        padding: 3,
        paddingLeft: 5,
        alignSelf: 'center',
    },
    dropDown: {
        width: 40,
        alignItems: 'center',
    },
    midPartitionC: {
        flex: 2,
        flexDirection: 'column',
    },
    midPartitionR: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: 5,
    },
    quantityView: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        backgroundColor: Colors.myCartSmallBG,
        borderRadius: 3,
        width: 40,
        height: 26,
    },
    category: {
        fontSize: 15,
        fontWeight: 'normal',
        color: Colors.blackSecondary,
        paddingTop: 3,
    },
    icon: {
        fontSize: 20,
    },
    totalView: {
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 66.66,
        borderBottomColor: Colors.myCartSmallBG,
        borderBottomWidth: 1,
    },
    totalTxt: {
        fontSize: 15,
        fontWeight: '600',
        color: Colors.orderIDH,
        paddingLeft: 15,
    },
    deleteView: {
        flex: 1,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    trash: {
        borderRadius: 25,
        backgroundColor: Colors.redBtnBG,
        width: 50,
        height: 50,
        alignSelf: "flex-end",
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnView: {
        padding: 10,
        paddingTop: 30,
    },
    buttonStyle: {
        backgroundColor: Colors.redBtnBG,
        height: Platform.OS === 'ios' ? 50 : 40,
        borderRadius: 5,
        color: Colors.redBtnTxt,
        fontSize: Platform.OS === 'ios' ? 80 : 70,
        fontWeight: 'bold',
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnTxt: {
        color: Colors.primary,
        fontSize: Platform.OS === 'ios' ? 25 : 25,
        fontWeight: '500',
    },
})