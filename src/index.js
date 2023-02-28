// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDoBO5QmxDXyRvZakrwvR0Znj-FvJ0EusM",
  authDomain: "azisstartingfirebase.firebaseapp.com",
  projectId: "azisstartingfirebase",
  storageBucket: "azisstartingfirebase.appspot.com",
  messagingSenderId: "164785851243",
  appId: "1:164785851243:web:404802d71f1e75d318da2e",
  measurementId: "G-B3YXW82ELK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
console.log(app);