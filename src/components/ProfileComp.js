import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { DumyUser, ILBtnremove } from "../assets";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function ProfileComp({ name, desc, isRemove, img, onPress }) {
  return (
    <View style={styles.page}>
      {isRemove ? (
        <TouchableOpacity style={styles.borderProfile} onPress={onPress}>
          <Image source={img} style={styles.avatar} />
          {isRemove && <ILBtnremove style={styles.icon} />}
        </TouchableOpacity>
      ) : (
        <View style={styles.borderProfile} onPress={onPress}>
          <Image source={img} style={styles.avatar} />
        </View>
      )}

      {name && (
        <View>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.desc}>{desc}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 130 / 2,
  },
  page: {
    // flex: 1,
    // justifyContent: "center",
    alignItems: "center",
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#112340",
    marginTop: 16,
  },
  desc: {
    color: "#7D8797",
    fontSize: 16,
    textAlign: "center",
  },
  icon: {
    position: "absolute",
    right: 8,
    bottom: 8,
  },
  borderProfile: {
    borderRadius: 130 / 2,
    borderWidth: 1,
  },
});
