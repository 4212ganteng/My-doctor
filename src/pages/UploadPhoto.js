import * as ImagePicker from "expo-image-picker";
import { ref, update } from "firebase/database";
import { doc, getFirestore, updateDoc } from "firebase/firestore";
import React, { useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { ILBtnAdd, ILBtnremove, photoNull } from "../assets/illustration";
import ButtonComp from "../components/ButtonComp";
import GapComp from "../components/GapComp";
import HeaderComp from "../components/HeaderComp";
import LinkComp from "../components/LinkComp";
import { Database } from "../config/Firbase";
import { storeData } from "../utils/LocalStorage";

export default function UploadPhoto({ navigation, route }) {
  // parameter ROUTE  untuk menangkap data yang di kirim😉
  const { fullName, profession, uid } = route.params;

  const [hasPhoto, setHasPhoto] = React.useState(false);
  const [photo, setPhoto] = useState(photoNull);
  const [photDB, setPhotoDB] = useState("");
  const GetPhoto = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log("ini data photo", result);
    if (!result.canceled) {
      const dataPoto = { uri: result.assets[0].uri };

      setPhoto(dataPoto);
      setHasPhoto(true);
      setPhotoDB(dataPoto.uri);
      console.log("ini data photo db", photDB);
    }
  };

  const UpPhotoDB = async () => {
    try {
      // update db
      update(ref(Database, "users/" + uid), {
        photo: photDB,
      });
      // save local storage +poto
      const data = route.params;
      data.photo = photo;
      storeData("user", data);
      navigation.navigate("MainApp");
    } catch (e) {
      console.log("err", e);
    }
  };

  return (
    <View style={styles.page}>
      <HeaderComp title="Upload Photo" onPress={() => navigation.goBack()} />
      <View style={styles.content}>
        <View style={styles.profile}>
          <TouchableOpacity style={styles.wrapperAvatar} onPress={GetPhoto}>
            <Image source={photo} style={styles.avatar} />
            {/* icon add and remove photo */}
            {hasPhoto && <ILBtnremove style={styles.addPhoto} />}
            {!hasPhoto && <ILBtnAdd style={styles.addPhoto} />}
          </TouchableOpacity>
          <Text style={styles.name}>{fullName}</Text>
          <Text style={styles.profession}>{profession}</Text>
        </View>
        <View>
          <ButtonComp
            disable={!hasPhoto}
            title="Upload and Continue"
            onPress={UpPhotoDB}
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
