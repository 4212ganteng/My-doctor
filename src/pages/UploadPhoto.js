import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import HeaderComp from "../components/HeaderComp";
import { ILBtnAdd, photoNull } from "../assets/illustration";
import ButtonComp from "../components/ButtonComp";
import LinkComp from "../components/LinkComp";
import GapComp from "../components/GapComp";

export default function UploadPhoto({ navigation }) {
  return (
    <View style={styles.page}>
      <HeaderComp title="Upload Photo" onPress={() => navigation.goBack()} />
      <View style={styles.content}>
        <View style={styles.profile}>
          <View style={styles.wrapperAvatar}>
            <Image source={photoNull} style={styles.avatar} />
            <ILBtnAdd style={styles.addPhoto} />
          </View>
          <Text style={styles.name}>Shayna Melinda</Text>
          <Text style={styles.profession}>Product Desainer</Text>
        </View>
        <View>
          <ButtonComp
            title="Upload and Continue"
            onPress={() => navigation.replace("MainApp")}
          />
          <GapComp height={30} />
          <LinkComp
            title="Skip for this"
            align="center"
            size={16}
            onPress={() => navigation.replace("MainApp")}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "white",
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 130 / 2,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  addPhoto: {
    position: "absolute",
    bottom: 8,
    right: 6,
  },
  name: {
    fontSize: 24,
    color: "red",
    textAlign: "center",
  },
  profession: {
    fontSize: 18,
    textAlign: "center",
  },
  content: {
    paddingHorizontal: 40,
    flex: 1,
    justifyContent: "space-between",
    paddingBottom: 64,
  },
  wrapperAvatar: {
    width: 130,
    height: 130,
  },
  profile: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
