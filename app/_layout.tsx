import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="home" options={{ title: 'AlertaPet' }} />
      <Stack.Screen name="new-report" options={{ title: 'Novo Chamado' }} />
      <Stack.Screen name="confirmation" options={{ title: 'Confirmação' }} />
    </Stack>
  );
}