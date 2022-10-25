import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCRhkYeO88FF4ZCGj7h_13_PCihGozGUvY",
  authDomain: "products-app-2d801.firebaseapp.com",
  projectId: "products-app-2d801",
  storageBucket: "products-app-2d801.appspot.com",
  appId: "1:1045727919324:web:d10f486697715ba169c819",
  measurementId: "G-5VWVBCK29H",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
