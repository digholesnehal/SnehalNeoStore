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
        alignItems: 'center',
    },

    rPartition: {
        flex: 1,
        flexDirection: 'column',
    },

    img: {
        height: '100%',
        width: '100%',
    },

    itemRow: {
        flex: 1,
        flexDirection: 'row',
        padding: 12,
        borderBottomColor: Colors.myCartSmallBG,
        borderBottomWidth: 2,
    },

    productInfo: {
        flex: 3,
        flexDirection: 'column',
    },

    iName: {
        color: Colors.blackSecondary,
        fontSize: Fonts.sMedium,
        fontWeight: Boldness.bookBM,
        paddingLeft: 10,
    },

    iProducer: {
        color: Colors.blackSecondary,
        fontSize: Fonts.xxSmall,
        paddingLeft: 10,
    },

    iCost: {
        color: Colors.tableRTxt,
        fontSize: Fonts.lMedium,
        fontWeight: Boldness.bookBM,
        padding: 10,
    },

    myStarStyle: {
        fontSize: 20,
        color: Colors.ratingAfter,
    },

    myEmptyStarStyle: {
        color: Colors.ratingBefore,
    }
})