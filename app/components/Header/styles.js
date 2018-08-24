import { Platform, StyleSheet } from 'react-native';
import { redHeader, primary } from '../../utils/colors.js'

export default styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: Platform.OS === 'ios' ? 55 : 50,
        width: '100%',
        backgroundColor: redHeader,
        alignItems: 'center'
    },
    Titlecontainer: {
        width: '70%',
        alignItems: 'center'
    },
    Backcontainer: {
        width: '15%',
        alignItems: 'flex-start'
    },
    SearchBackcontainer: {
        width: '15%',
        alignItems: 'flex-end',
        paddingRight: 10,
    },
    mainText: {
        alignItems: 'center',
        fontSize: 28,
        marginTop: 5,
        color: primary,
        fontWeight: 'bold',
    },
    text: {
        alignSelf: 'center',
        fontSize: 22,
        fontWeight: Platform.OS === 'ios' ? '500' : 'normal',
        marginTop: 5,
        color: primary,
        paddingBottom: 5,
    },
    menuIcon: {
        backgroundColor: 'transparent',
        paddingLeft: 10,
    },
    backMenuIcon: {
        backgroundColor: 'transparent',
        paddingLeft: 5,
    }
});
