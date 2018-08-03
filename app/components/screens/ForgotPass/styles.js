import {Platform, StyleSheet, Dimensions, } from 'react-native';
import {primary, redBtnTxt } from '../../../utils/colors'
import {} from '../../../utils/fonts'


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
        fontSize: 50,
        fontWeight: 'bold',
    },

    midFont:{
        color: primary,
        fontSize: 25,
        fontWeight: 'bold',
        padding:20,
        paddingLeft: 40 ,
        alignSelf:"flex-start",
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