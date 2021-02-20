import React from 'react' 
//import {View} from 'react-native-paper'
import { StyleSheet,View,Text, TouchableHighlight, Alert, TouchableOpacity} from 'react-native';
import {Button, Title } from 'react-native-paper';
import { TextInput } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Router from '../routes/router'
import UserCadastro from './UserCadastro'

export default function Login(){
    return(
        <View style = {styles.container}>
            <View style = {styles.contained}>
                <View >
                    <Title style = {styles.titulo}>LOGIN</Title>
                </View>
                <View >
                    <TextInput placeholder = 'E-mail' style = {styles.email}></TextInput>
                </View>
                <View >
                    <TextInput secureTextEntry={true} placeholder= 'Senha' style = {styles.senha}></TextInput>
                    <TouchableOpacity onPress = {()=> {Alert.alert('Esqueci minha senha')}}><Title style = {styles.esqueciSenha}>Esqueci minha senha</Title></TouchableOpacity>
                </View>
                <View >
                    <Button mode = 'contained' color = '#00FFC4' style = {styles.botaoentrar} 
                   ><Text style = {styles.texto}>Entrar</Text></Button>
                </View>
            </View>
        </View>
    );
}

const styles  = StyleSheet.create({
    container:{
       flex:1,
       justifyContent: 'center',
       alignItems:'center',
       backgroundColor:  '#24303C',
       
    },
    contained:{
        
        justifyContent:'center',
        alignItems: 'center',
        flex:1
    },
    email:{
        backgroundColor:'white',
        borderRadius:20,
        width:318,
        height:60,
        textAlign:'center',
        bottom:40,
        
        
    },
    titulo:{
    color:'#00FFC4',
    fontSize:50,
    paddingTop:20,
    paddingBottom:90,
    textAlign:'center',
    },

    senha:{
        backgroundColor:'white',
        borderRadius:20,
        width:318,
        height:60,
        textAlign:'center',
        
        
    },

    botaoentrar:{     
        top:40,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:10,
        height:50,
        width:154,
    },

    textobotao:{
        color:'#707070',
        paddingTop:25,
        paddingBottom:10,
        textAlign:'center',
        fontSize:20,
        bottom:50
    },
    esqueciSenha:{
    color:'#FFFFFF',
    textAlign:'right',
    height:30,
    top:20,
    fontSize:15
    }
    
 
    }
)