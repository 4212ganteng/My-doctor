import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ChatListComp from "../../components/ChatListComp";

export default function Chat() {
  return (
    <View>
      <Text style={styles.title}>Messages</Text>
      <ChatListComp />
      <ChatListComp />
      <ChatListComp />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 16,
    marginTop: 30,
    marginLeft: 16,
  },
});
