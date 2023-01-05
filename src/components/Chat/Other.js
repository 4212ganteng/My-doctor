import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { DumyUserChat } from "../../assets/dumy";

export default function Other() {
  return (
    <View style={styles.page}>
      <View style={styles.content}>
        <Image source={DumyUserChat} style={styles.avatar} />
        <View style={styles.wrapper}>
          <View style={styles.chat}>
            <Text style={styles.text}>
              Ibu dokter, apakah memakan jeruk tiap hari itu buruk?
            </Text>
          </View>
        </View>
      </View>
      <Text style={styles.date}>4.45 AM</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    marginBottom: 26,
    alignItems: "flex-start",
    paddingRight: 16,
  },

  chat: {
    backgroundColor: "#0BCAD4",
    maxWidth: "80%",
    borderRadius: 10,
    borderBottomLeftRadius: 0,
    padding: 12,
    paddingRight: 18,
    paddingLeft: 12,
  },
  text: {
    fontSize: 14,
  },
  date: {
    fontSize: 11,
    color: "#7D8797",
    marginLeft: 48,
  },
  content: {
    flexDirection: "row",
    alignItems: "flex-end",
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 30 / 2,
    marginRight: 16,
  },
});
