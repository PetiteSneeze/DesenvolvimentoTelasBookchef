import { useState, useEffect } from "react";
import { Text, View, TouchableOpacity, StyleSheet, ImageBackground, Image, ScrollView, ActivityIndicator } from "react-native";
import { Asset } from 'expo-asset';
import { router } from "expo-router";

const backgroundImage = require('../../assets/images/kitchen_background_image.png');

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
  const [imageLoaded, setImageLoaded] = useState(false);

  const preloadImage = async () => {
    await Asset.loadAsync(backgroundImage);
    setImageLoaded(true);
  };

  useEffect(() => {
    preloadImage();
  }, []);

  const adicionarReceita = () => {
    router.push('/cadastroReceita'); 
  };

  if (!imageLoaded) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#fff" />
      </View>
    );
  }

  return (
    <ImageBackground source={backgroundImage} style={styles.background}>
      <View style={styles.overlayContainer}>
        
        <Text style={styles.mainTitle}>BookChef</Text>
        <Text style={styles.subTitle}>A sua Receita</Text>

       
        <ScrollView contentContainerStyle={styles.scrollMosaicContainer}>
          <View style={styles.mosaicContainer}>
            {recipesImages.map((item) => (
              <Image key={item.id} source={item.image} style={styles.mosaicImage} />
            ))}
          </View>
        </ScrollView>

        <TouchableOpacity style={styles.button} onPress={adicionarReceita}>
          <Text style={styles.buttonText}>Adicionar Receita</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000', 
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  overlayContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
    padding: 20,
    width: '100%',
  },
  mainTitle: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 50,
    textAlign: 'center',
  },
  subTitle: {
    fontSize: 18,
    color: '#fff',
    marginBottom: 20,
    textAlign: 'center',
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