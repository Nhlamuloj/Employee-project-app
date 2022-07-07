
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from  "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDawLg-EnLal_aa3DXDxHZeLv4AgkbvG3g",
  authDomain: "employee-app-f2609.firebaseapp.com",
  projectId: "employee-app-f2609",
  storageBucket: "employee-app-f2609.appspot.com",
  messagingSenderId: "203762991495",
  appId: "1:203762991495:web:e421ef1897988e629c1322",
  measurementId: "G-T40264CM0C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);