// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAh4AoVx1ZlM03b1XDJgbW6I92Dgb0L7G4",
  authDomain: "spiritcomputacion-e3c81.firebaseapp.com",
  projectId: "spiritcomputacion-e3c81",
  storageBucket: "spiritcomputacion-e3c81.appspot.com",
  messagingSenderId: "475927389365",
  appId: "1:475927389365:web:7728feb97e2dea8d2bcafc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)