import { Text, View, StyleSheet } from "react-native";

export default function Receitas() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Receitas</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f0f0f0", // Fundo claro
        padding: 20,
    },
    title: {
        fontSize: 28,
        fontWeight: "bold",
        color: "#333", // Texto escuro para contraste
    },
});
