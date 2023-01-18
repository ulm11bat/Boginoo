// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC6aQOdRiQ-sbWToEc4rA4rSJ6bPOQ-tic",
  authDomain: "bogino-url.firebaseapp.com",
  projectId: "bogino-url",
  storageBucket: "bogino-url.appspot.com",
  messagingSenderId: "1050931995042",
  appId: "1:1050931995042:web:e592b948f8697684dc12fb",
  measurementId: "G-ELTLXG3LRM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);