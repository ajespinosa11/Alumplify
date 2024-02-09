// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBmnBYvCP-OsBJaPtyV-ATYT9VoQomGxKs",
  authDomain: "alumplify.firebaseapp.com",
  projectId: "alumplify",
  storageBucket: "alumplify.appspot.com",
  messagingSenderId: "41923010812",
  appId: "1:41923010812:web:1faa6feecf89758dbbf779",
  measurementId: "G-PZZ4LN4565"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const alumniImageDB = getStorage(app)