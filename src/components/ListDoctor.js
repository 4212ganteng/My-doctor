import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { DumyDoctor1, ILArrowRight } from "../assets";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function ListDoctor({ img, name, desc, type, onPress }) {
  return (
    <TouchableOpacity style={styles.page} onPress={onPress}>
      <Image source={img} style={styles.avatar} />

      <View style={styles.info(type)}>
        <Text>{name}</Text>
        <Text style={styles.desc}>{desc}</Text>
      </View>
      {type === "dark" && <ILArrowRight />}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    marginRight: 20,
  },
  desc: {
    color: "#7D8797",
    fontSize: 12,
    marginBottom: 20,
  },

  page: {
    flexDirection: "row",
    // justifyContent: "space-between",
    marginBottom: 16,
    borderBottomColor: "#EEEEEE",
    borderBottomWidth: 1,
  },
  info: (type) => ({
    flex: type == "dark" ? 1 : 0,
  }),
});
