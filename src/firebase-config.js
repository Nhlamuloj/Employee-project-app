
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCpE3Yq0GDN08odeGC7i1H0hgGTSum7HsU",
  authDomain: "employeeee-fe959.firebaseapp.com",
  projectId: "employeeee-fe959",
  storageBucket: "employeeee-fe959.appspot.com",
  messagingSenderId: "609542643860",
  appId: "1:609542643860:web:31ac8a8484fe3f948ad481",
  measurementId: "G-CKBDT9REQC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
