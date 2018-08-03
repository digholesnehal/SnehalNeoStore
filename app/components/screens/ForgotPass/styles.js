import {Platform, StyleSheet, Dimensions, } from 'react-native';
import {primary, redHeader, redBtnTxt} from '../../../utils/colors'
import {xxSmall} from '../../../utils/fonts'



export default styles = StyleSheet.create({
    
    container:{
        flex:1,
        justifyContent:"space-between",
    },
    fpHeader:{
        flex:1,
        flexDirection:'row',
        backgroundColor: redHeader,
        alignItems:'center',
        justifyContent:'center',
        padding:5,
    },

    backAlign:{
        flex:1,
        alignSelf:"center",
        justifyContent:'center',
    },

    back:{
        color:primary,
        fontSize: Platform.OS === 'ios'?30:25,
        alignSelf:"center",
        justifyContent:'center',
    },

    headText:{
        flex:5,
        alignItems:'center',
        justifyContent:'center',  
    },

    fogotPass:{
        color:primary,
        fontSize:Platform.OS === 'ios'?20:17,
    },

    fpHead:{
        flex:3,
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
    },

    headFont:{
        color: primary,
        fontSize: Platform.OS === 'ios'?50:45,
        fontWeight: 'bold',
    },

    midFont:{
        color: primary,
        fontSize: Platform.OS=== 'ios'?25:22,
        fontWeight: 'bold',
        // padding:20,
        // paddingLeft: 40 ,
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
        height: 40,
        fontSize: 20,
        alignSelf:'center',
        paddingLeft:15,
        fontWeight:'500',
        color: primary,
    },

    pass:{ 
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding:20,
    },

    buttonStyle:{
        backgroundColor: primary,
        width: 280,
        height: 50,
        borderRadius: 5,
        color: redBtnTxt,
        fontSize: 80,
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