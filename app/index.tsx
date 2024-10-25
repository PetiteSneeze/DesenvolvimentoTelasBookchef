import { Text, View, TouchableOpacity, StyleSheet, TextInput, ImageBackground, TouchableWithoutFeedback, Keyboard } from "react-native";
import { useState } from "react";
import { Ionicons } from '@expo/vector-icons';
import { router } from "expo-router";
import { useUser } from "./context/userContext";
import UsuarioService from "./service/usuarioService";

const backgroundImage = require('../assets/images/kitchen_background_image.png');

export default function Index() {

  const { user, setUser } = useUser();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [senhaVisivel, setSenhaVisivel] = useState(false);
  const usuarioservice = new UsuarioService();

  const login = async () => {

    if (email && senha) {

        const usuario={
          id:0, 
          email:email,
          senha:senha
        }
        usuarioservice.validarLogin(usuario).then(
          (Response)=>{
            console.log(Response);
            const ret = Response.data;

            setUser({ email: email,
              senha: ret.senha,
              nome: ret.nome,
              id:ret.id,
              logado: true
         });

      router.push('/(tabs)/home');

          }
        ).catch(
          (error)=>{
            alert('Email ou senha inválidos!');
            console.log(error);
          }
        );


      let retorno = true;
      if (retorno) {

        setUser({ email: email,
                senha: senha,
                nome: "André",//trocar de acordo com a api
                id:1,//trocar de acordo com a api
                logado: true
           });

        router.push('./(tabs)/home');
      }
      else {
        alert('Email ou senha inválidos!');
      }
    }
    else {
       alert('Preencha todos os campos!');
    }
  }

  const cadastro = () => {
    router.push('/cadastro');
  }

  const toggleSenhaVisivel = () => {
    setSenhaVisivel(!senhaVisivel);
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ImageBackground source={backgroundImage} style={styles.background}>
        <View style={styles.container}>
          <Text style={styles.mainTitle}>BookChef</Text>
          <Text style={styles.subTitle}>A sua receita</Text>
          <Text style={styles.loginTitle}>Login</Text>

          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Email"
              placeholderTextColor="rgba(137, 137, 137, 0.65)"
              value={email}
              onChangeText={e => setEmail(e)}
            />
            <View style={styles.passwordContainer}>
              <TextInput
                style={styles.inputSenha}
                placeholder="Senha"
                placeholderTextColor="rgba(137, 137, 137, 0.65)"
                secureTextEntry={!senhaVisivel}
                value={senha}
                onChangeText={e => setSenha(e)}
              />
              <TouchableOpacity onPress={toggleSenhaVisivel} style={styles.eyeIcon}>
                <Ionicons name={senhaVisivel ? "eye-off" : "eye"} size={24} color="rgba(137, 137, 137, 0.65)" />
              </TouchableOpacity>
            </View>
            <TouchableOpacity>
              <Text style={styles.forgotPassword}>Esqueci a senha</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.button} onPress={login}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={cadastro}>
            <Text style={styles.buttonText}>Cadastre-se</Text>
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
    justifyContent: 'center',
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
  loginTitle: {
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
  passwordContainer: {
    width: '90%',
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'rgba(137, 137, 137, 0.65)',
    borderWidth: 3,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
    backgroundColor: "rgba(217, 217, 217, 0.65)",
    marginBottom: 15,
  },
  inputSenha: {
    flex: 1,
    fontSize: 16,
    color: "#333",
  },
  eyeIcon: {
    marginLeft: 10,
  },
  forgotPassword: {
    fontSize: 12,
    color: "#007BFF",
    textDecorationLine: 'underline',
    marginBottom: 15,
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

