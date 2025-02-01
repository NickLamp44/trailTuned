import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false, // Customize headers globally here
      }}
    >
      <Stack.Screen name="index" options={{ title: "Home" }} />
      <Stack.Screen name="components/ui/login" options={{ title: "Login" }} />
      <Stack.Screen
        name="components/ui/register"
        options={{ title: "Register" }}
      />
    </Stack>
  );
}
