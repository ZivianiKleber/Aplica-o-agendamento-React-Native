import React from 'react';
import {StyleSheet, Text, View,Image} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import {Button, Title,} from 'react-native-paper';

export default function Cadastro1 (){
    return(
        <View style = {styles.container}>
            <View >
                <View style = {{bottom:100}}>
                    <Title style = {{color:'#00FFC4',fontSize:50,paddingTop:30,paddingBottom:30,textAlign:'center'}}>CADASTRO</Title>
                    <Image source = {require('../image/2.png')}/>
                </View>
            </View>
            <View>
                <View style = {{bottom:63}}>
                    <Text style = {styles.texto}>SENHA</Text>
                    <TextInput secureTextEntry={true}  placeholder= 'SENHA' style = {styles.campo}></TextInput>
                    <Text style = {styles.texto}>REPETIR SENHA </Text>
                    <TextInput secureTextEntry = {true} placeholder= 'REPETIR SENHA' style = {styles.campo}></TextInput>
                </View>
            </View>
            <View style = {{top:10,justifyContent:'space-around', flexDirection:'row'}} >
                <Button mode = 'contained' color = '#F55959' style = {styles.botaoVoltar}><Text style = {styles.texto}>VOLTAR</Text></Button>
                <Button mode = 'contained' color = '#00FFC4' style = {styles.botaoProximo}><Text style = {styles.texto}>PROXIMO</Text></Button>
        
            </View>
                  
        </View>
    );
}
    const styles = StyleSheet.create({
        container:{
            flex:1,
            justifyContent: 'center',
            alignItems:'center',
            backgroundColor:  '#24303C'
        },
        campo:{
            backgroundColor:'white',
            borderRadius:20,
            width:318,
            height:60,
            textAlign:'center'
        },
        texto:{
            color:'#707070',
            paddingTop:25,
            paddingBottom:10,
            textAlign:'center',
            fontSize:20
        },
        botaoVoltar:{
            top:40,
            alignItems:'center',
            justifyContent:'center',
            borderRadius:10,
            height:50,
            width:154,
            bottom:15,
            right:10,
        }, 
        botaoProximo:{
            top:40,
            alignItems:'center',
            justifyContent:'center',
            borderRadius:10,
            height:50,
            width:154,
            bottom:15,
            left:10,

        },
       
    });