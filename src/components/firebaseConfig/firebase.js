// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getFirestore} from "@firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAr8kv4IHJCcuxngchWe4LbT51Dt6sIYnk",
  authDomain: "zstore-36240.firebaseapp.com",
  projectId: "zstore-36240",
  storageBucket: "zstore-36240.appspot.com",
  messagingSenderId: "339521151045",
  appId: "1:339521151045:web:941f90979cd3309100432c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app) 