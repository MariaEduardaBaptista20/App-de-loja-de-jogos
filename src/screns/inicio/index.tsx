import React, { useEffect, useState } from "react";
import { Text, Image, View, Pressable, ScrollView } from "react-native";
import { styles } from "./styles";
import data from "../../db/data";

interface produtoDb{
    id: number,
    img: string,
    titulo: string,
    valor: string,
    plataforma: string
}
export default function Inicio() {
const [parametroBusca, setParametroBusca] = useState<produtoDb[]>([]);
const [produtos, setProdutos] = useState<JSX.Element[]>([]);




function mostrarProdutos(plataforma: string) {
    if (parametroBusca.length == 0) {
        setParametroBusca(data)
    } else if (plataforma == "") {
        setParametroBusca(data)
    } else {
        const dataFiltared = data.filter(produto => produto.plataforma === plataforma)
        setParametroBusca(dataFiltared)
    }
    console.log(parametroBusca);
    produtos.length = 0;
}





useEffect(() => {
    const produtosJSX = parametroBusca.map((objeto, index) => {
        return (
            <View key={index} style={styles.produto}>
                
                <Image source={{ uri: objeto.img }} style={styles.img}/>
                <View style={styles.containerTextoProduto}>
                <Text style={styles.produtoTitulo}>{objeto.titulo}</Text>
                <Text style={styles.produtoValor}>{objeto.valor}</Text>
                </View>
            </View>
        );
    });
    setProdutos(produtosJSX);
}, [parametroBusca]);

useEffect(() => {
    mostrarProdutos("")
    console.log(parametroBusca)
},[])


    return (
        
        <View style={styles.inicio}>
            <ScrollView>
            <Text style={styles.titulo}>ZonaGamer</Text>
            <Image source={require('../../assets/banner.png')} style={styles.banner}/>
            <Text style={styles.fraseBanner}>Prepare-se para a aventura e desafie seus limites neste emocionante mundo de jogos!</Text>
            <View style={styles.produtoSessao}>
            <Text style={styles.tituloButtonsFiltros}>Plataformas</Text>
            <View style={styles.divButtonsFiltro}>
                <Pressable><Text onPress={() => mostrarProdutos("")} style={styles.buttonFiltro}>Todas</Text></Pressable>
                <Pressable><Text onPress={() => mostrarProdutos("PS5")} style={styles.buttonFiltro}>PS5</Text></Pressable>
                <Pressable><Text onPress={() => mostrarProdutos("XBOX SERIES X")} style={styles.buttonFiltro}>XBOX SERIES X</Text></Pressable>
                <Pressable><Text onPress={() => mostrarProdutos("NINTENDO SWITCH")} style={styles.buttonFiltro}>NINTENDO SWITCH</Text></Pressable>
                <Pressable><Text onPress={() => mostrarProdutos("PS4")} style={styles.buttonFiltro}>PS4</Text></Pressable>

            </View>
            
                {produtos}
            </View>
</ScrollView>
        </View>
    )

}