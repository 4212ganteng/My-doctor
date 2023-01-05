import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { DumyDoctor2 } from "../assets";

export default function ChatListComp() {
  return (
    <View>
      <View style={styles.container}>
        <Image source={DumyDoctor2} style={styles.avatar} />
        <View style={styles.wraperText}>
          <Text style={styles.name}>Alexander Jannie</Text>
          <Text>Baik ibu, terima kasih banyak atas wakt...</Text>
        </View>
      </View>
    </View>
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
