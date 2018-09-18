import { Platform, StyleSheet, Dimensions, } from 'react-native';
import * as Colors from '../../../utils/colors';
import * as Fonts from '../../../utils/fonts.js';
import * as Boldness from '../../../styles/appStyles.js'
import * as family from '../../../utils/fontFamily';

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.primary,
    },
    cPartition: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
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
        flex: 2.5,
        flexDirection: 'column',
    },
    iName: {
        color: Colors.blackSecondary,
        fontSize: Fonts.small,
        fontFamily: family.Medium,
        paddingLeft: 10,
    },
    iProducer: {
        fontFamily: family.Book,
        color: Colors.blackSecondary,
        fontSize: Fonts.xxSmall,
        paddingLeft: 10,
    },
    iCost: {
        color: Colors.tableRTxt,
        fontSize: Fonts.medium,
        fontFamily: family.Medium,
        padding: 10,
        textShadowColor: Colors.blackSecondary,
        textShadowOffset: { width: 1, height: 2 },
        textShadowRadius: 2
    },
    myStarStyle: {
        fontSize: 15,
        color: Colors.ratingAfter,
        textShadowColor: Colors.blackSecondary,
        textShadowOffset: { width: 1, height: 10 },
        textShadowRadius: 3
    },
    myEmptyStarStyle: {
        color: Colors.ratingBefore,
        textShadowColor: Colors.blackSecondary,
        textShadowOffset: { width: 1, height: 10 },
        textShadowRadius: 3
    },
    footer: {
        height: '3%',
        width: '15%',
        marginBottom: '2%',
        alignSelf: 'center',
        backgroundColor: Colors.blackPrimary,
    },
    counter: {
        marginTop: Platform.OS === 'ios' ? '3%' : '0%',
        color: Colors.primary,
        alignSelf: 'center',
        fontSize: Platform.OS.ios ? 15 : 12,
        fontFamily: family.Book,
    },
})