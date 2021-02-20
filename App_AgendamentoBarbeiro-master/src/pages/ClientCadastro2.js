import React from 'react';
import {StyleSheet, Text, View,Image} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import {Button, Title} from 'react-native-paper';

export default function Cadastro2 (){
    return(
        <View style = {styles.container}>
            <View >
                <View style = {{bottom:100}}>
                    <Image source = {require('../image/3.png')} style = {styles.imagem}/>
                </View>
            </View>
            <View>
                <View style = {{bottom:63}}>
                    <Text style = {styles.textoTitulo}>SEJA BEM VINDO!</Text>
                </View>
            </View>
            <View style = {{top:10,justifyContent:'space-around', flexDirection:'row'}} >
                <Button mode = 'contained' color = '#00FFC4' style = {styles.textoBotao}><Text style = {styles.textoBotao}>FINALIZAR</Text></Button>
            </View>
        </View>
    );
}
    const styles = StyleSheet.create({
        container:{
            flex:1,
            justifyContent: 'space-around',
            alignItems:'center',
            backgroundColor:  '#24303C'
        },
        textoTitulo:{
            color:'#707070',
            paddingTop:25,
            paddingBottom:10,
            textAlign:'center',
            fontSize:45,
            color:'white',
            top:60
        
        },textoBotao:{
            height:50,
            width:154,
            textAlign:'center',
            fontSize:20,
            color:'#707070', 
            borderRadius:10,
            textAlign:'center',
            
        },
        imagem:{
            top:160
        }
        
       
    });