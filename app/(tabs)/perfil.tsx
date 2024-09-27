import { Text, View, TouchableOpacity, StyleSheet, TextInput } from "react-native";
import { useState } from "react";
import { router } from "expo-router";

export default function Perfil() {
    const sair =()=>{
        router.push("/");
    }
    const editarUsuario = () => {
      router.push('../editarUsuario');

    }
    return (
        <View style={styles.container}>
      <Text style={styles.title}>Perfil</Text>
      
      <TouchableOpacity style={styles.button} onPress={sair}>
        <Text style={styles.buttonText}>Sair</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={editarUsuario}>
        <Text style={styles.buttonText}>Editar Usuário</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#f8f9fa", 
      padding: 20,
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
      elevation: 3, 
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