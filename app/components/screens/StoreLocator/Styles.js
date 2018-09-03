import { Platform, StyleSheet, Dimensions, } from 'react-native';
import * as Colors from '../../../utils/colors';
import * as family from '../../../utils/fontFamily';

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
        fontFamily: family.Bold,
        color: Colors.blackPrimary,
    },
    NormalText: {
        fontSize: 13.5,
        fontFamily: family.Medium,
        color: Colors.blackSecondary,
    },
});