import { ImageBackground, StyleSheet, Text, View } from "react-native";
import React from "react";
import { DumyRSBG } from "../../assets";
import ListHospital from "../../components/ListHospital";

export default function Hospital() {
  return (
    <View style={styles.page}>
      <ImageBackground source={DumyRSBG} style={styles.imageBg}>
        <Text style={styles.textBg}>Nerby Hospital</Text>
        <Text style={styles.textBgsub}>3 tersedia</Text>
      </ImageBackground>
      <View style={styles.content}>
        <View style={styles.listContent}>
          <ListHospital />
          <ListHospital />
          <ListHospital />
          <ListHospital />
          <ListHospital />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  imageBg: {
    width: 400,
    height: 240,
    resizeMode: "cover",
  },
  textBg: {
    color: "white",
    textAlign: "center",
    fontSize: 20,
    marginBottom: 6,
    marginTop: 30,
  },
  textBgsub: {
    color: "white",
    textAlign: "center",
    fontSize: 14,
  },
  page: {
    backgroundColor: "#112340",
    flex: 1,
  },
  content: {
    backgroundColor: "white",
    flex: 1,
    borderRadius: 20,
    marginTop: -30,
  },
  listContent: {
    marginTop: 50,
  },
});
