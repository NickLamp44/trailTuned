import React, { useState } from "react";
import { View, Text, TextInput, Button, Alert, StyleSheet } from "react-native";

const LoginView = ({
  onLoggedIn,
}: {
  onLoggedIn: (user: any, token: string) => void;
}) => {
  const isProduction = process.env.NODE_ENV === "production";
  const urlAPI = isProduction
    ? process.env.REACT_APP_API_PROD
    : process.env.REACT_APP_API_LOCAL;

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    const data = { username, password };

    fetch(`${urlAPI}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        if (data.user) {
          console.log("User authenticated:", data.user);
          onLoggedIn(data.user, data.token);
        } else {
          Alert.alert("Login failed", "No such user");
        }
      })
      .catch((error) => {
        console.error("Login error:", error);
        Alert.alert(
          "Error",
          "Something went wrong during login. Please try again."
        );
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Login" onPress={handleSubmit} />
    </View>
  );
};

export default LoginView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
});
