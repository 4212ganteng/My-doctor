import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { TextInput } from "react-native-gesture-handler";

export default function InputComp({ label }) {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={styles.input} />
    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    marginBottom: 6,
  },
  input: {
    borderWidth: 2,
    borderColor: "#E9E9E9",
    borderRadius: 10,
    padding: 10,
  },
});
