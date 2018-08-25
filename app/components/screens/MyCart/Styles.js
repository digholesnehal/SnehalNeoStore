import { Platform, StyleSheet, Dimensions, } from 'react-native';
import * as Colors from '../../../utils/colors';

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.primary,
        flexDirection: 'column',
    },
    SwipeView: {
        flex: 1,
        flexDirection: 'row',
        padding: 10,
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
        alignItems: 'center',
        justifyContent: 'center',
    },
    name: {
        fontSize: 20,
        color: Colors.blackPrimary,
    },
    midPartitionC: {
        flex: 2,
        flexDirection: 'column',
    },
    midPartitionR: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    quantityView: {
        alignItems: 'center',
        backgroundColor: Colors.myCartSmallBG,
        borderRadius: 2,
        width: 25,
        height: 20,
    },
    icon: {
        fontSize: 20,
    },
    priceView: {
        flex: 1,
    }
})