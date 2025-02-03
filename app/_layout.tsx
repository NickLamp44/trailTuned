import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" options={{ title: "Home" }} />
      <Stack.Screen name="screens/auth/login" options={{ title: "Login" }} />
      <Stack.Screen
        name="screens/auth/register"
        options={{ title: "Register" }}
      />
      {/* <Stack.Screen name="dashboard/index" options={{ title: "Dashboard" }} />
      <Stack.Screen name="profile/index" options={{ title: "Profile" }} /> */}
    </Stack>
  );
}
