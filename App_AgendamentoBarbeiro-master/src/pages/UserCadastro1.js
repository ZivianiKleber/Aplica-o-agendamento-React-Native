import React from 'react';
import {Image, View, StyleSheet,Text} from 'react-native';
import {Button, Title} from 'react-native-paper';
import MapView from 'react-native-maps';

const Mapa = ()=> { 
    return(
    <View>
       <MapView style = {styles.map}
       loadingEnabled={true}
       region={{
         latitude: 37.78825,
         longitude: -122.4324,
         latitudeDelta: 0.015,
         longitudeDelta: 0.0121,
       }}
       />
    </View>
    );
}

export default function UserCadastro1(){

    return(
        <View styles = {styles.container}>
           <View style = {styles.content}>
               <View  style = {styles.content_Primary}>
                   <Image source = {require('../image/2.png')}/>
               </View>
               <View style = {styles.mapContener}>
                 <Mapa/>
               </View>
               <View style = {styles.content_Secundary}>
                   <Button color = '#F55959' mode = 'contained' style =  {styles.botao}><Text style = {styles.textoBotao}>Voltar</Text></Button>
                   <Button color = '#00FFC4' mode = 'contained' style = {styles.botao}><Text style = {styles.textoBotao}>PROXIMO</Text></Button>
               </View>
           </View>
        </View>
    );
}


const styles = StyleSheet.create({

    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:  '#24303C'
    },
    content:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:  '#24303C'
    },
    botao:{
        borderRadius:10,
        height:50,
        width:154,
        top:20
       
    },
    content_Primary:{
        alignItems: 'center',
        justifyContent:'center',
        top:70
    },
    content_Secundary:{
       
        justifyContent:'space-between',
        flexDirection:'row',
        bottom:80
    },
    textoBotao:{
        color:'#ffffff',
        textAlign:'center',
        justifyContent:'center',
        alignItems: 'center',
        fontSize:20
    },
    mapContener:{
        flex:1,
        color:'red',
        top:100
    }
    ,
    map: {
      width:360,
      height:500,
      borderRadius:30,
   
      }
}) ;
