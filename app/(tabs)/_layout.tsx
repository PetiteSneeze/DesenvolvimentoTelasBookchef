import { Tabs } from "expo-router";
import { Ionicons, FontAwesome, FontAwesome5 } from '@expo/vector-icons';

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
            <Tabs.Screen
                name="home"
                options={{
                    title: "Home",
                    tabBarIcon: ({ color }) => (
                        <Ionicons name="home" size={26} color={color} />
                    ),
                }}
            />

            <Tabs.Screen
                name="perfil"
                options={{
                    title: "Perfil",
                    tabBarIcon: ({ color }) => (
                        <FontAwesome5 name="user" size={26} color={color} />
                    ),
                }}
            />

            <Tabs.Screen
                name="receitas"
                options={{
                    title: "Receitas",
                    tabBarIcon: ({ color }) => (
                        <FontAwesome name="book" size={26} color={color} />
                    ),
                }}
            />

            <Tabs.Screen
                name="cadastro"
                options={{
                    title: "Cadastrar Receita",
                    tabBarIcon: ({ color }) => (
                        <FontAwesome name="book" size={26} color={color} />
                    ),
                }}
            />
        </Tabs>
    );
}
