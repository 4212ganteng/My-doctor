import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { child, get, getDatabase, ref } from "firebase/database";
import { collection, doc, getDoc, getFirestore } from "firebase/firestore";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { showMessage } from "react-native-flash-message";
import { ILlogo } from "../assets/illustration";
import ButtonComp from "../components/ButtonComp";
import InputComp from "../components/InputComp";
import LinkComp from "../components/LinkComp";
import { fire } from "../config/Firbase";
import LoadingComp from "../utils/LoadingComp";
import { storeData } from "../utils/LocalStorage";
import { useForm } from "../utils/useForm";

export default function Login({ navigation }) {
  const [loading, setLoading] = useState(false);

  const [data, setData] = useForm({
    fullName: "",
    profession: "",
    email: "",
    password: "",
    uid: "",
  });

  const Login = () => {
    setLoading(true);
    const auth = getAuth();
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then(async (res) => {
        // Signed in
        console.log("data login", res);
        const id = res.user.uid;
        try {
          const dbRef = ref(getDatabase());
          const dataDB = await get(child(dbRef, `users/${id}`));
          // console.log("data dbbbbbbbb", dataDB);
          if (dataDB.exists()) {
            // simpen ke localStorage
            storeData("user", dataDB.val());
            setLoading(false);
            navigation.replace("MainApp");
            // console.log("data from db", dataDB.val());
          } else {
            console.log("No data available");
          }
          setLoading(false);
        } catch (error) {
          setLoading(false);
          showMessage({
            message: "Login gagal",
            description: error.message,
            type: "danger",
            statusBarHeight: 10,
          });

          console.log("err get db", error);
        }
      })
      .catch((error) => {
        setLoading(false);
        showMessage({
          message: "Login gagal",
          description: error.message,
          type: "danger",
          statusBarHeight: 10,
        });
        console.log(error);
      });
  };

  return (
    <>
      <View style={styles.container}>
        <ILlogo />
        <Text style={styles.text}>Masuk dan mulai berkonsultasi</Text>
        <View style={{ height: 40 }}></View>

        <InputComp
          label="Email Address"
          value={data.email}
          onChangeText={(value) => setData("email", value)}
        />
        <View style={{ height: 24 }}></View>

        <InputComp
          label="Password"
          onChangeText={(value) => setData("password", value)}
          value={data.password}
          secureTextEntry
        />
        <View style={{ height: 10 }}></View>

        <LinkComp title="Forgot My Password" size="13" />
        <View style={{ height: 40 }}></View>

        <ButtonComp title="Sign In" onPress={Login} />
        <View style={{ height: 30 }}></View>

        <LinkComp
          title="Create New Account"
          size="16"
          align="center"
          onPress={Login}
        />
      </View>

      {loading && <LoadingComp />}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 40,
    flex: 1,
    marginTop: 40,
  },
  text: {
    color: "#FFF",
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 40,
    maxWidth: 170,
  },
});
