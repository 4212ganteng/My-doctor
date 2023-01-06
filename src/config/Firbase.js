// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBpzAfnV3jQbHduRDg3PPTwTb-N5YaWomg",
  authDomain: "my-doctor-79339.firebaseapp.com",
  projectId: "my-doctor-79339",
  storageBucket: "my-doctor-79339.appspot.com",
  messagingSenderId: "564873384842",
  appId: "1:564873384842:web:a6acd67581d650c451ae73",
};
// Initialize Firebase
export const fire = initializeApp(firebaseConfig);
// Initialize Realtime Database and get a reference to the service

export const db = getFirestore(fire);
// exportt biar bisa di gunakan dimna aja
