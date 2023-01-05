import { StyleSheet, Text, View } from "react-native";
import React from "react";
import HeaderComp from "../components/HeaderComp";
import ProfileComp from "../components/ProfileComp";
import InputComp from "../components/InputComp";
import ButtonComp from "../components/ButtonComp";
import GapComp from "../components/GapComp";
import { ILBtnremove } from "../assets";

export default function EditProfile({ navigation }) {
  return (
    <View>
      <HeaderComp title="Daftar Akun" onPress={() => navigation.goBack()} />

      <View style={styles.photo}>
        <ProfileComp isRemove={true} />
      </View>
      <View style={styles.content}>
        <InputComp label="Full Name" />
        <GapComp height={24} />
        <InputComp label="Pekerjaan" />
        <GapComp height={24} />
        <InputComp label="Email Address" />
        <GapComp height={24} />
        <InputComp label="Password" />
        <GapComp height={40} />
        <ButtonComp title="Save Profile" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    marginTop: 26,
    marginHorizontal: 40,
  },
  photo: {
    marginTop: 40,
  },
});
