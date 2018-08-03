import {Platform, StyleSheet, Dimensions, } from 'react-native';
import * as Colors from '../../../utils/colors';

export default styles = StyleSheet.create({
    
    container:{
        flex:1,
    },
    loginHead:{
        flex:4,
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'flex-end',
    },

    kb:{
        flex: 1,
        justifyContent:'center',
        // alignItems: 'center',
    },

    headFont:{
        color: Colors.primary,
        fontSize: 50,
        fontWeight: 'bold',
    },
  
    loginMid:{
        flex: 3,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },

    textField:{
        width:250,
        height: 40,
        fontSize: 20,
        alignSelf:'center',
        paddingLeft:15,
        fontWeight:'500',
        color:Colors.primary,
    },

    user:{
        flex:1,   
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-end',

    },
    pass:{
        flex:1,   
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },

    buttonStyle:{
        backgroundColor: Colors.primary,
        width: 300,
        height: 50,
        borderRadius: 5,
        color: Colors.redBtnBG,
        fontSize: 80,
        fontWeight: 'bold',
        alignItems: 'center',
        justifyContent: 'center',
      },

      btnTxt:{
        color: Colors.redBtnTxt,
        fontSize: 30,
        fontWeight: 'bold',
    },

    fgotPass:{
        flex:1,   
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        color: Colors.primary,
        fontSize: 20,
        fontWeight: '600',
    },

    icon:{
        fontSize:20,
        color: Colors.primary,
    },

     userPass:{
        height:45,
        width:280, 
        borderColor: Colors.primary,
        borderWidth: 1,
        padding:10,
        margin:6,
        flexDirection: 'row',
        justifyContent:'center'
    },
     
    loginFoot:{
        flex: 3,
        flexDirection:'column',
        justifyContent: 'flex-end',
    },

    noAcc:{
        flex:5,
        color: Colors.primary,
        fontSize: 20,
        fontWeight: '600',
        alignSelf:"flex-end",
        marginBottom:20,
    },

    newAcc:{
        flex:1,
        backgroundColor: Colors.redAddAccBtn,
        width: 60,
        height: 60,
        alignSelf:"flex-end",
        bottom: 0,
        alignItems:'center',
        justifyContent: 'center',

    },

    bottom:{
        flex:1,
        flexDirection:'row',
        alignSelf:"baseline",
        padding:12,
        alignItems:'center',
    },

});