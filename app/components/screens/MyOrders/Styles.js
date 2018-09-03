import { Platform, StyleSheet, Dimensions, } from 'react-native';
import * as Colors from '../../../utils/colors';
import * as family from '../../../utils/fontFamily';

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.primary,
    },

    itemRow: {
        flexDirection: 'row',
        padding: 12,
        borderBottomColor: Colors.myCartSmallBG,
        borderBottomWidth: 2,
        justifyContent: 'space-between',
        padding: 15,
        paddingLeft: 10,
    },
    column1: {
        flexDirection: 'column',
    },
    column2: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    Heading: {
        fontSize: 18,
        fontFamily: family.Book,
        color: Colors.orderIDH,
    },
    headingPadding: {
        paddingBottom: 10,
    },
    dateView: {
        borderTopColor: Colors.myCartSmallBG,
        borderTopWidth: 0.8,
        paddingTop: 10,
    },
    orderDate: {
        color: Colors.blackSecondary,
        fontSize: 12,
        fontFamily: family.Book,
    },
    cost: {
        fontFamily: family.Book,
        fontSize: 20,
    },
})