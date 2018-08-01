import {Platform, StyleSheet, Dimensions, } from 'react-native';

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

    headFont:{
        color: 'white',
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
        backgroundColor: "white",
        width: 300,
        height: 50,
        borderRadius: 5,
        color: '#ff0000',
        fontSize: 80,
        fontWeight: 'bold',
        alignItems: 'center',
        justifyContent: 'center',
      },

      btnTxt:{
        color: 'red',
        fontSize: 30,
        fontWeight: 'bold',
    },

    fgotPass:{
        flex:1,   
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        color: 'white',
        fontSize: 20,
        fontWeight: '600',
    },

     userPass:{
        height:45,
        width:280, 
        borderColor: 'white',
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
        color: 'white',
        fontSize: 20,
        fontWeight: '600',
        alignSelf:"flex-end",
        marginBottom:20,
    },

    newAcc:{
        flex:1,
        backgroundColor: "#9E0100",
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