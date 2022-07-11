// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{getFirestore}from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyCZlxBqI5FL02A076cUz70fQ1Od1bht_vE",
  authDomain: "employee-359f2.firebaseapp.com",
  projectId: "employee-359f2",
  storageBucket: "employee-359f2.appspot.com",
  messagingSenderId: "108307130054",
  appId: "1:108307130054:web:f0a36d7dc6be69188119c7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db=getFirestore(app)