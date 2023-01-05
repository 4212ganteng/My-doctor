import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { DumyUser } from "../assets";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function SectProfile({ onPress }) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={DumyUser} style={styles.avatar} />
      <View>
        <Text style={styles.name}>Shayna Melinda</Text>
        <Text style={styles.profession}>Product Designer</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  avatar: {
    width: 46,
    height: 46,
    borderRadius: 46 / 2,
    marginRight: 12,
  },
  name: {
    fontSize: 20,
  },
  profession: {
    fontSize: 20,
    color: "#fff",
  },
});
