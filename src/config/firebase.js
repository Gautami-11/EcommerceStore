// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyB0_Wi5qnZPBiIxEzMkr5ytc6V0vqo4tHQ",
  authDomain: "arvika-jewels.firebaseapp.com",
  projectId: "arvika-jewels",
  storageBucket: "arvika-jewels.firebasestorage.app",
  messagingSenderId: "939557312572",
  appId: "1:939557312572:web:904c1a6a6ae08fc4374b39",
  measurementId: "G-HN26CM8V64"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth(app);