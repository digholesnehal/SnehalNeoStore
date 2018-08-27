import { Platform, StyleSheet, Dimensions, } from 'react-native';
import * as Colors from '../../../utils/colors';

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
        height: 90,
    },
    imgView: {
        flex: 1,
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
        fontSize: 20,
        color: Colors.orderIDH,
    },
    quantity: {
        fontSize: 13,
        color: Colors.orderIDH,
        padding: 3,
        paddingLeft: 5,
        alignSelf: 'center',
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
        color: Colors.blackSecondary,
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
    },
    deleteView: {
        flex: 1,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    trash: {
        borderRadius: Platform.OS === 'ios' ? 25 : 5,
        backgroundColor: Colors.redBtnBG,
        width: Platform.OS === 'ios' ? 50 : 30,
        height: Platform.OS === 'ios' ? 50 : 30,
        alignSelf: "flex-end",
        alignItems: 'center',
        justifyContent: 'center',
    }
})