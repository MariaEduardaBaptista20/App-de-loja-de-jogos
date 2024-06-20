import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { BottomTabRoutes } from './bottonTabNavigation/index';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import  Inicio  from '../screns/inicio/index';
import Shop from '../screns/shop';
import Conta from '../screns/conta/index';
import  Carrinho  from '../screns/carrinho/index';
import { ProdutoRouter } from '../routes/produtosRoutes/index'


export const Routes = () => {
	return <NavigationContainer>
		
		<BottomTabRoutes/>
	
	</NavigationContainer>
}