// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAL97bGASw5xMxLRK9svZUBj8Q8-pFtJE0",
  authDomain: "dragon-news-e4024.firebaseapp.com",
  projectId: "dragon-news-e4024",
  storageBucket: "dragon-news-e4024.appspot.com",
  messagingSenderId: "21937188198",
  appId: "1:21937188198:web:27742e231022e5d2bbeca7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);