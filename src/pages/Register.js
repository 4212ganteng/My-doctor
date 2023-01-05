import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import InputComp from "../components/InputComp";
import ButtonComp from "../components/ButtonComp";
import HeaderComp from "../components/HeaderComp";
import { ScrollView } from "react-native-gesture-handler";
import { useForm } from "../utils/useForm";

export default function Register({ navigation }) {
  //  call the custom hook useForm from utils
  const [form, setForm] = useForm({
    fullName: "",
    profession: "",
    email: "",
    password: "",
  });
  const handleSubmit = () => {
    console.log("ini data form", form);
  };
  return (
    <View style={styles.page}>
      <HeaderComp title="Daftar Akun" onPress={() => navigation.goBack()} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ height: 40 }}></View>
        <View style={styles.container}>
          <InputComp
            label="Full Name"
            value={form.value}
            onChangeText={(value) => setForm("fullName", value)}
          />
          <View style={{ height: 24 }}></View>

          <InputComp
            label="Pekerjaan"
            value={form.value}
            onChangeText={(value) => setForm("profession", value)}
          />
          <View style={{ height: 24 }}></View>

          <InputComp
            label="Email Addres"
            value={form.value}
            onChangeText={(value) => setForm("email", value)}
          />
          <View style={{ height: 24 }}></View>

          <InputComp
            label="Password"
            secureTextEntry
            value={form.value}
            onChangeText={(value) => setForm("password", value)}
          />
          <View style={{ height: 40 }}></View>

          <ButtonComp title="Continue" onPress={handleSubmit} />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 40,
  },
  page: {
    marginTop: 30,
  },
});
