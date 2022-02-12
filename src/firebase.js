import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import "firebase/compat/firestore"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB18lE07Flk7q0QXpo4Tfcp29cScA8cx08",
  authDomain: "clone-99d75.firebaseapp.com",
  projectId: "clone-99d75",
  storageBucket: "clone-99d75.appspot.com",
  messagingSenderId: "572525949510",
  appId: "1:572525949510:web:cb9e1a4e71c09075a5d047",
  measurementId: "G-MS9NDK0EXE",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };