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
    email: {
        justifyContent: 'center',
        alignSelf: 'center',
        fontSize: 13,
        color: Colors.primary,
        paddingBottom: 5,
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