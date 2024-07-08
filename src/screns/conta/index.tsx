import React from 'react';
import { View, Text, Image, TextInput, Button, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import Cadastro from '../cadastro/index';
import Logado from '../logado/index';

export default function Conta({ navigation }) {

    const navigateToPagina = (pagina) => {
        navigation.navigate(pagina);
      };


    return (
        <View style={styles.conta}>
            <TouchableOpacity >
                <Text style={styles.sair} onPress={() =>{navigateToPagina(Logado)}}>Entrar</Text>
            </TouchableOpacity>
            <TouchableOpacity >
                <Text style={styles.sair} onPress={() =>{navigateToPagina(Cadastro)}}>Cadastrar</Text>
            </TouchableOpacity>
        </View>
    )
}