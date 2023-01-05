import { StyleSheet, Text, View } from "react-native";
import React from "react";
import HeaderComp from "../components/HeaderComp";
import DoctorRtaed from "../components/DoctorRtaed";
import ListDoctor from "../components/ListDoctor";
import GapComp from "../components/GapComp";
import { DumyDoctor2 } from "../assets";

export default function ChooseDoctor({ navigation }) {
  return (
    <View>
      <HeaderComp
        title={"Pilih Dokter Anak"}
        type={"dark"}
        onPress={() => navigation.goBack()}
      />
      <View style={styles.content}>
        <ListDoctor
          type={"dark"}
          img={DumyDoctor2}
          name="John McParker Steve"
          desc="Wanita"
          onPress={() => navigation.navigate("Chating")}
        />
        <ListDoctor
          type={"dark"}
          img={DumyDoctor2}
          name="John McParker Steve"
          desc="Wanita"
        />
        <ListDoctor
          type={"dark"}
          img={DumyDoctor2}
          name="John McParker Steve"
          desc="Wanita"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    marginTop: 30,
    paddingHorizontal: 16,
  },
});
