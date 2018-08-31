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
        height: 100,
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
        fontSize: 23,
        color: Colors.orderIDH,
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
    category: {
        fontStyle: 'italic',
        fontSize: 15,
        fontWeight: 'normal',
        color: Colors.blackSecondary,
        paddingTop: 3,
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
})