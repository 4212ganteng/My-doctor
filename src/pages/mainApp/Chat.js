import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ChatListComp from "../../components/ChatListComp";

export default function Chat({ navigation }) {
  return (
    <View>
      <Text style={styles.title}>Messages</Text>
      <ChatListComp
        name="Nairobi Putri Hayza"
        text="Baik ibu, terima kasih banyak atas wakt..."
        onPress={() => navigation.navigate("Chating")}
      />
      <ChatListComp
        name="John McParker Steve"
        text="Baik ibu, terima kasih banyak atas wakt..."
        onPress={() => navigation.navigate("Chating")}
      />
      <ChatListComp
        name="Liu Yue Tian Park"
        text="Baik ibu, terima kasih banyak atas wakt..."
        onPress={() => navigation.navigate("Chating")}
      />
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
