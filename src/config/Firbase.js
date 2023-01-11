import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBpzAfnV3jQbHduRDg3PPTwTb-N5YaWomg",
  authDomain: "my-doctor-79339.firebaseapp.com",
  projectId: "my-doctor-79339",
  storageBucket: "my-doctor-79339.appspot.com",
  messagingSenderId: "564873384842",
  appId: "1:564873384842:web:a6acd67581d650c451ae73",
  databaseURL:
    "https://my-doctor-79339-default-rtdb.asia-southeast1.firebasedatabase.app/",
};

// Initialize Firebase
export const Configfire = initializeApp(firebaseConfig);
// Initialize Realtime Database and get a reference to the service
export const Database = getDatabase(Configfire);
export const auth = getAuth();
