import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCEs0qVU2tVs89OtglbqOTe6TxnNS6aXis",
  authDomain: "real-bite.firebaseapp.com",
  projectId: "real-bite",
  storageBucket: "real-bite.appspot.com",
  messagingSenderId: "518152039251",
  appId: "1:518152039251:web:036e20287add7b5a788fa6",
  measurementId: "G-CKQBRNW8S6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
