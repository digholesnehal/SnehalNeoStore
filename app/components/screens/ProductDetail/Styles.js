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
    NameView: {
        flex: 1,
    },
    Name: {
        color: Colors.proHeading,
        fontSize: size.mLarge,
        fontWeight: weight.bookBM,
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
        flex: 5,
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
        fontWeight: weight.bookB,
    },
    largeImg: {
        flex: 5,
    },
    subImages: {
        flex: 3,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    img: {
        height: 100,
        width: 100,
    },
    Limg: {

    },
});