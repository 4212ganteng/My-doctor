import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import IconOnly from "./IconOnly";

export default function ButtonComp({ type, title, onPress, icon, disable }) {
  if (type === "icon-only") {
    return <IconOnly icon={icon} onPress={onPress} />;
  }
  if (disable) {
    return (
      <View style={styles.disableBG}>
        <Text style={styles.textBG}>{title}</Text>
      </View>
    );
  }
  return (
    <TouchableOpacity style={styles.container(type)} onPress={onPress}>
      <Text style={styles.text(type)}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: (type) => ({
    backgroundColor: type === "secondary" ? "white" : "#0BCAD4",
    paddingVertical: 10,
    borderRadius: 10,
  }),
  text: (type) => ({
    fontSize: 16,
    // fontWeight: 600,
    textAlign: "center",
    color: type === "secondary" ? "#112340" : "White",
  }),
  disableBG: {
    backgroundColor: "#EDEEF0",
    paddingVertical: 10,
    borderRadius: 10,
  },
  textBG: {
    textAlign: "center",
    color: "#B1B7C2",
  },
});
