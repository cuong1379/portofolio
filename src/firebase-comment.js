import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { collection, addDoc } from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDJPq9a0YPoQYkpQ-7aXQRXzzqOKzFA",
    authDomain: "web-kelas-tes.ebaseapp.com",
    projectId: "web-kes-tes",
    storageBucket: "web-kel-tes.appspot.com",
    messagingSenderId: "8908133268",
    appId: "1:890817433268:web:11e525864a6174c11e1"
};

// Initialize with a unique name
const app = initializeApp(firebaseConfig, 'comments-app');
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage, collection, addDoc };