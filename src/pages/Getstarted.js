import { ImageBackground, StyleSheet, Text, View } from "react-native";
import React from "react";
import { ILbg, ILlogo } from "../assets/illustration";
import ButtonComp from "../components/ButtonComp";

export default function Getstarted({ navigation }) {
  return (
    <ImageBackground source={ILbg} style={styles.page}>
      <View>
        <ILlogo />
        <Text style={styles.text}>
          Konsultasi dengan dokter jadi lebih mudah & fleksibel
        </Text>
      </View>
      <View>
        <ButtonComp
          title="Get Started"
          onPress={() => navigation.navigate("Register")}
        />
        <View style={{ height: 16 }}></View>
        <ButtonComp
          type="secondary"
          title="Login"
          onPress={() => navigation.navigate("Login")}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  page: {
    padding: 40,
    justifyContent: "space-between",
    flex: 1,
  },
  text: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    justifyContent: "center",
    marginTop: 206,
  },
});
