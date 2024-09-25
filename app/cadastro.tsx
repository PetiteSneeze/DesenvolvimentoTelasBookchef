import { Text, View, TouchableOpacity, StyleSheet, TextInput, ImageBackground } from "react-native";
import { useState } from "react";
import { router } from "expo-router";

export default function Cadastro() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const cadastro = () => {
    router.push('/');
  }

  return (
    <ImageBackground
    source={require('../assets/images/kitchen_background_image.png')}
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.title}>CADASTRO</Text>
        
        <View style={styles.inputContainer}>
          <TextInput 
            style={styles.input} 
            placeholder="Email" 
            placeholderTextColor="#888"
            value={email}
            onChangeText={e => setEmail(e)}
          />
          <TextInput 
            style={styles.input} 
            placeholder="Senha" 
            placeholderTextColor="#888"
            secureTextEntry={true}
            value={senha}
            onChangeText={e => setSenha(e)}
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={cadastro}>
          <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover', // A imagem cobrirá toda a tela
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Adiciona uma leve transparência no fundo dos campos
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
  },
  inputContainer: {
    width: '100%',
    alignItems: "center",
  },
  input: {
    width: '90%',
    borderColor: '#CCC',
    borderWidth: 1,
    marginBottom: 15,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
    backgroundColor: "#fff",
    fontSize: 16,
    color: "#333",
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3, // Para Android
  },
  button: {
    backgroundColor: '#4CAF50',
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 40,
    marginTop: 15,
    width: '60%',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: "bold",
  },
});
