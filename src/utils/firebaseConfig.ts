import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCs_7vYEtj75hOcLcS_NMX5NQPAjtVzatc",
  authDomain: "streamlee-aaf50.firebaseapp.com",
  projectId: "streamlee-aaf50",
  storageBucket: "streamlee-aaf50.appspot.com",
  messagingSenderId: "83228478535",
  appId: "1:83228478535:web:0140a7135f8d4b3e9e3562",
  measurementId: "G-Z5MWQJ5KV1"
};

// Initialize Firebase  
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
export const firebaseDB = getFirestore(app);

export const usersRef = collection(firebaseDB, "users");
export const meetingsRef = collection(firebaseDB, "meetings");