import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import ButtomTabNavigator from "./src/components/Tab/ButtomTabNavigator";
import Chating from "./src/pages/Chating";
import ChooseDoctor from "./src/pages/ChooseDoctor";
import DoctorProfile from "./src/pages/DoctorProfile";
import EditProfile from "./src/pages/EditProfile";
import Getstarted from "./src/pages/Getstarted";
import Login from "./src/pages/Login";
import Chat from "./src/pages/mainApp/Chat";
import Home from "./src/pages/mainApp/Home";
import Hospital from "./src/pages/mainApp/Hospital";
import ProfileUser from "./src/pages/mainApp/ProfileUser";
import Register from "./src/pages/Register";
import Splash from "./src/pages/Splash";
import UploadPhoto from "./src/pages/UploadPhoto";

// Create Stack Navigation
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// Tab navigator
const MainApp = () => {
  return (
    <Tab.Navigator tabBar={(props) => <ButtomTabNavigator {...props} />}>
      <Tab.Screen name="Doctor" component={Home} />
      <Tab.Screen name="Hospital" component={Hospital} />
      <Tab.Screen name="Chat" component={Chat} />
    </Tab.Navigator>
  );
};

// Stack Navigation

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="UploadPhoto">
        <Stack.Screen
          name="Getstarted"
          component={Getstarted}
          options={{
            title: "Welcome",
            headerShown: false,
            // headerStyle: { backgroundColor: "red" },
          }}
        />
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{
            title: "Welcome",
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            title: "Login",
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{
            title: "Login",
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="UploadPhoto"
          component={UploadPhoto}
          options={{
            title: "Login",
            headerShown: false,
          }}
        />
        {/* register the Tab */}
        <Stack.Screen
          name="MainApp"
          component={MainApp}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="ChoseDoctor"
          component={ChooseDoctor}
          options={{
            title: "Login",
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Chating"
          component={Chating}
          options={{
            // title: "Login",
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Profile"
          component={ProfileUser}
          options={{
            // title: "Login",
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Edit-Profile"
          component={EditProfile}
          options={{
            // title: "Login",
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Doctor-Profile"
          component={DoctorProfile}
          options={{
            // title: "Login",
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
