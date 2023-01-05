import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { ILBtnSend } from "../assets/illustration";

export default function BtnIconComp({ disable }) {
  return (
    <View style={styles.page(disable)}>
      <ILBtnSend />
    </View>
  );
}

const styles = StyleSheet.create({
  page: (disable) => ({
    backgroundColor: disable ? "#EDEEF0" : "#0066CB",
    justifyContent: "center",
    alignItems: "center",
    height: 45,
    width: 45,
    borderRadius: 10,
    marginLeft: 10,
    marginRight: 16,
  }),
});
