import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { DumyUser, ILBtnremove } from "../assets";

export default function ProfileComp({ name, desc, isRemove }) {
  return (
    <View style={styles.page}>
      <View style={styles.borderProfile}>
        <Image source={DumyUser} style={styles.avatar} />
        {isRemove && <ILBtnremove style={styles.icon} />}
      </View>

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
