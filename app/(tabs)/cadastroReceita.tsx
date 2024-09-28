import { useState } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ImageBackground, ScrollView } from "react-native";

// Importando a imagem de fundo
const backgroundImage = require('../../assets/images/kitchen_background_image.png');

export default function CadastroReceita() {
    // Estados para os campos de receita
    const [nomeReceita, setNomeReceita] = useState('');
    const [descricao, setDescricao] = useState('');
    const [ingredientes, setIngredientes] = useState('');
    const [modoPreparo, setModoPreparo] = useState('');

    // Função para lidar com o cadastro
    const handleCadastro = () => {
        // Aqui você pode adicionar a lógica para salvar a receita, como enviar para uma API
        console.log('Cadastro de receita:', { nomeReceita, descricao, ingredientes, modoPreparo });
    };

    return (
        <ImageBackground source={backgroundImage} style={styles.background}>
            <ScrollView contentContainerStyle={styles.overlayContainer}>
                <Text style={styles.mainTitle}>Cadastrar Receita</Text>
                <Text style={styles.subTitle1}>Compartilhe suas delícias com o BookChef</Text>

                {/* Campo Nome da Receita */}
                <TextInput
                    style={styles.input}
                    placeholder="Nome da Receita"
                    placeholderTextColor="#aaa"
                    value={nomeReceita}
                    onChangeText={setNomeReceita}
                />

                {/* Campo Descrição */}
                <TextInput
                    style={styles.input}
                    placeholder="Descrição"
                    placeholderTextColor="#aaa"
                    value={descricao}
                    onChangeText={setDescricao}
                />

                {/* Campo Ingredientes */}
                <TextInput
                    style={styles.textArea}
                    placeholder="Ingredientes"
                    placeholderTextColor="#aaa"
                    value={ingredientes}
                    onChangeText={setIngredientes}
                    multiline={true}
                    numberOfLines={4}
                />

                {/* Campo Modo de Preparo */}
                <TextInput
                    style={styles.textArea}
                    placeholder="Modo de Preparo"
                    placeholderTextColor="#aaa"
                    value={modoPreparo}
                    onChangeText={setModoPreparo}
                    multiline={true}
                    numberOfLines={4}
                />

                {/* Botão para Cadastrar */}
                <TouchableOpacity style={styles.button} onPress={handleCadastro}>
                    <Text style={styles.buttonText}>Cadastrar Receita</Text>
                </TouchableOpacity>
            </ScrollView>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        resizeMode: 'cover',
    },
    overlayContainer: {
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        flexGrow: 1,
    },
    mainTitle: {
        fontSize: 36,
        fontWeight: "bold",
        color: "#fff",
        marginTop: 50,
        marginBottom: 20,
        textAlign: 'center',
    },
    subTitle1: {
        fontSize: 18,
        color: "#ddd",
        marginBottom: 30,
        textAlign: 'center',
    },
    input: {
        backgroundColor: '#fff',
        width: '90%',
        padding: 15,
        borderRadius: 10,
        marginBottom: 15,
    },
    textArea: {
        backgroundColor: '#fff',
        width: '90%',
        padding: 15,
        borderRadius: 10,
        marginBottom: 15,
        height: 100,
    },
    button: {
        backgroundColor: '#ff6347', // Tomate
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
