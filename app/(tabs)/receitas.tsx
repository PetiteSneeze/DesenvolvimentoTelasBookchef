import { Text, View, StyleSheet, FlatList, ImageBackground, TouchableOpacity, Alert } from "react-native";
import React, { useEffect } from "react";
import { useReceitas } from "../context/receitasContext";
import { useUser } from "../context/userContext";
import { router } from "expo-router";

const backgroundImage = require('../../assets/images/rr.jpg');

export default function Receitas() {
    const { receitas, buscarReceitasDoUsuario, excluirReceita } = useReceitas();
    const { user } = useUser();

    useEffect(() => {
        if (user?.id) {
            buscarReceitasDoUsuario(user.id);
        }
    }, [user]);

    const handleEdit = (receita) => {
        console.log("Editando receita:", receita.id);
        router.push({
            pathname: '/cadastroReceita',
            params: {
                id: receita.id,
                nome: receita.nome,
                descricao: receita.descricao,
                ingredientes: receita.ingredientes,
                modoPreparo: receita.modoPreparo,
                imagemUrl: receita.imagemUrl,
            },
        });
    };

    const handleDelete = (id) => {
        console.log("Excluindo receita:", id);
        Alert.alert(
            "Confirmar Exclusão",
            "Você tem certeza de que deseja excluir esta receita?",
            [
                { text: "Cancelar", style: "cancel" },
                {
                    text: "Excluir",
                    style: "destructive",
                    onPress: async () => {
                        try {
                            await excluirReceita(id);
                            if (user?.id) {
                                buscarReceitasDoUsuario(user.id); 
                            }
                        } catch (error) {
                            console.error("Erro ao excluir receita:", error);
                        }
                    }
                }
            ]
        );
    };

    const renderItem = ({ item }) => (
        <View style={styles.recipeContainer}>
            <Text style={styles.recipeTitle}>{item.nome}</Text>
            <Text style={styles.recipeDescription}>{item.descricao}</Text>
            <View style={styles.actionButtons}>
               
            </View>
        </View>
    );

    const adicionarReceita = () => {
        router.push('/cadastroReceita');
    };

    return (
        <ImageBackground source={backgroundImage} style={styles.background}>
            <View style={styles.overlayContainer}>
                <Text style={styles.mainTitle}>BookChef</Text>
                <Text style={styles.subTitle1}>A sua Receita</Text>
                <Text style={styles.title}>Receitas</Text>

                <FlatList
                    data={receitas}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id.toString()}
                    style={styles.list}
                />

                <TouchableOpacity style={styles.addButton} onPress={adicionarReceita}>
                    <Text style={styles.addButtonText}>Adicionar Receita</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    );
}

// Estilos
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
    actionButtons: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 10,
    },
    editButton: {
        backgroundColor: '#1E90FF',
        padding: 10,
        borderRadius: 5,
    },
    deleteButton: {
        backgroundColor: '#FF6347',
        padding: 10,
        borderRadius: 5,
    },
    actionText: {
        color: '#fff',
        fontWeight: 'bold',
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
