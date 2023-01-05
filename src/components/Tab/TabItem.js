import { StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  ILDoctor,
  ILDoctorActive,
  ILHospital,
  ILHospitalActive,
  ILMessage,
  ILMessageActive,
} from "../../assets/illustration";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function TabItem({ title, active, onPress, onLongPress }) {
  const Icon = () => {
    if (title === "Doctor") {
      return active ? <ILDoctorActive /> : <ILDoctor />;
    }

    if (title === "Chat") {
      return active ? <ILMessageActive /> : <ILMessage />;
    }

    if (title === "Hospital") {
      return active ? <ILHospitalActive /> : <ILHospital />;
    }

    return <ILDoctor />;
  };
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      onLongPress={onLongPress}
    >
      <Icon />
      <Text style={styles.text(active)}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  text: (active) => ({
    color: active ? "#0BCAD4" : "#495A75",
    marginTop: 4,
  }),
});
