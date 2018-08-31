import { Platform, StyleSheet } from 'react-native';
import * as Colors from '../../utils/colors';
import * as FW from '../../styles/appStyles.js';
import * as family from '../../utils/fontFamily.js';

export default styles = StyleSheet.create({
    bg: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: Colors.enterQtyB,
    },
    top: {
        paddingTop: Platform.OS === 'ios' ? 40 : 10,
        flex: 7,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        flexDirection: 'row',
        alignSelf: 'center',
        justifyContent: 'center',
        height: 100,
        borderRadius: 50,
        width: 100,
        marginTop: 30,
        borderColor: Colors.primary,
        borderWidth: 2,
    },
    UserName: {
        fontFamily: family.Medium,
        justifyContent: 'center',
        alignSelf: 'center',
        fontSize: 23,
        color: Colors.primary,
        fontWeight: FW.bookBM,
        padding: 10,
    },
    itemCount: {
        marginRight: 10,
        borderRadius: Platform.OS === 'ios' ? 13 : 13,
        backgroundColor: Colors.redBtnBG,
        width: Platform.OS === 'ios' ? 26 : 26,
        height: Platform.OS === 'ios' ? 26 : 26,
        alignSelf: "center",
        alignItems: 'center',
        justifyContent: 'center',
    },
    count: {
        paddingTop: Platform.OS === 'ios' ? 5 : 0,
        fontFamily: family.Book,
        color: Colors.primary,
        fontSize: 14,
    },
    email: {
        fontFamily: family.Book,
        justifyContent: 'center',
        alignSelf: 'center',
        fontSize: 14,
        color: Colors.primary,
        paddingBottom: Platform.OS === 'ios' ? 20 : 13,
    },
    partitions: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: Colors.sbarBGdesc,
        borderBottomColor: Colors.enterQtyB,

    },
    options: {
        fontFamily: family.Medium,
        fontSize: 17,
        color: Colors.primary,
        fontWeight: FW.bookBM,
        paddingLeft: 5,
        paddingTop: Platform.OS === 'ios' ? 5 : 0,
    },
    icon: {
        fontSize: Platform.OS === 'ios' ? 20 : 20,
        color: Colors.primary,
        paddingTop: Platform.OS === 'ios' ? 10 : 12,
        padding: Platform.OS === 'ios' ? 10 : 10,
    },
});