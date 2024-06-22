import React, { useEffect, useState } from "react";
import { Text, Image, View, Pressable, ScrollView, TouchableOpacity, TextInput } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { styles } from "./styles";
import data from "../../db/data";
import { Feather } from '@expo/vector-icons';


interface produtoDb{
    id: number,
    img: string,
    titulo: string,
    valor: string,
    plataforma: string
}
export default function Inicio({ navigation }) {
const [parametroBusca, setParametroBusca] = useState<produtoDb[]>([]);

const [produtos, setProdutos] = useState<JSX.Element[]>([]);
const [pesquisa, setPesquisa] = useState<string>("")
const [plataformaPesquisa, setPlataformaPesquisa] = useState<string>("")




function mostrarProdutos(plataforma: string) {
    console.log(plataforma);
    setPlataformaPesquisa(plataforma)
    if (parametroBusca.length == 0 && pesquisa == "" || plataforma == "" && pesquisa == "") {
        setParametroBusca(data)
        console.log(parametroBusca)
    } else if (parametroBusca.length == 0  && pesquisa !== "" || plataforma == "" && pesquisa !== "") {
        const dataPesquisaFiltared = data.filter(produto => produto.titulo.includes(pesquisa));
        console.log(parametroBusca)
            setParametroBusca(dataPesquisaFiltared)
    
    
    } else if(plataforma !== "") {
        const dataFiltared = data.filter(produto => produto.plataforma == plataforma);
        const dataPesquisaFiltared = dataFiltared.filter(produto => produto.titulo.includes(pesquisa));


        if(pesquisa == ""){
            
        setParametroBusca(dataFiltared)
        console.log(parametroBusca)
        } else{
           
            setParametroBusca(dataPesquisaFiltared)
            console.log(parametroBusca)
        }
    }
    
}


const navigateToProduto = (produto: object) => {
    navigation.navigate('Produto', { produto });
  };


useEffect(() => {
    if(pesquisa !== ""){
    const produtosJSX = parametroBusca.map((objeto, index) => {
    
        return (
            <TouchableOpacity key={index} style={styles.produto} onPress={() => navigateToProduto(objeto)}>
                
                <Image source={{ uri: objeto.img }} style={styles.img}/>
                <View style={styles.containerTextoProduto}>
                <Text style={styles.produtoTitulo}>{objeto.titulo}</Text>
                <Text style={styles.produtoValor}>{objeto.valor}</Text>
                </View>

            </TouchableOpacity>
        );
    });
    setProdutos(produtosJSX);
}else{
    const dataPesquisaFiltared = parametroBusca.filter(produto => produto.titulo.includes(pesquisa));
    const produtosJSX = dataPesquisaFiltared.map((objeto, index) => {
    
        return (
            <TouchableOpacity key={index} style={styles.produto} onPress={() => navigateToProduto(objeto)}>
                
                <Image source={{ uri: objeto.img }} style={styles.img}/>
                <View style={styles.containerTextoProduto}>
                <Text style={styles.produtoTitulo}>{objeto.titulo}</Text>
                <Text style={styles.produtoValor}>{objeto.valor}</Text>
                </View>

            </TouchableOpacity>
        );
    });
    setProdutos(produtosJSX);
}
}, [parametroBusca]);

useEffect(() => {
    mostrarProdutos("")
    console.log(parametroBusca)
},[])



const handleInputChange = (e) => {
    console.log(e)
    setPesquisa(e.target.value)
  }


    return (
        
        <View style={styles.inicio}>
            <ScrollView>
                <View style={styles.body}>
            <Text style={styles.titulo}>ZonaGamer</Text>
          
            <Image source={require('../../assets/banner.png')} style={styles.banner}/>
            <Text style={styles.fraseBanner}>Prepare-se para a aventura e desafie seus limites neste emocionante mundo de jogos!</Text>
            <View style={styles.produtoSessao}>
                <View style={styles.divTextInput}>
            <TextInput value={pesquisa} inputMode="search" placeholder="Pesquisar" onChange={handleInputChange} placeholderTextColor={'#bcbcbc'} style={styles.textInput} ></TextInput>
            <Feather name="search" size={24} color="black" style={styles.lupa} onPress={() => mostrarProdutos(plataformaPesquisa)}/>
            </View>
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
            </View>
</ScrollView>
        </View>
    )

}