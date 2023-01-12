import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { TextInput } from "react-native-gesture-handler";

export default function InputComp({
  label,
  secureTextEntry,
  value,
  onChangeText,
  disable,
}) {
  const [border, setBorder] = useState("#E9E9E9");
  const handleFocus = () => {
    setBorder("#0066CB");
  };
  const handleBlur = () => {
    setBorder("#E9E9E9");
  };
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input(border)}
        onFocus={handleFocus}
        onBlur={handleBlur}
        secureTextEntry={secureTextEntry}
        value={value}
        onChangeText={onChangeText}
        editable={!disable}
        selectTextOnFocus={!disable}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    marginBottom: 6,
  },
  input: (border) => ({
    borderWidth: 2,
    borderColor: border,
    borderRadius: 10,
    padding: 10,
  }),
});
