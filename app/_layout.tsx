import { Stack, useRouter } from "expo-router";
import { useEffect } from "react";

export default function RootLayout() {
  const router = useRouter();
  const bypassLogin = true; // Set this to true to bypass login/register screens

  useEffect(() => {
    if (bypassLogin) {
      router.replace("/screens/dashboard"); // Redirect directly to the dashboard
    }
  }, []);

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" options={{ title: "Home" }} />
      <Stack.Screen name="screens/auth/login" options={{ title: "Login" }} />
      <Stack.Screen
        name="screens/auth/register"
        options={{ title: "Register" }}
      />
      <Stack.Screen
        name="screens/dashboard/index"
        options={{ title: "Dashboard" }}
      />
    </Stack>
  );
}
