import { Platform, StyleSheet, Dimensions, } from 'react-native';
import * as Colors from '../../../../utils/colors.js';

export default styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    rPartition: {
        flex: 1,
        flexDirection: 'row',
        borderColor: Colors.blackPrimary,
        borderWidth: 5,
    },

    cPartition: {
        flex: 1,
        flexDirection: 'row',
    }
})