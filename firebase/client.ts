// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  
  apiKey: "AIzaSyD4z_rlY6tPgZdoCJuuNVQrG1JqeZbJw-g",
  authDomain: "prepwise-1932e.firebaseapp.com",
  projectId: "prepwise-1932e",
  storageBucket: "prepwise-1932e.firebasestorage.app",
  messagingSenderId: "233385960823",
  appId: "1:233385960823:web:32a7f52f2c19c6764ced72",
  measurementId: "G-J4R3JFCLPZ"
};




// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);
