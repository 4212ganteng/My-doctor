import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { showMessage } from "react-native-flash-message";
import { ScrollView } from "react-native-gesture-handler";
import ButtonComp from "../components/ButtonComp";
import HeaderComp from "../components/HeaderComp";
import InputComp from "../components/InputComp";
import { db, fire } from "../config/Firbase";
import LoadingComp from "../utils/LoadingComp";
import { storeData } from "../utils/LocalStorage";
import { useForm } from "../utils/useForm";

export default function Register({ navigation }) {
  const [loading, setLoading] = useState(false);
  //  call the custom hook useForm from utils
  const [form, setForm] = useForm({
    fullName: "",
    profession: "",
    email: "",
    password: "",
    uid: "",
  });
  const handleSubmit = () => {
    setLoading(true);
    // console.log("ini data form", form);
    // fire dari config yang kita buat tdi
    const auth = getAuth(fire);
    createUserWithEmailAndPassword(auth, form.email, form.password).then(
      async (res) => {
        // reset form input
        setForm("reset");

        //  save data to DB😉
        try {
          // db from config fire
          const docRef = await addDoc(collection(db, "users"), form);
          setForm((form.uid = docRef.id));

          // save data to local storage with key user and value form 😉
          storeData("user", form);
          // navigate dan bawa data 😂
          navigation.navigate("UploadPhoto", form);

          console.log("Succes regist ", form);
          setLoading(false);
        } catch (e) {
          setLoading(false);

          const errorMessage = error.message;
          showMessage({
            message: "failed to Register",
            description: errorMessage,
            type: "danger",
            statusBarHeight: 10,
          });
        }
      }
    );
  };
  return (
    <>
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

      {loading && <LoadingComp />}
    </>
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
