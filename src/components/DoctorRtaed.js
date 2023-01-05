import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { DumyDoctor1, ILStar } from "../assets";
import ListDoctor from "./ListDoctor";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function DoctorRtaed({ onPress }) {
  return (
    <TouchableOpacity style={styles.page} onPress={onPress}>
      <ListDoctor
        img={DumyDoctor1}
        name="Alexa Rachel"
        desc="Pediatrician"
        onPress={onPress}
      />
      <View style={styles.rate}>
        <ILStar />
        <ILStar />
        <ILStar />
        <ILStar />
        <ILStar />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  rate: {
    flexDirection: "row",
  },
});
