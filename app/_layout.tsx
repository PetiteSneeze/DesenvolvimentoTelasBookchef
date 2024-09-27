import { Stack } from "expo-router";
export default function RootLayout() {
  return (
    
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="editarUsuario" />
        <Stack.Screen name="perfil" />
      </Stack>
    
  );
}
