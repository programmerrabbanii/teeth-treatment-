// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCAdRLfHRu4ZEp2JTpA5Tw091CkL_nwVPM",
  authDomain: "dental-treatment-adddb.firebaseapp.com",
  projectId: "dental-treatment-adddb",
  storageBucket: "dental-treatment-adddb.firebasestorage.app",
  messagingSenderId: "99026738154",
  appId: "1:99026738154:web:c57fb93f6ea79d6d2ff093"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth