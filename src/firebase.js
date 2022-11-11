/* eslint-disable no-unused-vars */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAcDDHaHZPMxYrRNL6u4rPL9efjRHfDtTg",
  authDomain: "management-bcd76.firebaseapp.com",
  databaseURL:
    "https://management-bcd76-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "management-bcd76",
  storageBucket: "management-bcd76.appspot.com",
  messagingSenderId: "974318915124",
  appId: "1:974318915124:web:f711098792d62a3b870461",
  measurementId: "G-V2NQ76318M",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getDatabase(app);
