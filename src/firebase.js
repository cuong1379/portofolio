import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { collection, addDoc } from "@firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-lfUt1adpQYcFFW_oAWTJVfHDOOZy8",
  authDomain: "portofolio-web-3e8.firebaseapp.com",
  projectId: "portofolio-web-3e8",
  storageBucket: "portofolio-web-3e8.appspot.com",
  messagingSenderId: "251955306",
  appId: "1:25195509306:web:2b6dcf997137bf612703"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc };