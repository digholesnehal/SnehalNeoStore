import {Platform, StyleSheet, Dimensions, } from 'react-native';
import {primary, redHeader, redBtnTxt} from '../../../utils/colors'
import {xxSmall} from '../../../utils/fonts'



export default styles = StyleSheet.create({
    
    container:{
        flex:1,
        justifyContent:"space-between",
    },

    fpHead:{
        flex:3,
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
    },

    headFont:{
        color: primary,
        fontSize: Platform.OS === 'ios'?45:40,
        fontWeight: 'bold',
        paddingTop:70,
        padding:20,
    },

    midFont:{
        color: primary,
        fontSize: Platform.OS=== 'ios'?25:22,
        fontWeight: 'bold',
        alignSelf:"center",
    },
  
    fpMid:{
        flex: 9,
        flexDirection: 'column',
        justifyContent: 'flex-start',
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

    pass:{ 
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding:20,
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
        color: redBtnTxt,
        fontSize: 25,
        fontWeight: 'bold',
    },

     userPass:{
        height:45,
        width:280, 
        borderColor: primary,
        borderWidth: 1,
        padding:10,
        margin:6,
        flexDirection: 'row',
        justifyContent:'center'
    },

    icon:{
        fontSize:20,
        color: primary,
    },
});