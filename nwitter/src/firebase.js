import firebase from "firebase/app";
import "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyDUflf9jtTW1RlfunGOek1zdCwHuXyZKBE",
    authDomain: "nwiiter-e2a01.firebaseapp.com",
    projectId: "nwiiter-e2a01",
    storageBucket: "nwiiter-e2a01.appspot.com",
    messagingSenderId: "358312510198",
    appId: "1:358312510198:web:719a3645be4249426722d7"
  };

firebase.initializeApp(firebaseConfig);

export const authService = firebase.auth();