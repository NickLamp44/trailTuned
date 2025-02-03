import { View, Button, StyleSheet, Text } from "react-native";
import { useRouter } from "expo-router";

export default function Home() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text>Welcome to TRAIL TUNED</Text>
      <Button
        title="Login"
        onPress={() => router.push("/screens/auth/login")}
      />
      <Button
        title="Register"
        onPress={() => router.push("/screens/auth/register")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
