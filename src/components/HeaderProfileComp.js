import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { DumyUserChat } from "../assets/dumy";
import ButtonComp from "./ButtonComp";

export default function HeaderProfileComp({ onPress }) {
  return (
    <View style={styles.page}>
      <ButtonComp type="icon-only" icon="back-light" onPress={onPress} />
      <View style={styles.title}>
        <Text style={styles.text}>Nairobi Putri Hayza</Text>
        <Text style={styles.text}>Dokter Anak</Text>
      </View>
      <Image source={DumyUserChat} style={styles.avatar} />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: "#112340",
    flexDirection: "row",
    height: 107,
    alignItems: "center",
    paddingHorizontal: 16,
  },
  title: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
  avatar: {
    width: 46,
    height: 46,
    borderRadius: 46 / 2,
  },
  text: {
    color: "white",
  },
});
