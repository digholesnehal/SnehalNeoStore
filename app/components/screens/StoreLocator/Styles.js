import { Platform, StyleSheet, Dimensions, } from 'react-native';
import * as Colors from '../../../utils/colors';

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.primary,
        flexDirection: 'column',
    },
    map: {
        flex: 4,
    },
    addressView: {
        flex: 1,
        flexDirection: 'row',
        borderBottomColor: Colors.myCartSmallBG,
        borderBottomWidth: 2,
        padding: 10,
    },
    Locator: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    StoreView: {
        flex: 8,
        flexDirection: 'column',
        justifyContent: 'center',
    },
    Icon: {
        color: Colors.blackSecondary,
        fontSize: 20,
    },
    HeadText: {
        fontSize: 15,
        fontWeight: 'bold',
        color: Colors.blackPrimary,
    },
    NormalText: {
        fontSize: 13.5,
        fontWeight: '500',
        color: Colors.blackSecondary,
    },
});