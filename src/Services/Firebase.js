// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAnNtjEM_N8pKTNmIVnUHcpx7pmMECpKTM",
  authDomain: "auth-655d7.firebaseapp.com",
  projectId: "auth-655d7",
  storageBucket: "auth-655d7.firebasestorage.app",
  messagingSenderId: "1068071862616",
  appId: "1:1068071862616:web:02f59e418c8e42f113a52d",
  measurementId: "G-7EE4H62X34",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
// database 
 export const db = getFirestore(app);

const analytics = getAnalytics(app);