import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { ILarrow } from "../assets/illustration";
import ButtonComp from "./ButtonComp";

export default function HeaderComp({ title, onPress, type }) {
  return (
    <View style={styles.container(type)}>
      {/* <ILarrow /> */}
      <ButtonComp
        type="icon-only"
        icon={type === "dark" ? "back-light" : "back-dark"}
        onPress={onPress}
      />
      <Text style={styles.text(type)}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: (type) => ({
    paddingHorizontal: 16,
    paddingVertical: 30,
    backgroundColor: type === "dark" ? "#112340" : "white",
    flexDirection: "row",
    alignItems: "center",
    borderBottomRightRadius: type === "dark" ? 20 : 0,
    borderBottomLeftRadius: type === "dark" ? 20 : 0,
  }),

  text: (type) => ({
    textAlign: "center",
    flex: 1,
    fontSize: 20,
    color: type === "dark" ? "white" : "black",
  }),
});
