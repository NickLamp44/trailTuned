import React from "react";
import { View, Text, StyleSheet } from "react-native";

const CurrentSaveSetupCard = () => {
  // Sample data
  const forkData = {
    makeModel: "Fox 36 Performance",
    springType: "air",
    springRate: 75,
    springRateValue: "PSI",
    volumeReducers: 3,
    damperModel: "Grip X2",
    hsc: 8,
    lsc: 8,
    hsr: 8,
    lsr: 8,
  };

  const shockData = {
    makeModel: "RockShox Super Deluxe +",
    springType: "air",
    springRate: 155,
    springRateValue: "PSI",
    volumeReducers: 3,
    damperModel: "RCT 2",
    hbo: 3,
    hsc: 8,
    lsc: 8,
    hsr: 8,
    lsr: 8,
  };

  return (
    <View style={styles.container}>
      {/* Fork Card */}
      <View style={styles.card}>
        <Text style={styles.makeModel}>{forkData.makeModel}</Text>
        <View style={styles.springRateContainer}>
          <Text style={styles.largeText}>{forkData.springRate}</Text>
          <Text style={styles.unitText}>{forkData.springRateValue}</Text>
        </View>
        <Text style={styles.volumeReducersText}>
          Volume Reducers: {forkData.volumeReducers}
        </Text>
        <Text style={styles.damperModelText}>{forkData.damperModel}</Text>
        <View style={styles.settingsContainer}>
          <View style={styles.settingItem}>
            <Text style={styles.settingValue}>{forkData.hsc}</Text>
            <Text style={styles.settingLabel}>HSC</Text>
          </View>
          <View style={styles.settingItem}>
            <Text style={styles.settingValue}>{forkData.lsc}</Text>
            <Text style={styles.settingLabel}>LSC</Text>
          </View>
          <View style={styles.settingItem}>
            <Text style={styles.settingValue}>{forkData.hsr}</Text>
            <Text style={styles.settingLabel}>HSR</Text>
          </View>
          <View style={styles.settingItem}>
            <Text style={styles.settingValue}>{forkData.lsr}</Text>
            <Text style={styles.settingLabel}>LSR</Text>
          </View>
        </View>
      </View>

      {/* Shock Card */}
      <View style={styles.card}>
        <Text style={styles.makeModel}>{shockData.makeModel}</Text>
        <View style={styles.springRateContainer}>
          <Text style={styles.largeText}>{shockData.springRate}</Text>
          <Text style={styles.unitText}>{shockData.springRateValue}</Text>
        </View>
        <Text style={styles.volumeReducersText}>
          Volume Reducers: {shockData.volumeReducers}
        </Text>
        <Text style={styles.damperModelText}>{shockData.damperModel}</Text>
        <View style={styles.settingsContainer}>
          <View style={styles.settingItem}>
            <Text style={styles.settingValue}>{shockData.hbo}</Text>
            <Text style={styles.settingLabel}>HBO</Text>
          </View>
          <View style={styles.settingItem}>
            <Text style={styles.settingValue}>{shockData.hsc}</Text>
            <Text style={styles.settingLabel}>HSC</Text>
          </View>
          <View style={styles.settingItem}>
            <Text style={styles.settingValue}>{shockData.lsc}</Text>
            <Text style={styles.settingLabel}>LSC</Text>
          </View>
          <View style={styles.settingItem}>
            <Text style={styles.settingValue}>{shockData.hsr}</Text>
            <Text style={styles.settingLabel}>HSR</Text>
          </View>
          <View style={styles.settingItem}>
            <Text style={styles.settingValue}>{shockData.lsr}</Text>
            <Text style={styles.settingLabel}>LSR</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  card: {
    backgroundColor: "#a5b98c",
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    elevation: 3,
  },
  makeModel: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  springRateContainer: {
    flexDirection: "row",
    alignItems: "baseline",
    marginBottom: 10,
  },
  largeText: {
    fontSize: 48,
    fontWeight: "bold",
    marginRight: 5,
  },
  unitText: {
    fontSize: 18,
    fontWeight: "500",
  },
  volumeReducersText: {
    fontSize: 16,
    marginBottom: 10,
  },
  damperModelText: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  settingsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  settingItem: {
    width: "24%",
    alignItems: "center",
    marginBottom: 10,
  },
  settingValue: {
    fontSize: 18,
    fontWeight: "bold",
  },
  settingLabel: {
    fontSize: 14,
    color: "#333",
  },
});

export default CurrentSaveSetupCard;
