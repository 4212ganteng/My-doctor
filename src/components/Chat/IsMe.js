import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function IsMe() {
  return (
    <View style={styles.page}>
      <View style={styles.chat}>
        <Text style={styles.text}>
          Ibu dokter, apakah memakan jeruk tiap hari itu buruk?
        </Text>
      </View>
      <Text>4.45 AM</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    marginBottom: 26,
    alignItems: "flex-end",
    paddingRight: 16,
  },

  chat: {
    backgroundColor: "#EDFCFD",
    maxWidth: "70%",
    borderRadius: 10,
    borderBottomLeftRadius: 0,
    padding: 12,
    paddingRight: 18,
  },
  text: {
    fontSize: 14,
  },
  date: {
    fontSize: 11,
    color: "#7D8797",
  },
});
