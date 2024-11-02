import { Text, View, StyleSheet, FlatList, ImageBackground, TouchableOpacity, Alert } from "react-native";
import React, { useEffect } from "react";
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { useReceitas } from "../context/receitasContext";
import { useUser } from "../context/userContext";
import { router } from "expo-router";

const backgroundImage = require('../../assets/images/rr.jpg');

// Tipagem para as rotas
type RootStackParamList = {
  Receitas: undefined;
  CadastroReceita: {
    id?: number;
    nome?: string;
    descricao?: string;
    ingredientes?: string;
    modoPreparo?: string;
    imagemUrl?: string;
    tipoReceita?: string;
  };
};

export default function Receitas() {
    const { receitas, buscarReceitasDoUsuario, excluirReceita } = useReceitas();
    const { user } = useUser();
    
    // Define a navegação com tipagem para as rotas
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    useEffect(() => {
        if (user?.id) {
            buscarReceitasDoUsuario(user.id);
        }
    }, [user]);

    const handleEdit = (receita) => {

        navigation.navigate("CadastroReceita", {
            id: receita.id,
            nome: receita.nome,
            descricao: receita.descricao,
            ingredientes: receita.ingredientes,
            modoPreparo: receita.modoPreparo,
            imagemUrl: receita.imagemUrl,
          });
    };

    const handleDelete = (id) => {
        Alert.alert(
            "Confirmar Exclusão",
            "Você tem certeza de que deseja excluir esta receita?",
            [
                {
                    text: "Cancelar",
                    style: "cancel"
                },
                {
                    text: "Excluir",
                    style: "destructive",
                    onPress: async () => {
                        try {
                            await excluirReceita(id);
                            buscarReceitasDoUsuario(user.id); // Atualiza a lista após exclusão
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
                <TouchableOpacity style={styles.editButton} onPress={() => handleEdit(item)}>
                    <Text style={styles.actionText}>Editar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.deleteButton} onPress={() => handleDelete(item.id)}>
                    <Text style={styles.actionText}>Excluir</Text>
                </TouchableOpacity>
            </View>
        </View>
    );

    const adicionarReceita = () => {
        router.push('/cadastroReceita');
    };

    const pesquisar = () => {
        router.push('/pesquisa');
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

                <TouchableOpacity style={styles.addButton} onPress={pesquisar}>
                    <Text style={styles.addButtonText}>Pesquisar novas Receitas</Text>
                </TouchableOpacity>
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
