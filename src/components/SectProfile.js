import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { DumyUser } from "../assets";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function SectProfile({ onPress, img, name, desc }) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={img} style={styles.avatar} />
      <View>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.profession}>{desc}</Text>
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
    fontSize: 18,
    color: "#112340",
  },
  profession: {
    fontSize: 12,
    color: "#7D8797",
  },
});
