import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import  Inicio  from '../../screns/inicio/index';
import Produto from '../../screns/produto/index';
import Conta from '../../screns/conta/index';
import  Carrinho  from '../../screns/carrinho/index';

const Stack = createNativeStackNavigator();

export function ProdutoRouter() {
  return (
   
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Inicio" component={Inicio} options={{ headerShown: false }}/>
        <Stack.Screen name="Produto" component={Produto} />
        
      </Stack.Navigator>
   
  );
}

export default ProdutoRouter;