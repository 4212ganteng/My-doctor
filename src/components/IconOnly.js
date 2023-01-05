import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { ILarrow, ILArrowLight } from "../assets/illustration";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function IconOnly({ onPress, icon }) {
  const Icon = () => {
    if (icon === "back-dark") {
      return <ILarrow />;
    }
    if (icon === "back-light") {
      return <ILArrowLight />;
    }
    return <ILarrow />;
  };
  return (
    <TouchableOpacity onPress={onPress}>
      <Icon />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({});
