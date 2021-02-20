import React from 'react';
import {StyleSheet, View,Text, Image} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import {Button,Title} from 'react-native-paper';

export default function UserCadastro(){
    return(
        <View style = {styles.container}>
            <View style = {styles.containerContent}>
                <View style = {styles.content_primary}>
                    <Title style = {styles.tituloText}>CADASTRO</Title>
                    <Image source = {require('../image/1.png')} style = {{top:100}}/>
                </View>
                <View style = {styles.content_secundary}>
                    <Text style = {styles.texto}>NOME</Text>
                    <TextInput style = {styles.campoNome} placeholder = 'NOME COMPLETO'></TextInput>
                </View>
                <View>
                    <Button mode = 'contained' color = '#00FFC4' style = {styles.botaoProximo}><Text style = {{color:'#707070'}}>PROXIMA</Text></Button>
                </View>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center', 
        backgroundColor:  '#24303C'
        
    },
    containerContent:{
        flex:1,
        justifyContent:'space-between',
        alignItems:'center',
    },
    tituloText: {
        color:'white',
        fontSize:32,
        alignItems:'center',
        color:'#00FFC4'
    },
    campoNome: {
        backgroundColor:'white',
        borderRadius:20,
        width:318,
        height:60,
        textAlign:'center',
    },
    texto:{
        color:'#707070',
        textAlign:'center',
        fontSize:20,
        bottom:13
    },
    content_primary:{
      
        alignItems: 'center',
        justifyContent:'center',
        top:100
    },
    content_secundary:{
    
        alignItems: 'center',
        justifyContent:'center',
    },
    botaoProximo: {
        alignItems:'center',
        justifyContent:'center',
        borderRadius:10,
        height:50,
        width:154,
        bottom:130
    }
});