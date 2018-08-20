import { Platform, StyleSheet, Dimensions, } from 'react-native';
import * as Colors from '../../../utils/colors';
import * as weight from '../../../styles/appStyles';
import * as size from '../../../utils/fonts';

export default styles = StyleSheet.create({
    Details: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: Colors.primary,
        padding: 10,
    },
    container: {
        flex: 1,
    },
    Name: {
        color: Colors.proHeading,
        fontSize: size.mLarge,
        fontWeight: Platform.OS === 'ios' ? '500' : '400',
    },
    categoryView: {
        flex: 1,
    },
    category: {
        fontSize: size.medium,
        color: Colors.proHeading,
    },
    row: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    producer: {
        fontSize: size.xxSmall,
        color: Colors.proHeading,

    },
    myStarStyle: {
        fontSize: 20,
        color: Colors.ratingAfter,
    },

    myEmptyStarStyle: {
        color: Colors.ratingBefore,
    },
    imgGrp: {
        flex: 8,
        flexDirection: 'column',
        margin: 10,
        backgroundColor: Colors.primary,
        borderRadius: 5,
    },
    priceView: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 10,
        paddingRight: 10,
    },
    price: {
        color: Colors.redBtnTxt,
        fontSize: size.lMedium,
        fontWeight: Platform.OS === 'ios' ? '500' : '400',
    },
    largeImg: {
        flex: 6,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
    },
    subImages: {
        flex: 3,
        flexDirection: 'row',
        justifyContent: 'center',
        paddingBottom: 20,
        padding: 5,
    },
    Rimg: {
        height: 90,
        width: 105,
        marginTop: 0,
        margin: Platform.OS === 'ios' ? 5 : 3,
        borderColor: Colors.redBtnBG,
        borderWidth: 1,
    },
    Gimg: {
        height: 90,
        width: 105,
        marginTop: 0,
        margin: Platform.OS === 'ios' ? 5 : 3,
        borderColor: Colors.ratingBefore,
        borderWidth: 0.7,
    },
    Bimg: {
        height: 200,
        width: 300,
        borderColor: Colors.gRadioUnchecked,
        borderWidth: 0.5,
    },
    Description: {
        flex: 3,
        paddingTop: 10,
        paddingLeft: 10,
        borderTopColor: Colors.gRadioUnchecked,
        borderTopWidth: 1,
    },
    heading: {
        color: Colors.sbarBGdesc,
        fontSize: size.sMedium,
        fontWeight: '700',
    },
    normalTxt: {
        color: Colors.sbarBGdesc,
        fontSize: size.xSmall,
        fontWeight: 'normal',
        paddingTop: 3,
        paddingBottom: 10,
    },
    footerBtn: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: Colors.primary,
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: 10,
    },
    BuyNow: {
        backgroundColor: Colors.redBtnTxt,
        width: Platform.OS === 'ios' ? 170 : 160,
        height: Platform.OS === 'ios' ? 40 : 40,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    BuyNowTxt: {
        color: Colors.primary,
        fontSize: Platform.OS === 'ios' ? size.medium : size.medium,
        fontWeight: '500',
    },
    Rate: {
        backgroundColor: Colors.gRadioUnchecked,
        width: Platform.OS === 'ios' ? 170 : 160,
        height: Platform.OS === 'ios' ? 40 : 40,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    RateTxt: {
        color: Colors.rateText,
        fontSize: Platform.OS === 'ios' ? size.medium : size.medium,
        fontWeight: '500',
    },
    modalView: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.primary,
        borderRadius: 5,
        paddingTop: 60,

    },
});
