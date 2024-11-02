import { Stack } from "expo-router";
import UserProvider from "./context/userContext";
import ReceitaProvider from "./context/receitasContext";

export default function RootLayout() {
  return (
    <ReceitaProvider>
      <UserProvider>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="index" />
          <Stack.Screen name="editarUsuario" />
          <Stack.Screen name="perfil" />
          {/* Adicione a tela CadastroReceita ao Stack */}
          <Stack.Screen name="cadastroReceita" />
          {/* Se tiver uma tela de receitas, adicione também */}
          <Stack.Screen name="receitas" />
        </Stack>
      </UserProvider>
    </ReceitaProvider>
  );
}
