import firebase from "firebase/compat/app";
import { getAuth } from "firebase/auth";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBJ7s0YWlNj5pJLTbZX1qvJe87LVM4q6qw",
  authDomain: "one-11244.firebaseapp.com",
  projectId: "one-11244",
  storageBucket: "one-11244.appspot.com",
  messagingSenderId: "94596479712",
  appId: "1:94596479712:web:2a1dc66b8c89bf1b902e85",
};

const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = app.firestore();
