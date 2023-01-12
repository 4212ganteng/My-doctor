import { getAuth, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { showMessage } from "react-native-flash-message";
import { DumyProfile1, ILProfile1 } from "../../assets";
import HeaderComp from "../../components/HeaderComp";
import ListDoctor from "../../components/ListDoctor";
import ProfileComp from "../../components/ProfileComp";
import { getData } from "../../utils/LocalStorage";
import { useForm } from "../../utils/useForm";

export default function ProfileUser({ navigation }) {
  const [profile, setProfile] = useState({
    fullName: "",
    profession: "",
    email: "",
    password: "",
    uid: "",
    photo: ILProfile1,
  });

  useEffect(() => {
    getData("user").then((res) => {
      const data = res;
      data.photo = { uri: res.photo };
      setProfile(data);
      console.log("res profile", res);
    });
  }, []);

  const logout = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        showMessage({
          message: "Anda Berhasil Logout ",
          description: "Logout Success",
          type: "success",
          statusBarHeight: 10,
        });
        navigation.replace("Getstarted");
      })
      .catch((error) => {
        // An error happened.
        console.log(error.message);
      });
  };

  console.log(profile, "profilee");

  return (
    <View>
      <HeaderComp title="Profile" onPress={() => navigation.goBack()} />
      <View style={styles.profile}>
        <ProfileComp
          name={profile.fullName}
          desc={profile.profession}
          img={profile.photo}
        />
      </View>
      <View style={styles.list}>
        <ListDoctor
          img={DumyProfile1}
          name="Edit Profile"
          desc="Last updated yesterday"
          type="dark"
          onPress={() => navigation.navigate("Edit-Profile")}
        />
        <ListDoctor
          img={DumyProfile1}
          name="Language"
          desc="Available 12 languages"
          type="dark"
        />
        <ListDoctor
          img={DumyProfile1}
          name="Give Us Rate"
          desc="On Google Play Store"
          type="dark"
        />
        <ListDoctor
          img={DumyProfile1}
          name="Logout"
          desc="Read our guidelines"
          type="dark"
          onPress={logout}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  list: {
    marginHorizontal: 16,
  },
  profile: {
    marginTop: 50,
    marginBottom: 50,
  },
});
