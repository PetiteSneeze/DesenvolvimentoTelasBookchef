import { useState, useEffect } from "react";
import { Text, View, TouchableOpacity, StyleSheet, ImageBackground, Image, ScrollView, ActivityIndicator } from "react-native";
import { Asset } from 'expo-asset';
import { router } from "expo-router";

const backgroundImage = require('../../assets/images/rr.jpg');

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
        <Text style={styles.subTitle}>A sua receita</Text>

        <Text style={styles.welcomeMessage}>
          Bem-vindo(a) ao BookChef! Aqui você pode explorar e adicionar suas receitas favoritas.
        </Text>

        <ScrollView contentContainerStyle={styles.scrollMosaicContainer}>
          <View style={styles.mosaicContainer}>
            {recipesImages.map((item) => (
              <View key={item.id} style={styles.imageWrapper}>
                <Image source={item.image} style={styles.mosaicImage} />
              </View>
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
  welcomeMessage: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
    paddingHorizontal: 30,
    marginBottom: 20,
    fontStyle: 'italic',
    lineHeight: 24,
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  overlayContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'rgba(0, 0, 0, 0.6)', 
    paddingVertical: 20,
    width: '100%',
  },
  mainTitle: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 50,
    textAlign: 'center',
    letterSpacing: 1,
  },
  subTitle: {
    fontSize: 20,
    color: '#ffefd5',
    fontWeight: '300',
    marginBottom: 30,
    textAlign: 'center',
    fontStyle: 'italic',
  },
  scrollMosaicContainer: {
    flexGrow: 1,
  },
  mosaicContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap', 
    justifyContent: 'space-between', 
    paddingHorizontal: 10,
  },
  imageWrapper: {
    width: '47%',
    marginBottom: 15,
    borderRadius: 10,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  mosaicImage: {
    width: '100%',
    height: 150,
    borderRadius: 10,
  },
  button: {
    backgroundColor: '#ff6347', 
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 25,
    alignItems: 'center',
    width: '80%',
    marginTop: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 5,
    elevation: 3,
  },
  buttonText: {
    fontSize: 18,
    color: '#fff', 
    fontWeight: 'bold',
  },
});
