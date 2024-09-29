import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ImageBackground, ScrollView } from 'react-native';

const backgroundImage = require('../../assets/images/kitchen_background_image.png');

export default function PesquisaReceitas() {
    const [searchQuery, setSearchQuery] = useState('');

    const pesquisarReceitas = () => {
        console.log(`Buscando receitas com: ${searchQuery}`);
    };

    return (
        <ImageBackground source={backgroundImage} style={styles.background}>
            <ScrollView contentContainerStyle={styles.overlayContainer}>
                
                <Text style={styles.mainTitle}>BookChef</Text>
                <Text style={styles.subTitle1}>A sua Receita</Text>

                {/* Título da Página */}
                <Text style={styles.pageTitle}>Pesquisar Receitas</Text>

                {/* Campo de Pesquisa */}
                <View style={styles.searchContainer}>
                    <Text style={styles.searchLabel}>Digite o nome da receita:</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Ex: Pizza, Bolo..."
                        placeholderTextColor="#aaa"
                        value={searchQuery}
                        onChangeText={setSearchQuery}
                    />
                </View>

                {/* Botão de Pesquisa */}
                <TouchableOpacity style={styles.button} onPress={pesquisarReceitas}>
                    <Text style={styles.buttonText}>Pesquisar</Text>
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
        flexGrow: 1,
        justifyContent: 'flex-start', // Alinha o conteúdo ao início
        alignItems: 'center',
        padding: 20,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    mainTitle: {
        fontSize: 36,
        fontWeight: 'bold',
        color: '#fff',
        marginTop: 20, // Reduzido para mover o título mais para cima
        marginBottom: 5,
        textAlign: 'center',
    },
    subTitle1: {
        fontSize: 18,
        color: '#ddd',
        marginBottom: 30,
        textAlign: 'center',
    },
    pageTitle: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 40,
        textAlign: 'center',
    },
    searchContainer: {
        width: '90%',
        marginBottom: 20,
    },
    searchLabel: {
        fontSize: 18,
        color: '#fff',
        marginBottom: 10,
    },
    input: {
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 8,
        fontSize: 16,
        color: '#333',
        borderColor: '#ccc',
        borderWidth: 1,
    },
    button: {
        backgroundColor: '#ff6347',
        paddingVertical: 15,
        paddingHorizontal: 50,
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

