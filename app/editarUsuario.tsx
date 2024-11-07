import { useState, useEffect } from "react";
import { Text, View, TouchableOpacity, TextInput, StyleSheet, GestureResponderEvent, ImageBackground, TouchableWithoutFeedback, Keyboard, Alert } from "react-native";
import { router, useLocalSearchParams } from "expo-router";
import { useUser } from "./context/userContext";
import UsuarioService from "./service/usuarioService"; 
const backgroundImage = require('../assets/images/rr.jpg');
const usuarioService = new UsuarioService(); 

export default function EditarUsuario() {
  const { nome: nomeParam, email: emailParam, id: idParam } = useLocalSearchParams();
  const { setUser } = useUser();

  const [nome, setNome] = useState(typeof nomeParam === 'string' ? nomeParam : nomeParam?.[0] || '');
  const [email, setEmail] = useState(typeof emailParam === 'string' ? emailParam : emailParam?.[0] || '');
  const [senha, setSenha] = useState('');
  const userId = idParam ? Number(idParam) : 0;

  const atualizarUsuario = async (event: GestureResponderEvent): Promise<void> => {
    try {
      const usuarioAtualizado = { id: userId, nome, email, senha };
      await usuarioService.alterar(usuarioAtualizado); 

      setUser((prevUser) => ({
        ...prevUser,
        nome,
        email,
        senha,
      }));

      Alert.alert("Sucesso", "Usuário atualizado com sucesso!");
      router.push('/perfil'); 
    } catch (error) {
      console.error("Erro ao atualizar usuário:", error);
      Alert.alert("Erro", "Não foi possível atualizar o usuário.");
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ImageBackground source={backgroundImage} style={styles.background}>
        <View style={styles.container}>
          <Text style={styles.mainTitle}>BookChef</Text>
          <Text style={styles.subTitle}>A sua Receita</Text>
          <Text style={styles.Title}>Editar Usuário</Text>

          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Nome"
              placeholderTextColor="rgba(137, 137, 137, 0.65)"
              value={nome}
              onChangeText={setNome}
            />
            <TextInput
              style={styles.input}
              placeholder="Email"
              placeholderTextColor="rgba(137, 137, 137, 0.65)"
              value={email}
              editable={false} 
            />
            <TextInput
              style={styles.input}
              placeholder="Nova Senha"
              placeholderTextColor="rgba(137, 137, 137, 0.65)"
              secureTextEntry={true}
              value={senha}
              onChangeText={setSenha}
            />
          </View>

          <TouchableOpacity style={styles.button} onPress={atualizarUsuario}>
            <Text style={styles.buttonText}>Salvar</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </TouchableWithoutFeedback>
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
    fontSize: 36,
    fontFamily: 'Kiwi Maru',
    marginBottom: 5,
    marginTop: -100,
    color: "#333",
  },
  subTitle: {
    fontSize: 18,
    fontFamily: 'Kiwi Maru',
    marginBottom: 80,
    color: "#333",
  },
  Title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: "#333",
  },
  inputContainer: {
    width: '100%',
    alignItems: "center",
  },
  input: {
    width: '90%',
    borderColor: 'rgba(137, 137, 137, 0.65)',
    borderWidth: 3,
    marginBottom: 15,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
    backgroundColor: "rgba(217, 217, 217, 0.65)",
    fontSize: 16,
    color: "#333",
  },
  button: {
    backgroundColor: 'rgba(217, 217, 217, 0.8)',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 40,
    marginTop: 15,
    width: '60%',
    alignItems: 'center',
    borderColor: 'rgba(137, 137, 137, 0.8)',
    borderWidth: 3,
  },
  buttonText: {
    fontSize: 20,
    color: '#000',
    fontFamily: 'Kiwi Maru',
  },
});
