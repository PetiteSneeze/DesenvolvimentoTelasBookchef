import { useState } from "react";
import { Text, View, TouchableOpacity, StyleSheet, ImageBackground, Image, ScrollView } from "react-native";
import { router } from "expo-router";

// Importando a imagem de fundo
const backgroundImage = require('../../assets/images/kitchen_background_image.png');

// Simulando algumas imagens de receitas
const recipesImages = [
  { id: '1', image: require('../../assets/images/pizza.jpg') },
  { id: '2', image: require('../../assets/images/bolo.jpg') },
  { id: '3', image: require('../../assets/images/Suco-de-laranja-1.jpg') },
  { id: '4', image: require('../../assets/images/pao.jpg') },
  { id: '5', image: require('../../assets/images/pizza.jpg') },
  { id: '6', image: require('../../assets/images/bolo.jpg') },
  { id: '7', image: require('../../assets/images/Suco-de-laranja-1.jpg') },
  { id: '8', image: require('../../assets/images/pao.jpg') },
];

export default function TelaPrincipal() {
  const adicionarReceita = () => {
    router.push('/'); // Redireciona para a tela de adicionar receita
  };

  return (
    <ImageBackground source={backgroundImage} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.mainTitle}>BookChef</Text>
        <Text style={styles.subTitle1}>A sua Receita</Text>

        {/* Mosaico de fotos de receitas com scroll */}
        <ScrollView contentContainerStyle={styles.scrollMosaicContainer}>
          <View style={styles.mosaicContainer}>
            {recipesImages.map((item) => (
              <Image key={item.id} source={item.image} style={styles.mosaicImage} />
            ))}
          </View>
        </ScrollView>

        {/* Botão para adicionar receitas */}
        <TouchableOpacity style={styles.button} onPress={adicionarReceita}>
          <Text style={styles.buttonText}>Adicionar Receita</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  mainTitle: {
    fontSize: 32,
    fontFamily: 'Kiwi Maru',
    marginTop: 50, // Aumentado para mover o título mais para baixo
    color: "#333",
  },
  subTitle1: {
    fontSize: 15,
    fontWeight: '400',
    marginTop: 5, // Aumentado para mais espaço abaixo do título
    marginBottom: 20,
    color: "#333",
  },
  description: {
    fontSize: 20,
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
  },
  scrollMosaicContainer: {
    flexGrow: 1,
  },
  mosaicContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap', 
    justifyContent: 'space-between', 
    marginBottom: 20,
  },
  mosaicImage: {
    width: '45%', 
    height: 150,
    borderRadius: 10,
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#ff6347', 
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    width: '80%',
    marginTop: 20,
},
buttonText: {
    fontSize: 18,
    color: '#fff', 
    fontWeight: 'bold',
},
});
