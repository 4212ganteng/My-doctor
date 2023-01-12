import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { ILlogo } from "../assets/illustration";
import { getAuth, getIdToken, onAuthStateChanged } from "firebase/auth";

export default function Splash({ navigation }) {
  // move page after 3  s with use effect
  useEffect(() => {
    setTimeout(() => {
      // pengecekan sesion login
      const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          navigation.replace("MainApp");
        } else {
          // User is signed out
          navigation.replace("Getstarted");
        }
      });
    }, 3000);
  }, [navigation]);
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
