import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ImageBackground, ScrollView, FlatList } from 'react-native';

const backgroundImage = require('../../assets/images/rr.jpg');

interface Recipe {
    id: string;
    name: string;
    description: string;
}

const recipesDatabase: Recipe[] = [
    { id: '1', name: 'Pizza', description: 'Deliciosa pizza de queijo' },
    { id: '2', name: 'Bolo de Chocolate', description: 'Bolo fofinho de chocolate' },
    { id: '5', name: 'Pizza de Frango', description: 'Deliciosa pizza de frango com cebola' },
    { id: '6', name: 'Bolo de Cenoura', description: 'Bolo fofo de cenoura' },
    { id: '7', name: 'Suco de Laranja', description: 'Suco natural de laranja' },
    { id: '3', name: 'Suco de Laranja', description: 'Suco natural de laranja' },
    { id: '4', name: 'Pão Caseiro', description: 'Pão caseiro fresquinho' },
    { id: '8', name: 'Pão de Queijo', description: 'Pão de queijo crocante' },
    { id: '9', name: 'Pizza de Calabresa', description: 'Deliciosa pizza de calabresa e queijo' },
    { id: '10', name: 'Bolo de Cenoura', description: 'Bolo fofo de cenoura' },
];

export default function PesquisaReceitas() {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState<Recipe[]>([]); 

    const pesquisarReceitas = () => {
       
        const filteredRecipes = recipesDatabase.filter(recipe =>
            recipe.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setSearchResults(filteredRecipes);
    };

    const salvarReceita = (id: string) => {
        console.log(`Receita ${id} salva!`);
    };

    return (
        <ImageBackground source={backgroundImage} style={styles.background}>
            <ScrollView contentContainerStyle={styles.overlayContainer}>
                
                <Text style={styles.mainTitle}>BookChef</Text>
                <Text style={styles.subTitle1}>A sua Receita</Text>

                <Text style={styles.pageTitle}>Pesquisar Receitas</Text>

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

                <TouchableOpacity style={styles.button} onPress={pesquisarReceitas}>
                    <Text style={styles.buttonText}>Pesquisar</Text>
                </TouchableOpacity>

                
                {searchResults.length > 0 && (
                    <View style={styles.resultsContainer}>
                        <Text style={styles.resultsTitle}>Resultados:</Text>
                        {searchResults.map((recipe) => (
                            <View key={recipe.id} style={styles.recipeCard}>
                                <Text style={styles.recipeName}>{recipe.name}</Text>
                                <Text style={styles.recipeDescription}>{recipe.description}</Text>
                                <TouchableOpacity
                                    style={styles.saveButton}
                                    onPress={() => salvarReceita(recipe.id)}
                                >
                                    <Text style={styles.saveButtonText}>Salvar Receita</Text>
                                </TouchableOpacity>
                            </View>
                        ))}
                    </View>
                )}

                {searchResults.length === 0 && searchQuery !== '' && (
                    <Text style={styles.noResultsText}>Nenhuma receita encontrada.</Text>
                )}
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
        justifyContent: 'flex-start', 
        alignItems: 'center',
        padding: 20,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    mainTitle: {
        fontSize: 36,
        fontWeight: 'bold',
        color: '#fff',
        marginTop: 20, 
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
    resultsContainer: {
        width: '90%',
        marginTop: 30,
    },
    resultsTitle: {
        fontSize: 22,
        color: '#fff',
        fontWeight: 'bold',
        marginBottom: 15,
    },
    recipeCard: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 15,
        marginBottom: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
    },
    recipeName: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 5,
    },
    recipeDescription: {
        fontSize: 14,
        color: '#666',
        marginBottom: 10,
    },
    saveButton: {
        backgroundColor: '#32CD32',
        padding: 10,
        borderRadius: 8,
        alignItems: 'center',
    },
    saveButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    noResultsText: {
        color: '#fff',
        fontSize: 18,
        marginTop: 20,
    },
});