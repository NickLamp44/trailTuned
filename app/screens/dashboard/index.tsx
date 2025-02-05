import React from "react";
import { View, Text, Button, StyleSheet, ScrollView } from "react-native";
import { useRouter } from "expo-router";
import RideSummaryCard from "../../components/dashboard/rideSummaryCard";
import CurrentSaveSetupCard from "../../components/dashboard/currentSavedSetUp";

export default function Dashboard() {
  const router = useRouter();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Welcome to the Dashboard</Text>

      {/* Ride Summary Card */}
      <RideSummaryCard />

      {/* Current Setup Card */}
      <CurrentSaveSetupCard />

      <Button title="Go Back Home" onPress={() => router.push("/")} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
});
