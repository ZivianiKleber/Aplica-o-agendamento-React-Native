import React from 'react';
import {View,Text,StyleSheet,ScrollView} from 'react-native';
import { TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler';
import { Appbar, Button, Searchbar,Avatar, List, Title } from 'react-native-paper';
 
function AppbarF(){
    return(
    <Appbar.Header style = {styles.menu}>
            <View style = {styles.searchBar}>
                <Appbar.Action icon = "segment" style = {styles.menubar} />
                <Searchbar 
                    placeholder = 'Search'
                    style={styles.search}
                    //onChangeText={onChangeSearch}
                    //value={searchQuery}
                    />
                    <TouchableOpacity>
                        <Avatar.Image size = {50} source = {require('../image/Logo.png')}/>
                    </TouchableOpacity>
        </View>
    </Appbar.Header>
);
}
function ListaBar(){
    return(
        <List.Section>
            <List.Item  left={() => 
            <View>
                <View>
                    <TouchableOpacity style = {styles.blocoLista}>
                        <Avatar.Image source = {require('../image/Logo.png')} style = {{paddingLeft:5}}/>
                        <Title style = {styles.titulo}>Nome</Title>
                        <Text style = {styles.tituloValor}>R$0.00</Text>
                        <View style = {styles.avaliacao}><Text>Avaliação</Text></View>
                    </TouchableOpacity>
                    
                </View>
            </View>
        } />
        </List.Section>
    );
}

export default function ListaBarbeiro(){

    return(
        <View style = {styles.container}>
               <AppbarF/>
            <View style = {styles.conteined}>
                    <View style = {styles.conteudo}>
                        <ScrollView  >
                            <View style = {{borderRadius:10}}>
                                <ListaBar/>
                                <ListaBar/>
                                <ListaBar/>
                                <ListaBar/>
                                <ListaBar/>
                                <ListaBar/>
                                <ListaBar/>
                                <ListaBar/>
                                <ListaBar/>
                                <ListaBar/>
                                <ListaBar/>
                                <ListaBar/>
                            </View>
                        </ScrollView>
                    </View>
               
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
    conteined:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    menu:{
        width:'100%',
        height:'1%',
        
        
    }, 
    searchBar:{
        width:'100%',
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'row',
        bottom:20,
        
    },
    search:{
        
        backgroundColor:'white',
        borderRadius:100,
        flexDirection:'row',
        height:40,
        width:'70%',
        right:5
    },
    menubar:{
       //Menu Lateral
       right:5
    },
  
    conteudo:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    blocoLista:{
        backgroundColor:'white',
        width:360,
        height:80,
        borderRadius:20,
        flexDirection:'row',
        borderColor:'blue',
       borderWidth:1,
        alignItems:'center'
    },
    BottomNavigatiion:{
        backgroundColor:'#681dcc',
        width:400,
        height:50
    },
    titulo:{
        left:30,
        bottom:20
    },
    tituloValor:{
        left:170
    },
    avaliacao:{
        right:70,
        top:12
    }
});