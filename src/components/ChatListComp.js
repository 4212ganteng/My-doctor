import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { DumyDoctor2 } from "../assets";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function ChatListComp({ onPress, name, text }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Image source={DumyDoctor2} style={styles.avatar} />
        <View style={styles.wraperText}>
          <Text style={styles.name}>{name}</Text>
          <Text>{text}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#EEEEEE",
    padding: 16,
  },
  title: {
    flex: 1,
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 70,
  },
  avatar: {
    width: 46,
    height: 46,
    borderRadius: 46 / 2,
    marginRight: 12,
  },
  name: {
    flex: 1,
    fontSize: 16,
    fontWeight: "bold",
  },
  wraperText: {
    // marginBottom: 20,
    // backgroundColor:"red"
  },
});
