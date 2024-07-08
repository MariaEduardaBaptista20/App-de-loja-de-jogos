import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import  Conta  from '../../screns/conta/index';
import Logado from '../../screns/logado/index';
import Cadastro from '../../screns/cadastro/index';

const Stack = createNativeStackNavigator();

export function LoginNavigation() {
  return (
   
      <Stack.Navigator initialRouteName="Conta/Cadastro">
        <Stack.Screen name="Conta/Cadastro" component={Conta} options={{ headerShown: false }}/>
        <Stack.Screen name="Logado" component={Logado} options={{ headerStyle:{backgroundColor: 'black'}, headerTintColor: "white" }}/>
        <Stack.Screen name="Cadastro" component={Cadastro} options={{ headerStyle:{backgroundColor: 'black'}, headerTintColor: "white" }}/>
      </Stack.Navigator>
   
  );
}

export default LoginNavigation;