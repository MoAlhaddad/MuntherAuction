// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/storage";
import "firebase/compat/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const app = firebase.initializeApp({
  apiKey: "AIzaSyDJX18z6JLd_gVgRyFK-YrAL26nou80djY",
  authDomain: "muntherauto.firebaseapp.com",
  projectId: "muntherauto",
  storageBucket: "muntherauto.appspot.com",
  messagingSenderId: "426867890739",
  appId: "1:426867890739:web:31307a49c097df29666146",
  measurementId: "G-5TF22MF6Q3"
})

// Initialize Firebase

export const auth = app.auth()
export default app;
