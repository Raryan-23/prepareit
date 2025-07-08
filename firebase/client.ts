import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBcRF0DyRywsyyRgC2L8GsXVcFEXs-WsYY",
  authDomain: "prepareit-23.firebaseapp.com",
  projectId: "prepareit-23",
  storageBucket: "prepareit-23.firebasestorage.app",
  messagingSenderId: "670940580364",
  appId: "1:670940580364:web:4382a8dbc6d195e57a7c29",
  measurementId: "G-S95SQP6MTC"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app)