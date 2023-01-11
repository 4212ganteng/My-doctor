import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { photoNull } from "../../assets";
import DoctorCategory from "../../components/DoctorCategory";
import DoctorRtaed from "../../components/DoctorRtaed";
import GapComp from "../../components/GapComp";
import NewsComp from "../../components/NewsComp";
import SectProfile from "../../components/SectProfile";
import { getData } from "../../utils/LocalStorage";

export default function Home({ navigation }) {
  const [profile, setProfile] = useState({
    photo: <photoNull />,
    fullName: "",
    profession: "",
    uid: "",
  });

  useEffect(() => {
    getData("user").then((res) => {
      console.log("data user", res);
      setProfile(res);
    });
  }, []);

  console.log(profile.photo);
  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.wrapperSection}>
            <GapComp height={30} />
            <SectProfile
              img={{ uri: profile.photo }}
              name={profile.fullName}
              desc={profile.profession}
              onPress={() => navigation.navigate("Profile")}
            />
            <Text style={styles.welcome}>
              Mau konsultasi dengan siapa hari ini?
            </Text>
          </View>
          <View style={styles.wrapperScroll}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={styles.category}>
                {/* biar g kepotong pas scroll */}
                <GapComp width={32} />
                <DoctorCategory
                  onPress={() => navigation.navigate("ChoseDoctor")}
                />
                <DoctorCategory />
                <DoctorCategory />
                <DoctorCategory />
                <DoctorCategory />
                <GapComp width={22} />
              </View>
            </ScrollView>
          </View>
          <View style={styles.wrapperSection}>
            <Text style={styles.sectionlabel}>Top Rated Doctors</Text>
            <DoctorRtaed
              onPress={() => navigation.navigate("Doctor-Profile")}
            />
            <DoctorRtaed
              onPress={() => navigation.navigate("Doctor-Profile")}
            />
            <DoctorRtaed
              onPress={() => navigation.navigate("Doctor-Profile")}
            />
            <DoctorRtaed
              onPress={() => navigation.navigate("Doctor-Profile")}
            />
            <Text style={styles.sectionlabel}>Good News</Text>
          </View>
          <NewsComp />
          <NewsComp />
          <NewsComp />
          <NewsComp />
          <GapComp height={30} />
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  category: {
    flexDirection: "row",
  },
  page: {
    flex: 1,
    backgroundColor: "#112340",
  },
  welcome: {
    fontSize: 20,
    // textAlign: "center",
    marginTop: 30,
    marginBottom: 16,
    maxWidth: 209,
  },
  wrapperScroll: {
    marginHorizontal: -16,
  },
  container: {
    // paddingVertical: 30,
    paddingHorizontal: 16,
    flex: 1,
    backgroundColor: "white",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  sectionlabel: {
    fontSize: 16,
    marginTop: 13,
    marginBottom: 16,
  },
  wrapperSection: { paddingHorizontal: 16 },
});
