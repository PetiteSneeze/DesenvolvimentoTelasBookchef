import { Tabs } from "expo-router";
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { FontAwesome5 } from '@expo/vector-icons';

export default function LayoutTab() {
    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: '#FF6347',
                tabBarInactiveTintColor: '#777',
                tabBarStyle: { backgroundColor: '#FFE4C4' },
                headerShown: false,
            }}
        >
            {/* Tela de home */}
            <Tabs.Screen
                name="home"
                options={{
                    title: "Home",
                    tabBarIcon: ({ color }) => (
                        <Ionicons name="home" size={26} color={color} />
                    )
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
            {/* Tela de cadastro de receitas */}
            <Tabs.Screen
                name="cadastro"
                options={{
                    title: "Cadastrar",
                    tabBarIcon: ({ color }) => (
                        <FontAwesome5 name="clipboard-list" size={26} color={color} />
                    ),
                }}
            />

        </Tabs>
    );
}
