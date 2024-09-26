import { Stack } from "expo-router";
//import BackgroundWrapper from './background'; // Substitua pelo caminho correto

export default function RootLayout() {
  return (
    //<BackgroundWrapper>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
      </Stack>
    //</BackgroundWrapper>
  );
}
