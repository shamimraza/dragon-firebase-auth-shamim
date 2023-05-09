// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA1PzwrnXjr0zJ0mnCMHX_lhS8wldAy6DM",
  authDomain: "dragon-news-firebase-7639a.firebaseapp.com",
  projectId: "dragon-news-firebase-7639a",
  storageBucket: "dragon-news-firebase-7639a.appspot.com",
  messagingSenderId: "242401369683",
  appId: "1:242401369683:web:16ba62ef0dca1f6dae70a6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;