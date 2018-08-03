import {Platform, StyleSheet, Dimensions, } from 'react-native';
import {primary, redHeader, redBtnTxt} from '../../../utils/colors'
import {xxSmall} from '../../../utils/fonts'

export default styles = StyleSheet.create({
    
    container:{
        flex:1,
        
    },

    regHeader:{
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
        color:primary,
        fontSize:20,
    },

    regHead:{
        flex:2,
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'flex-end',
    },

    headFont:{
        color: primary,
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
        color:'white',
    },

    btn:{
        flex:2,   
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-start',
    },

    buttonStyle:{
        backgroundColor: primary,
        width: 300,
        height: 50,
        borderRadius: 5,
        color: redBtnTxt,
        fontSize: 80,
        fontWeight: 'bold',
        alignItems: 'center',
        justifyContent: 'center',
      },

    btnTxt:{
        color:redBtnTxt,
        fontSize: 30,
        fontWeight: 'bold',
    },

    icon:{
        fontSize:20,
        color: primary,
    },

    envelope:{
        fontSize:20,
        color: primary,
        paddingLeft:8,
    },

    iconPhn:{
        fontSize:25,
        color: primary,
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

    valueText: {
        fontSize: 18, 
        marginBottom: 50,
    },

    radioTitle:{
        fontSize:20,
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
        fontSize:xxSmall,
        alignItems: 'center',
        justifyContent: 'center',
    },

    checkBoxTitle:{
        color: primary,
    }


});