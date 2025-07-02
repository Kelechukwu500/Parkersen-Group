// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyDlJf4_1NGnwAmTnMOBEVI33ZxtyHJHyYw",
  authDomain: "parkersen-group.firebaseapp.com",
  projectId: "parkersen-group",
  storageBucket: "parkersen-group.firebasestorage.app",
  messagingSenderId: "805645112503",
  appId: "1:805645112503:web:fb1a23bd71beae81512932",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Firestore database instance
const db = getFirestore(app);
export default db;
