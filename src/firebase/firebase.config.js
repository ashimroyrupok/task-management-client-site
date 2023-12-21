// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBrHy0-sjF4zhN0WBbF5n8uD-4OAI8W0NQ",
  authDomain: "simple-firebase-22ff7.firebaseapp.com",
  projectId: "simple-firebase-22ff7",
  storageBucket: "simple-firebase-22ff7.appspot.com",
  messagingSenderId: "693989961905",
  appId: "1:693989961905:web:9c5b12946ad370f570b290"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


export default auth;