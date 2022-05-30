import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyCbjk7gAzHQC-aLvc1Wl1vboZdn3v1Z5ew",
    authDomain: "react-tutorial-6765c.firebaseapp.com",
    projectId: "react-tutorial-6765c",
    storageBucket: "react-tutorial-6765c.appspot.com",
    messagingSenderId: "734018556645",
    appId: "1:734018556645:web:8bb3581072bcb5a5397a0c",
    measurementId: "G-HCQBMMKDDX"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);