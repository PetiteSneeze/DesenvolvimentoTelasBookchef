import { Tabs } from "expo-router";
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

export default function LayoutTab() {
    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: '#FF6347',  // Cor que remete a receitas (tomate)
                tabBarInactiveTintColor: '#777',
                tabBarStyle: { backgroundColor: '#FFE4C4' }, // Fundo claro que remete a ingredientes (tom neutro)
                headerShown: false,
            }}
        >
            {/* Tela de Eventos */}
            <Tabs.Screen 
                name="eventos" 
                options={{
                    title: "Eventos",
                    tabBarIcon: ({ color }) => (
                        <Ionicons name="calendar" size={26} color={color} />
                    )
                }}
            />

            {/* Tela de Receitas */}
            <Tabs.Screen 
                name="receitas" 
                options={{
                    title: "Receitas",
                    tabBarIcon: ({ color }) => (
                        <FontAwesome name="book" size={26} color={color} />
                    ),
                }} 
            />

            {/* Tela de Perfil */}
            <Tabs.Screen 
                name="perfil" 
                options={{
                    title: "Perfil",
                    tabBarIcon: ({ color }) => (
                        <FontAwesome5 name="user" size={26} color={color} />
                    ),
                }} 
            />
        </Tabs>
    );
}
