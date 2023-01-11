import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { ref, set } from "firebase/database";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { showMessage } from "react-native-flash-message";
import { ScrollView } from "react-native-gesture-handler";
import ButtonComp from "../components/ButtonComp";
import HeaderComp from "../components/HeaderComp";
import InputComp from "../components/InputComp";
import { auth, Database, fire } from "../config/Firbase";
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
  const handleSubmit = async () => {
    setLoading(true);
    try {
      const createUser = await createUserWithEmailAndPassword(
        auth,
        form.email,
        form.password
      );
      setForm((form.uid = createUser.user.uid));
      const id = createUser.user.uid;
      console.log(id);

      //  save DB
      try {
        console.log("on trycatch", id);

        // g tau harus d pecah
        const saved = set(ref(Database, `/users/` + id), {
          fullName: form.fullName,
          profession: form.profession,
          email: form.email,
          password: form.password,
          uid: form.uid,
        });
        storeData("user", saved);
        setLoading(false);
        navigation.replace("UploadPhoto", form);
      } catch (error) {
        setLoading(false);
        const errsavedb = error.message;
        showMessage({
          message: "failed to Register",
          description: errsavedb,
          type: "danger",
          statusBarHeight: 10,
        });
      }
    } catch (error) {
      setLoading(false);
      const errorMessage = error.message;
      showMessage({
        message: "failed to Register",
        description: errorMessage,
        type: "danger",
        statusBarHeight: 10,
      });
    }
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
