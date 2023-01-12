import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import HeaderComp from "../components/HeaderComp";
import ProfileComp from "../components/ProfileComp";
import InputComp from "../components/InputComp";
import ButtonComp from "../components/ButtonComp";
import GapComp from "../components/GapComp";
import { ILBtnremove, ILProfile1, photoNull } from "../assets";
import { getData, storeData } from "../utils/LocalStorage";
import { ScrollView } from "react-native-gesture-handler";
import { getDatabase, ref, set } from "firebase/database";
import * as ImagePicker from "expo-image-picker";
import { showMessage } from "react-native-flash-message";
import {
  getAuth,
  reauthenticateWithCredential,
  updatePassword,
  promptForCredentials,
  onAuthStateChanged,
  updateCurrentUser,
} from "firebase/auth";

export default function EditProfile({ navigation }) {
  const [profile, setProfile] = useState({
    fullName: "",
    email: "",
    profession: "",
    uid: "",
  });

  // kenapa di pisah?
  // biar g kesimpen di localstorage aja
  const [password, setPassword] = useState("");
  const [photoDB, setPhotoDB] = useState("");
  const [photo, setPhoto] = useState(photoNull);

  // call localstorage
  useEffect(() => {
    getData("user").then((res) => {
      const data = res;
      console.log("resss", data);
      setPhoto({ uri: data.photo });
      setProfile(data);
    });
  }, []);

  // handle change
  const handleChange = (key, value) => {
    setProfile({
      ...profile,
      [key]: value,
    });
  };

  // update to db
  const Update = () => {
    if (password.length > 0) {
      if (password.length < 6) {
        showMessage({
          message: "Gagal ubah password ",
          description: "Password minimal 6 character",
          type: "danger",
          statusBarHeight: 10,
        });
      } else {
        updatePass();
        updateData();
        navigation.navigate("MainApp");
      }
    } else {
      updateData();
      navigation.navigate("MainApp");
    }
  };

  // updatePassword
  const updatePass = () => {
    updatePassword(getAuth().currentUser, password)
      .then(() => {
        console.log("success change pw");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  // Update data
  const updateData = () => {
    const data = profile;
    if (photoDB != "") {
      data.photo = photoDB;
    } else {
      data.photo = photo;
    }
    console.log("data send db", data);
    // update
    const db = getDatabase();
    set(ref(db, "users/" + profile.uid), data)
      .then(() => {
        // Data saved successfully!

        // save to localstorage
        storeData("user", data);
        showMessage({
          message: "Succes update Profile",
          description: "Update Profile",
          type: "success",
          statusBarHeight: 10,
        });
      })
      .catch((error) => {
        const errorMessage = error.message;
        showMessage({
          message: "failed to Register",
          description: errorMessage,
          type: "danger",
          statusBarHeight: 10,
        });
      });
  };

  // get photo
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
      setPhotoDB(dataPoto.uri);
      console.log("ini data photo db", photoDB);
    }
  };

  return (
    <View>
      <HeaderComp title="Daftar Akun" onPress={() => navigation.goBack()} />
      <ScrollView>
        <View style={styles.photo}>
          <ProfileComp isRemove img={photo} onPress={GetPhoto} />
        </View>
        <View style={styles.content}>
          <InputComp
            label="Full Name"
            name="fullName"
            value={profile.fullName}
            onChangeText={(value) => handleChange("fullName", value)}
          />
          <GapComp height={24} />
          <InputComp
            name="profession"
            label="Pekerjaan"
            value={profile.profession}
            onChangeText={(value) => handleChange("profession", value)}
          />
          <GapComp height={24} />
          <InputComp
            label="Email Address"
            value={profile.email}
            onChangeText={(value) => handleChange("email", value)}
            disable
          />
          <GapComp height={24} />
          <InputComp
            label="Password"
            secureTextEntry
            onChangeText={(value) => setPassword(value)}
          />
          <GapComp height={40} />
          <ButtonComp title="Save Profile" onPress={Update} />
        </View>
      </ScrollView>
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
