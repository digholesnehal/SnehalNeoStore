import {Platform, StyleSheet, Dimensions, } from 'react-native';

export default styles = StyleSheet.create({
    
    container:{
        flex:1,
        alignItems:"center",
    },

    regHeader:{
        flex:1,
        flexDirection:'row',
        backgroundColor:'#e91b1a',
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
        color:"white",
        fontSize:30,
        alignSelf:"center",
        justifyContent:'center',
    },

    headText:{
        flex:5,
        alignItems:'center',
        justifyContent:'center',  
    },

    register:{
        color:'white',
        fontSize:20,
    },

    regHead:{
        flex:2,
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'flex-end',
    },

    headFont:{
        color: 'white',
        fontSize: 50,
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
        height: 40,
        fontSize: 20,
        alignSelf:'center',
        paddingLeft:15,
        fontWeight:'500',
    },

    btn:{
        flex:2,   
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-start',
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

    icon:{
        fontSize:20,
        color: 'white',
    },

    iconPhn:{
        fontSize:25,
        color: 'white',
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

    valueText: {
        fontSize: 18, 
        marginBottom: 50,
    },
});