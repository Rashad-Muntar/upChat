
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAJdx1RnVT-p_bOVKxQBDL3zhSU57FcoL0",
  authDomain: "chat-aaf78.firebaseapp.com",
  databaseURL: "https://chat-aaf78-default-rtdb.firebaseio.com",
  projectId: "chat-aaf78",
  storageBucket: "chat-aaf78.appspot.com",
  messagingSenderId: "722284002138",
  appId: "1:722284002138:web:f1f96464ff1884c5b25163"
};

export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)