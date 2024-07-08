import React from 'react';
import { View, Text, Image, TextInput, Button, TouchableOpacity } from 'react-native';
import { styles } from './styles';


export default function Logado() {
    return (
        <View style={styles.conta}>
            <Image source={require('../../assets/Games.png')} style={styles.imgProfile}></Image>
            <Text style={styles.nome}>Maria</Text>
            <TouchableOpacity >
                <Text style={styles.sair}>Sair</Text>
            </TouchableOpacity>
        </View>
    )
}