import { Platform, StyleSheet, Dimensions, } from 'react-native';
import * as Colors from '../../../utils/colors';
import * as family from '../../../utils/fontFamily';

export default styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    swipe: {
        flex: 3,
    },
    slide: {
        flex: 3,
    },
    images: {
        height: '100%',
        width: '100%',
    },
    hsHeader: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: Colors.redHeader,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5,
    },
    menuAlign: {
        flex: 1,
        alignSelf: "center",
        justifyContent: 'center',
    },
    menu: {
        color: "white",
        fontSize: 30,
        alignSelf: "center",
        justifyContent: 'center',
    },
    headText: {
        flex: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    neostore: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
    },
    components: {
        flex: 5,
        flexDirection: 'row',
        padding: 5,
    },
    cpartitions: {
        flex: 1,
        flexDirection: 'column',
        marginHorizontal: 7.5,
    },
    rpartitions: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: Colors.redHeader,
        borderColor: Colors.blackPrimary,
        marginVertical: 7.5,
    },
    cTitle1: {
        fontFamily: family.Medium,
        color: Colors.primary,
        fontSize: 24,
        fontWeight: '600',
        padding: Platform.OS === 'ios' ? 10 : 5,
        alignSelf: 'flex-end',
        textShadowColor: Colors.black,
        textShadowOffset: { width: 2, height: 5 },
        textShadowRadius: 5
    },
    cTitle2: {
        fontFamily: family.Medium,
        color: Colors.primary,
        fontSize: 24,
        fontWeight: '600',
        padding: Platform.OS === 'ios' ? 10 : 5,
        alignSelf: 'flex-start',
        textShadowColor: Colors.black,
        textShadowOffset: { width: 2, height: 5 },
        textShadowRadius: 5
    },
    cTitle3: {
        fontFamily: family.Medium,
        color: Colors.primary,
        fontSize: 24,
        fontWeight: '600',
        padding: Platform.OS === 'ios' ? 10 : 5,
        textShadowColor: Colors.black,
        textShadowOffset: { width: 2, height: 5 },
        textShadowRadius: 5
    },
    cTitle4: {
        fontFamily: family.Medium,
        color: Colors.primary,
        fontSize: 24,
        fontWeight: '600',
        padding: Platform.OS === 'ios' ? 10 : 5,
        alignSelf: 'flex-end',
        textShadowColor: Colors.black,
        textShadowOffset: { width: 2, height: 5 },
        textShadowRadius: 5
    },
    icon1: {
        fontSize: 80,
        color: Colors.primary,
        padding: Platform.OS === 'ios' ? 15 : 10,
        textShadowColor: Colors.black,
        textShadowOffset: { width: 2, height: 5 },
        textShadowRadius: 5
    },
    icon2: {
        fontSize: 80,
        color: Colors.primary,
        padding: Platform.OS === 'ios' ? 15 : 10,
        alignSelf: 'flex-end',
        textShadowColor: Colors.black,
        textShadowOffset: { width: 2, height: 5 },
        textShadowRadius: 5
    },
    icon3: {
        fontSize: 80,
        color: Colors.primary,
        padding: Platform.OS === 'ios' ? 15 : 10,
        alignSelf: 'flex-end',
        textShadowColor: Colors.black,
        textShadowOffset: { width: 2, height: 5 },
        textShadowRadius: 5
    },
    icon4: {
        fontSize: 80,
        color: Colors.primary,
        padding: Platform.OS === 'ios' ? 15 : 10,
        textShadowColor: Colors.black,
        textShadowOffset: { width: 2, height: 5 },
        textShadowRadius: 5
    },
    TO: {
        flex: 1,
        justifyContent: 'space-between',
    },
})