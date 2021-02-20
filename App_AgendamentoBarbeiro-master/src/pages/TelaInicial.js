import React from 'react' 
//import {View} from 'react-native-paper'
import { StyleSheet,View,Image,Text, Alert } from 'react-native';
import {Button, Title,Avatar} from 'react-native-paper';


export default function TelaInicial({navigation}){
    return(
        <View style = {styles.conteiner}> 
            <Avatar.Image size={200} source = {require('../image/Logo.png')} />
            <Title style = {{color:'white',fontSize:40,paddingTop:40}} >Nome Aplicação</Title>
            <Button mode = 'contained'  color = '#24303C' style = {styles.BotaoAgendeAgora} onPress = {()=> {Alert.alert('Agende Agora')}}>
                <Title style = {{color:'white'}}>AGENDE AGORA</Title>
            </Button>
            <Button mode = 'contained' color = '#00FFC4' style = {styles.BotaoLogin} onPress = {()=> navigation.navigate('Login')}>
                <Title>LOGIN</Title>
            </Button>
       
        </View>
    );
}
const styles = StyleSheet.create({
    conteiner:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:  '#24303C'
    },
    logo:{
        top:10,
        height: 200,
        width: 200
    },
    textFont:{
        fontFamily:'bold',
        fontSize:50,
        color:'white',
    },
    colorPrimary:{
        backgroundColor:'white'
    },
    colorSecundary:{
        color:'blue'
    },
    BotaoAgendeAgora:{
       
        borderWidth:0.5,
        borderColor:'white',
        width:300,
        height:60,
        borderRadius:10,
        textAlign:'center',
        paddingTop:5,
        top:25
        

    },
    BotaoLogin:{
        borderWidth:0.5,
        borderColor:'white',
        width:300,
        height:60,
        borderRadius:10,
        textAlign:'center',
        paddingTop:5,
        top:50
    }
});






// 'default' , function , <View>  </View>   StyleSheet