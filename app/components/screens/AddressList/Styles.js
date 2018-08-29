import { Platform, StyleSheet, Dimensions, } from 'react-native';
import * as Colors from '../../../utils/colors';

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    container1: {
        backgroundColor: Colors.primary,
        flex: 1,
        flexDirection: 'column',
        padding: 10,
    },
    shippping: {
        fontSize: 20,
        color: Colors.blackPrimary,
    },
    itemRow: {
        flex: 1,
        flexDirection: 'row',
    },
    addressBox: {
        flexDirection: 'column',
        borderColor: Colors.blackSecondary,
        borderWidth: 1,
    },
    HeadView: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-around',
    },
    Heading: {
        fontSize: 22,
        fontWeight: '600',
        color: Colors.blackPrimary,
    },
    close: {
        alignSelf: 'flex-end',
    }

})