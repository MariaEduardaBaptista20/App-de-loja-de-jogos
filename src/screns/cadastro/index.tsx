import React, { useState } from 'react';
import { View, Image, Button, StyleSheet, Alert, TextInput, Text, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { styles } from './styles';



  export default function Cadastro() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
        // Verificar se 'uri' está presente em 'assets[0]'
        if (result.assets && result.assets.length > 0 && result.assets[0].uri) {
          setSelectedImage(result.assets[0].uri);
        } else {
          Alert.alert('Aviso', 'A imagem selecionada não tem uma URI válida.');
        }
      } else {
        Alert.alert('Aviso', 'Você não selecionou nenhuma imagem.');
      }
    };

  function ImageViewer({ placeholderImageSource, selectedImage }) {
    const imageSource = selectedImage  ? { uri: selectedImage } : placeholderImageSource;
  
    return <Image source={imageSource} style={styles.image} />;
  }

  return (
    <View style={styles.login}>
     
      <View style={styles.image}>
        {selectedImage ? (
          <Image source={{ uri: selectedImage }} style={styles.image} />
        ) : (
          <Image source={require('../../assets/Games.png')} style={styles.image} />
        )}
      </View> 
      <Button title="Escolher Foto (opicional)" onPress={pickImage} />
      <Text style={styles.text}>Nome:</Text>
      <TextInput placeholder='Nome' style={styles.textInput}></TextInput>
      <Text style={styles.text}>Senha:</Text>
      <TextInput placeholder='Senha' style={styles.textInput}></TextInput>
      <TouchableOpacity >
                <Text style={styles.cadastrar}>Cadastrar</Text>
            </TouchableOpacity>
    </View>
  );
};



