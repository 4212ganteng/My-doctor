import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { DumyNews1 } from "../assets";

export default function NewsComp() {
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.titlewrapper}>
          <View style={styles.title}>
            <Text>Is it safe to stay at home during coronavirus?</Text>
            <Text>Today</Text>
          </View>
        </View>
        <Image source={DumyNews1} style={styles.avatar} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderBottomColor: "#EEEEEE",
    borderBottomWidth: 1,
    paddingBottom: 12,
    paddingTop: 16,
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "black",
    maxWidth: 177,
  },
  avatar: {
    width: 80,
    height: 60,
    borderRadius: 11,
  },
  titlewrapper: {
    flex: 1,
  },
});
