// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCNErQtqTs041XcvE7tZVC9xITSP5zPBAw",
  authDomain: "employee-appp.firebaseapp.com",
  projectId: "employee-appp",
  storageBucket: "employee-appp.appspot.com",
  messagingSenderId: "1075174436426",
  appId: "1:1075174436426:web:a881d863ed7c5d8037c0b3",
  measurementId: "G-LH531D4HKH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);