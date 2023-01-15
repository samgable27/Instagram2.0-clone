// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAKlh4naLJi4sHMsnkNFb3FQTQ7zxakI0A",
  authDomain: "instagram2-clone-58720.firebaseapp.com",
  projectId: "instagram2-clone-58720",
  storageBucket: "instagram2-clone-58720.appspot.com",
  messagingSenderId: "1069288729333",
  appId: "1:1069288729333:web:8ca1d8335bf55aaabab3bc",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { db, storage, app };
