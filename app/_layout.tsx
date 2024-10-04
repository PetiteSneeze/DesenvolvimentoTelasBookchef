import { Stack } from "expo-router";
import UserProvider
 from "./context/userContext";
 import ReceitaProvider from "./context/receitasContext";
export default function RootLayout() {
  return (
    <ReceitaProvider>
    <UserProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="editarUsuario" />
        <Stack.Screen name="perfil" />
      </Stack>
      </UserProvider>
      </ReceitaProvider>
  );
}
