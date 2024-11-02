import { Text, View, TouchableOpacity, StyleSheet, TextInput, ImageBackground, TouchableWithoutFeedback, Keyboard } from "react-native";
import { useState } from "react";
import { router } from "expo-router";
import UsuarioService from "./service/usuarioService";

const backgroundImage = require('../assets/images/rr.jpg');  

export default function Cadastro() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [nome, setNome] = useState('');
  const usuarioservice = new UsuarioService();

  const cadastro = async () => {
    const usuario= {
      id:0,
      nome: nome,
      email: email,
      senha: senha,

    }
    usuarioservice.salvar(usuario).then(

      (response) => {
        alert("Cadastro realizado com sucesso!");
        router.push("/");
      }
    ).catch(
        (error)=>{
          alert("Erro ao cadastrar");
          console.log(error);
        }
    );

   
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ImageBackground source={backgroundImage} style={styles.background}>
        <View style={styles.container}>
          <Text style={styles.mainTitle}>BookChef</Text>
          <Text style={styles.subTitle}>Cadastro de Usuário</Text>
          
          <View style={styles.inputContainer}>
            <TextInput 
              style={styles.input} 
              placeholder="Nome" 
              placeholderTextColor="rgba(137, 137, 137, 0.65)"
              value={nome}
              onChangeText={e => setNome(e)}
            />
            <TextInput 
              style={styles.input} 
              placeholder="Email" 
              placeholderTextColor="rgba(137, 137, 137, 0.65)"
              value={email}
              onChangeText={e => setEmail(e)}
            />
            <TextInput 
              style={styles.input} 
              placeholder="Senha" 
              placeholderTextColor="rgba(137, 137, 137, 0.65)"
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
    fontSize: 16,
    color: '#000', 
    fontFamily: 'Kiwi Maru', 
  },
});
