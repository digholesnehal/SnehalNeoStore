import { Platform, StyleSheet, Dimensions, } from 'react-native';
import * as Colors from '../../../utils/colors.js'
import * as family from '../../../utils/fontFamily';

export default styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    loginHead: {
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
    },

    Head: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    headFont: {
        color: Colors.primary,
        fontSize: Platform.OS === 'ios' ? 50 : 45,
        fontWeight: 'bold',
        alignSelf: 'center',
        justifyContent: 'center',
    },
});