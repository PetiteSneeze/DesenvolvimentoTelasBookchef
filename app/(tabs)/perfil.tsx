import { Text, View, TouchableOpacity, StyleSheet, ImageBackground, ActivityIndicator, Image } from "react-native";
import { useState, useEffect } from "react";
import * as ImagePicker from 'expo-image-picker'; 
import { Asset } from 'expo-asset';
import { router } from "expo-router";

const backgroundImage = require('../../assets/images/kitchen_background_image.png');

export default function Perfil() {
    const [imageLoaded, setImageLoaded] = useState(false);
    const [userImage, setUserImage] = useState<string | null>(null); 

    const preloadImage = async () => {
        await Asset.loadAsync(backgroundImage);
        setImageLoaded(true); 
    };

    useEffect(() => {
        preloadImage();
    }, []);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [1, 1], 
            quality: 1,
        });

        if (!result.canceled) {
            setUserImage(result.assets[0].uri); 
        }
    };

    const sair = () => {
        router.push("/");
    };

    const editarUsuario = () => {
        router.push('../editarUsuario');
    };

    
    if (!imageLoaded) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#fff" />
            </View>
        );
    }

    return (
        <ImageBackground source={backgroundImage} style={styles.background}>
            <View style={styles.overlayContainer}>
                
                <Text style={styles.appName}>BookChef</Text>
                <Text style={styles.appSubtitle}>A sua Receita</Text>

                <TouchableOpacity onPress={pickImage}>
                    {userImage ? (
                        <Image source={{ uri: userImage }} style={styles.userImage} />
                    ) : (
                        <View style={styles.placeholderImage}>
                            <Text style={styles.placeholderText}>Escolher Foto</Text>
                        </View>
                    )}
                </TouchableOpacity>
                
                <Text style={styles.title}>Bem vindo</Text>
                <Text style={styles.username}>Andre Cavichiolli</Text>

                <TouchableOpacity style={styles.button} onPress={sair}>
                    <Text style={styles.buttonText}>Sair</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={editarUsuario}>
                    <Text style={styles.buttonText}>Editar Usuário</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000', 
    },
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
    appName: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#fff',
        marginTop: 50,
        textAlign: 'center',
    },
    appSubtitle: {
        fontSize: 18,
        color: '#fff',
        marginBottom: 80,
        textAlign: 'center',
    },
    userImage: {
        width: 200,
        height: 200,
        borderRadius: 120, 
        marginBottom: 120,
    },
    placeholderImage: {
        width: 120,
        height: 120,
        borderRadius: 60,
        backgroundColor: '#cccccc',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },
    placeholderText: {
        color: '#ffffff',
        fontWeight: 'bold',
    },
    title: {
        fontSize: 40,
        fontWeight: "bold",
        marginBottom: 20,
        color: "#fff",
        textAlign: 'center',
    },
    username: {
        fontSize: 28,
        color: "white", 
        fontWeight: "bold",
        marginBottom: 40,
        textAlign: 'center',
    },
    button: {
        backgroundColor: '#ff6347', 
        borderRadius: 10,
        paddingVertical: 15,
        paddingHorizontal: 50,
        marginTop: 15,
        width: '80%',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5, 
    },
    buttonText: {
        fontSize: 20,
        color: '#fff',
        fontWeight: "bold",
    },
});