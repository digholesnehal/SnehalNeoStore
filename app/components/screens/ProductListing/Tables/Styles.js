import { Platform, StyleSheet, Dimensions, } from 'react-native';
import * as Colors from '../../../../utils/colors.js';
import * as Fonts from '../../../../utils/fonts.js';
import * as Boldness from '../../../../styles/appStyles.js'

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.primary,
    },

    cPartition: {
        flex: 1,
        flexDirection: 'row',
    },

    rPartition: {
        flex: 1,
        flexDirection: 'column',
    },

    img: {
        height: 100,
        width: 100,
    },

    itemRow: {
        flex: 1,
        flexDirection: 'row',
        padding: 8,
    },

    productInfo: {
        flex: 3,
        flexDirection: 'column',
    },

    iName: {
        color: Colors.blackSecondary,
        fontSize: Fonts.medium,
        fontWeight: Boldness.bookBM,
    },

    iProducer: {
        color: Colors.blackSecondary,
        fontSize: Fonts.xxSmall,
    },

    iCost: {
        color: Colors.tableRTxt,
        fontSize: Fonts.mLarge,
        fontWeight: Boldness.bookBM,
    },
})