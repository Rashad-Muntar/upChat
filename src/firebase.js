import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD1yjhQ4_KUqJ1ihk9dmMGqXFNOonL-oMU",
  authDomain: "upchat-b67b1.firebaseapp.com",
  projectId: "upchat-b67b1",
  storageBucket: "upchat-b67b1.appspot.com",
  messagingSenderId: "1021424592661",
  appId: "1:1021424592661:web:7f682d7aef598eea7aeb1c",
};

export const app = initializeApp(firebaseConfig);
export const firebase = initializeApp(firebaseConfig);

export const db = getFirestore(app);
