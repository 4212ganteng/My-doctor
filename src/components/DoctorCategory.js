import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { ILCategory1 } from "../assets";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function DoctorCategory({ onPress }) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <ILCategory1 style={styles.ilustration} />
      <Text style={styles.label}>Saya Butuh</Text>
      <Text style={styles.category}>Dokter Umum</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 12,
    backgroundColor: "#EDFCFD",
    alignSelf: "flex-start",
    borderRadius: 10,
    marginRight: 10,
  },
  ilustration: {
    marginBottom: 28,
  },
  label: {
    fontSize: 12,
  },
  category: {
    fontSize: 12,
  },
});
