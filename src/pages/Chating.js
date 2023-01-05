import { StyleSheet, Text, View } from "react-native";
import React from "react";
import HeaderComp from "../components/HeaderComp";
import HeaderProfileComp from "../components/HeaderProfileComp";
import InputChat from "../components/InputChat";
import ButtonComp from "../components/ButtonComp";
import ChatItem from "../components/Chat/ChatItem";

export default function Chating({ navigation }) {
  return (
    <View style={styles.page}>
      <HeaderProfileComp onPress={() => navigation.goBack()} />
      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.date}>Senin, 21 Maret, 2020</Text>
        </View>
        <ChatItem isme />
        <ChatItem />
        <ChatItem />
        <View style={styles.input}>
          <InputChat />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  date: {
    textAlign: "center",
    color: "#7D8797",
    fontSize: 11,
    marginVertical: 10,
  },
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "white",
  },
  content: {
    flex: 1,
  },
  input: {
    marginBottom: 26,
  },
  page: {
    flex: 1,
  },
});
