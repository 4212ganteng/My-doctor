import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function ItemProfile({ label, field }) {
  return (
    <View style={styles.page}>
      <View style={styles.item}>
        <Text style={styles.column}>{label}</Text>
        <Text style={styles.field}>{field}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    borderBottomColor: "#EEEEEE",
    borderBottomWidth: 1,
  },
  column: {
    color: "#7D8797",
    fontSize: 14,
    marginTop: 16,
  },
  field: {
    marginBottom: 16,
    marginTop: 6,
    color: "#112340",
    fontSize: 14,
  },
  item: {
    paddingLeft: 16,
  },
});
