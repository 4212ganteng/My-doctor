import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { TextInput } from "react-native-gesture-handler";
import ButtonComp from "./ButtonComp";
import BtnIconComp from "./BtnIconComp";

export default function InputChat() {
  return (
    <View style={styles.page}>
      <TextInput placeholder="Ketik pesan ...." style={styles.input} />
      <BtnIconComp disable={true} />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: "#EDEEF0",
    padding: 14,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "red",
    flex: 1,
    height: 45,
  },
  page: {
    flexDirection: "row",
  },
});
