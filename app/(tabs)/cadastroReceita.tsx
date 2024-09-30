import { View, Text, TextInput, StyleSheet, TouchableOpacity, ImageBackground, ScrollView, Image, ActivityIndicator } from "react-native";
import React, { useState, useEffect } from "react";
import { Picker } from '@react-native-picker/picker';
import * as ImagePicker from 'expo-image-picker';
import { Asset } from 'expo-asset';

const backgroundImage = require('../../assets/images/kitchen_background_image.png');

export default function CadastroReceita() {
    const [nomeReceita, setNomeReceita] = useState('');
    const [descricao, setDescricao] = useState('');
    const [ingredientes, setIngredientes] = useState('');
    const [modoPreparo, setModoPreparo] = useState('');
    const [tipoReceita, setTipoReceita] = useState('Doce');
    const [image, setImage] = useState<string | null>(null);
    const [imageLoaded, setImageLoaded] = useState(false);

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
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
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
            <ScrollView contentContainerStyle={styles.overlayContainer}>
                
                <Text style={styles.appName}>BookChef</Text>
                <Text style={styles.appSubtitle}>A sua Receita</Text>

                <Text style={styles.mainTitle}>Cadastrar Receita</Text>

                <TextInput
                    style={styles.input}
                    placeholder="Nome da Receita"
                    placeholderTextColor="#aaa"
                    value={nomeReceita}
                    onChangeText={setNomeReceita}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Descrição"
                    placeholderTextColor="#aaa"
                    value={descricao}
                    onChangeText={setDescricao}
                />
                <TextInput
                    style={styles.textArea}
                    placeholder="Ingredientes"
                    placeholderTextColor="#aaa"
                    value={ingredientes}
                    onChangeText={setIngredientes}
                    multiline={true}
                    numberOfLines={4}
                />
                <TextInput
                    style={styles.textArea}
                    placeholder="Modo de Preparo"
                    placeholderTextColor="#aaa"
                    value={modoPreparo}
                    onChangeText={setModoPreparo}
                    multiline={true}
                    numberOfLines={4}
                />

                <View style={styles.pickerContainer}>
                    <Text style={styles.pickerLabel}>Tipo de Receita:</Text>
                    <View style={styles.pickerWrapper}>
                        <Picker
                            selectedValue={tipoReceita}
                            style={styles.picker}
                            onValueChange={(itemValue) => setTipoReceita(itemValue)}
                        >
                            <Picker.Item label="Doce" value="Doce" />
                            <Picker.Item label="Salgado" value="Salgado" />
                        </Picker>
                    </View>
                </View>

                <TouchableOpacity style={styles.button} onPress={pickImage}>
                    <Text style={styles.buttonText}>Selecionar Imagem</Text>
                </TouchableOpacity>

                {image && <Image source={{ uri: image }} style={styles.image} />}

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Cadastrar Receita</Text>
                </TouchableOpacity>
            </ScrollView>
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
    },
    overlayContainer: {
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        flexGrow: 1,
    },
    appName: {
        fontSize: 36,
        fontWeight: 'bold',
        color: '#fff',
        marginTop: 20,
        textAlign: 'center',
    },
    appSubtitle: {
        fontSize: 18,
        color: '#fff',
        marginBottom: 20,
        textAlign: 'center',
    },
    mainTitle: {
        fontSize: 36,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 20,
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
    pickerContainer: {
        backgroundColor: '#fff',
        width: '90%',
        borderRadius: 10,
        marginBottom: 15,
        paddingHorizontal: 10,
    },
    pickerLabel: {
        fontSize: 16,
        color: '#000',
        marginBottom: 5,
        marginTop: 10,
    },
    pickerWrapper: {
        backgroundColor: '#fff',
        borderRadius: 8,
        borderColor: '#ccc',
        borderWidth: 1,
    },
    picker: {
        height: 50,
        width: '100%',
    },
    button: {
        backgroundColor: '#ff6347',
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
    image: {
        width: 200,
        height: 200,
        borderRadius: 10,
        marginTop: 15,
    },
});
