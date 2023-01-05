import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { ILlogo } from "../assets/illustration";

export default function Splash({ navigation }) {
  // move page after 3  s with use effect
  useEffect(() => {
    setTimeout(() => {
      // navigation.replace = redirect new page , dan ketika kembali di pencet maka keluar app
      navigation.replace("Getstarted");
    }, 3000);
  }, []);
  return (
    <View style={styles.container}>
      <ILlogo />
      <Text style={styles.text}>My Doctor</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
  },
});
