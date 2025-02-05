//   const [username, setUsername] = useState("");
//   const [lastRideLoc, setLastRideLoc] = useState("");
//   const [lastRideMap, setLastRideMap] = useState("");
//   const [lastRideDate, setLastRideDate] = useState("");
//   const [lastRideDuration, setLastRideDuration] = useState("");
//   const [lastRideDistance, setLastRideDistance] = useState("");
//   const [lastRideAvgSpd, setLastRideAvgSpd] = useState("");

import React from "react";
import { View, Text, StyleSheet } from "react-native";

const RideSummaryCard = () => {
  // Sample ride data for testing
  const lastRideLoc = "Arrowhead Mtn, NH";
  const lastRideDate = "4/20/24";
  const lastRideDuration = "1:35.24";
  const lastRideDistance = "13.5 mi";
  const lastRideAvgSpd = "12.2 mph";

  return (
    <View style={styles.cardContainer}>
      <Text style={styles.title}>Last Ride</Text>

      <View style={styles.card}>
        <Text style={styles.locationText}>📍 {lastRideLoc}</Text>

        <View style={styles.dateContainer}>
          <Text style={styles.dateText}>{lastRideDate}</Text>
        </View>

        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <Text style={styles.statLabel}>Time</Text>
            <Text style={styles.statValue}>{lastRideDuration}</Text>
          </View>

          <View style={styles.statItem}>
            <Text style={styles.statLabel}>Distance</Text>
            <Text style={styles.statValue}>{lastRideDistance}</Text>
          </View>

          <View style={styles.statItem}>
            <Text style={styles.statLabel}>Avg. Speed</Text>
            <Text style={styles.statValue}>{lastRideAvgSpd}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333",
  },
  card: {
    width: "90%",
    backgroundColor: "#e5e5e5", // Card background color
    borderRadius: 15,
    padding: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    elevation: 5,
  },
  locationText: {
    fontSize: 18,
    fontWeight: "500",
    marginBottom: 20,
  },
  dateContainer: {
    position: "absolute",
    right: 20,
    bottom: 80,
    backgroundColor: "#a5b98c",
    padding: 8,
    borderRadius: 10,
  },
  dateText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 40,
  },
  statItem: {
    alignItems: "center",
    flex: 1,
  },
  statLabel: {
    fontSize: 16,
    color: "#666",
  },
  statValue: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
});

export default RideSummaryCard;
