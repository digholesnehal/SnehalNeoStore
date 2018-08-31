import { Platform, StyleSheet } from 'react-native';
import * as Colors from '../../utils/colors';
import * as FW from '../../styles/appStyles.js';

export default styles = StyleSheet.create({
    bg: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: Colors.enterQtyB,
    },
    top: {
        flex: 5,
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
        color: Colors.primary,
        fontSize: 13,
    },
    email: {
        justifyContent: 'center',
        alignSelf: 'center',
        fontSize: 13,
        color: Colors.primary,
        paddingBottom: 13,
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
        fontSize: 18,
        color: Colors.primary,
        fontWeight: FW.bookBM,
        padding: 10,
    },
    icon: {
        fontSize: Platform.OS === 'ios' ? 20 : 18,
        color: Colors.primary,
        paddingTop: Platform.OS === 'ios' ? 10 : 14,
        padding: Platform.OS === 'ios' ? 10 : 10,
    },
});