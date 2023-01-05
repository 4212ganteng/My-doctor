import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { DumyRS1 } from "../assets/dumy";

export default function ListHospital() {
  return (
    <View style={styles.page}>
      <Image source={DumyRS1} style={styles.avatar} />
      <View style={styles.container}>
        <Text style={styles.title}>Rumah Sakit</Text>
        <Text style={styles.title}>Citra Bunga Merdeka</Text>
        <Text style={styles.address}>Jln. Surya Sejahtera 20</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    marginBottom: 16,
    flexDirection: "row",
    borderBottomColor: "#EEEEEE",
    borderBottomWidth: 1,
    paddingHorizontal: 16,
  },
  avatar: {
    width: 80,
    height: 60,
    borderRadius: 10,
    marginRight: 16,
  },
  container: {
    marginBottom: 16,
  },
  title: {
    fontSize: 16,
    color: "#112340",
  },
  address: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#7D8797",
  },
});
