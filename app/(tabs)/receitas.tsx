import { Text, View, StyleSheet, FlatList, ImageBackground, TouchableOpacity } from "react-native";
import React, { useState } from "react";

const backgroundImage = require('../../assets/images/kitchen_background_image.png');

export default function Receitas() {
    // Simulando as receitas cadastradas
    const [receitas, setReceitas] = useState([
        { id: '1', nome: 'Pizza de Calabresa', descricao: 'Uma deliciosa pizza com calabresa e queijo' },
        { id: '2', nome: 'Bolo de Cenoura', descricao: 'Bolo fofo com cobertura de chocolate' },
        { id: '3', nome: 'Suco de Laranja', descricao: 'Suco natural de laranja fresco' },
        { id: '4', nome: 'Pão Caseiro', descricao: 'Pão macio e caseiro, feito na hora' }
    ]);

    // Função para renderizar cada receita
    const renderItem = ({ item }) => (
        <View style={styles.recipeContainer}>
            <Text style={styles.recipeTitle}>{item.nome}</Text>
            <Text style={styles.recipeDescription}>{item.descricao}</Text>
        </View>
    );

    // Função para adicionar uma nova receita (exemplo de ação ao clicar)
    const adicionarReceita = () => {
        console.log("Adicionar nova receita");
        
    };

    return (
        <ImageBackground source={backgroundImage} style={styles.background}>
            <View style={styles.overlayContainer}>
                <Text style={styles.mainTitle}>BookChef</Text>
                <Text style={styles.subTitle1}>A sua Receita</Text>
                
                <Text style={styles.title}>Receitas</Text>
                <Text style={styles.subtitle}>Delícias para você explorar</Text>

                {/* Lista de receitas */}
                <FlatList
                    data={receitas}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                    style={styles.list}
                />

                {/* Botão para adicionar receita */}
                <TouchableOpacity style={styles.addButton} onPress={adicionarReceita}>
                    <Text style={styles.addButtonText}>Adicionar Receita</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
        alignItems: 'center',
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
        fontWeight: "bold",
        color: "#fff", 
        marginTop: 50, 
        marginBottom: 5,
        textAlign: 'center',
    },
    subTitle1: {
        fontSize: 18, 
        color: "#ddd", 
        marginBottom: 30, 
        textAlign: 'center',
    },
    title: {
        fontSize: 28, 
        fontWeight: "bold",
        color: "#fff", 
        marginTop: 20, 
        marginBottom: 10,
        textAlign: 'center',
    },
    subtitle: {
        fontSize: 18,
        color: "#ddd", 
        marginBottom: 20,
        textAlign: 'center',
    },
    list: {
        width: '100%',
    },
    recipeContainer: {
        backgroundColor: '#fff',
        padding: 15,
        marginBottom: 10,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 3, 
    },
    recipeTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
    recipeDescription: {
        fontSize: 14,
        color: '#777',
        marginTop: 5,
    },
    addButton: {
        backgroundColor: '#ff6347', 
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        width: '80%',
        marginTop: 20,
    },
    addButtonText: {
        fontSize: 18,
        color: '#fff', 
        fontWeight: 'bold',
    },
});
