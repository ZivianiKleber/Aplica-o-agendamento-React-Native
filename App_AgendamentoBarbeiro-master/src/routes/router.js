import React from 'react';
import {View,Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//import { createStackNavigator } from '@react-navigation/stack';
//Telas
import Login from '../pages/Login';
import TelaInicial from '../pages/TelaInicial';
import ClientCadastro from '../pages/ClientCadastro';
import ClientCadastro1 from '../pages/ClientCadastro1';
import ClientCadastro2 from '../pages/ClientCadastro2';
import ListaBarbeiro from '../pages/ListaBarbeiro';
import UserCadastro from '../pages/UserCadastro';
import UserCadastro1 from '../pages/UserCadastro1';
import { createStackNavigator } from '@react-navigation/stack';
//
const Tab = createBottomTabNavigator();
const Snack = createStackNavigator();

function SnackNavigation(){
    return(
        <Snack.Navigator  initialRouteName = 'TelaInicial'>
            <Snack.Screen name = 'TelaInicial' component = {TelaInicial} options = {{headerTransparent:true,headerTintColor:'white'}}/>
            <Snack.Screen name = 'ListaBarbeiro' component = {TabNavigation} options = {{headerTransparent:true,headerTintColor:'white'}}/>
            <Snack.Screen name = 'Login' component = {Login} options = {{headerTransparent:true,headerTintColor:'white'}}/>
        </Snack.Navigator>
    );
}
function TabNavigation(){
    return(
        <Tab.Navigator initialRouteName = 'ListaBarbeiro'>
            <Tab.Screen name = 'ClientCadastro' component = {ClientCadastro}/>
            <Tab.Screen name = 'ClientCadastro1' component = {ClientCadastro1}/>
            <Tab.Screen name = 'ClientCadastro2' component = {ClientCadastro2}/>
            <Tab.Screen name = 'ListaBarbeiro' component = {ListaBarbeiro}/>
            <Tab.Screen name = 'UserCadastro' component = {UserCadastro}/>
        </Tab.Navigator>
    );
}
export default function router(){
    return(
        <NavigationContainer>
            <SnackNavigation/>
        </NavigationContainer>
    );
}


