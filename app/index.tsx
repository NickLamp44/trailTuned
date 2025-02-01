import { View, Text, Button } from "react-native";
import { useRouter } from "expo-router";

export default function Index() {
  const router = useRouter();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Welcome to TRAIL TUNED</Text>
      <Button
        title="Login"
        onPress={() => router.push("/components/ui/login")}
      />
      <Button
        title="Register"
        onPress={() => router.push("/components/ui/register")}
      />
    </View>
  );
}
