import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import React from "react";

export default function LoadingComp() {
  return (
    <View style={styles.wrapper}>
      {/* this for loading circle */}
      <ActivityIndicator size="large" />
      <Text>Loading...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
    width: "100%",
    height: "100%",
  },
});
