import { Image } from 'react-native';
import  Carrinho  from '../../screns/carrinho/index';
import  Inicio  from '../../screns/inicio/index';
import Favoritos from '../../screns/favoritos';
import Conta from '../../screns/conta/index';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ProdutoRouter } from '../../routes/produtosRoutes/index';
import { LoginNavigation } from '../../routes/loginNavigation/index';



const Tab = createBottomTabNavigator<RootTabParamList>();

export type RootTabParamList = {
	Inicio: {};
	Carrinho: {};
  Favoritos: {};
  Conta: {};
}

export function BottomTabRoutes() {
	return (
		<Tab.Navigator
			screenOptions={{
				headerShown: false,
				tabBarStyle: { backgroundColor: '#000'},
				tabBarInactiveTintColor: '#aaa',
				tabBarActiveTintColor: '#fff'
			}}
		>
			<Tab.Screen
		
				name="Inicio"
				component={ProdutoRouter}
			/>
			<Tab.Screen
		
				name="Favoritos"
				component={Favoritos}
			/>

<Tab.Screen
		
				name="Carrinho"
				component={Carrinho}
			/>

<Tab.Screen
			
				name="Conta"
				component={LoginNavigation}
			/>
		
		</Tab.Navigator>
    
	);
}