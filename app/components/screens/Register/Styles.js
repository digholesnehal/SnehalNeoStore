import {Platform, StyleSheet, Dimensions, } from 'react-native';
import {primary, redHeader, redBtnTxt} from '../../../utils/colors'
import {xxSmall} from '../../../utils/fonts'

export default styles = StyleSheet.create({
    
    container:{
        flex:1,
        
    },

    regHead:{
        flex:2,
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        padding:Platform.OS === 'ios'?15:12,
    },

    headFont:{
        color: primary,
        fontSize: Platform.OS === 'ios'?45:40,
        fontWeight: 'bold',
    },
  
    regMid:{
        flex: 10,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },

    textField:{
        width:250,
        height: Platform.OS === 'ios'?40:60,
        fontSize: Platform.OS === 'ios'?20:17,
        alignSelf:'center',
        paddingLeft:15,
        fontWeight:'500',
        color:'white',
    },

    btn:{
        flex:2,   
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-start',
        padding:10,
    },

    buttonStyle:{
        backgroundColor: primary,
        width: Platform.OS === 'ios'?300:280,
        height: Platform.OS === 'ios'?50:40,
        borderRadius: 5,
        color: redBtnTxt,
        fontSize: Platform.OS === 'ios'?80:70,
        fontWeight: 'bold',
        alignItems: 'center',
        justifyContent: 'center',
      },

    btnTxt:{
        color:redBtnTxt,
        fontSize: Platform.OS === 'ios'?30:25,
        fontWeight: 'bold',
    },

    icon:{
        fontSize:Platform.OS === 'ios'?20:15,
        color: primary,
    },

    envelope:{
        fontSize:Platform.OS === 'ios'?20:15,
        color: primary,
        paddingLeft:8,
    },

    iconPhn:{
        fontSize:Platform.OS === 'ios'?25:18,
        color: primary,
    },

     userPass:{
        height:Platform.OS === 'ios'?45:35,
        width:280, 
        borderColor: primary,
        borderWidth: 1,
        padding:Platform.OS === 'ios'?10:8,
        margin:6,
        flexDirection: 'row',
        justifyContent:'center'
    },

    valueText: {
        fontSize: 18, 
        marginBottom: 50,
    },

    radioTitle:{
        fontSize:Platform.OS === 'ios'?20:17,
        color: primary,
        paddingBottom:10,
        paddingRight:20,
        paddingLeft:5,
        fontWeight:'500',
    },

    rowFlex:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
    },

    radio:{
        flex:7,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        color:primary,
    },

    checkBox:
    {
        flex:1,
        flexDirection: 'row',
        color: primary,
        fontSize:Platform.OS === 'ios'?xxSmall:10,
        alignItems: 'center',
        justifyContent: 'center',
        padding:10,
    },

    checkBoxTitle:{
        color: primary,
    }


});