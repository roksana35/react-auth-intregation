// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCilEXkBmufuwKKL32lilTGlTCUq7gaMn0",
  authDomain: "react-a-project.firebaseapp.com",
  projectId: "react-a-project",
  storageBucket: "react-a-project.appspot.com",
  messagingSenderId: "481848844374",
  appId: "1:481848844374:web:fc08474a49d1eb987a1bf7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;