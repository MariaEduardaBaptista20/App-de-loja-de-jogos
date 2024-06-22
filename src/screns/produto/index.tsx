import React, { useEffect } from 'react';
import { View, Text, Image, TextInput, Button } from 'react-native';
import { styles } from './styles';
import { Routes } from '../../routes/routes';
import { useRoute } from '@react-navigation/native';

import { AntDesign } from '@expo/vector-icons';



{/* <AntDesign name="heart" size={24} color="black" /> */}


type RouterParms = {
    produto: {
        id: number,
        img: string,
        titulo: string,
        valor: string,
        plataforma: string
    };
}



export default function Produto() {

    
    
    const route = useRoute();
    const { produto }  = route.params as RouterParms;
   

    useEffect(() => {
   
        console.log(produto.id)
    },[])

    return (
        <View style={styles.tela}>
            <Image source={{ uri: produto.img}} style={ styles.img}/>
            <Text style={ styles.plataforma}>Plataforma: {produto.plataforma}</Text>
            <Text style={ styles.titulo}>{produto.titulo}</Text>
            <Text style={ styles.preco}>{produto.valor}</Text>
            <View style={styles.botoes}>
          
            <Button title='Comprar'  ></Button>
            <AntDesign name="hearto" size={24} color="#FFF" />
            </View>
            
            

        </View>
    )
}