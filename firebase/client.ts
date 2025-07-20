// Import the functions you need from the SDKs you need
import { initializeApp, getApps,getApp } from "firebase/app";
import { getAuth}   from "firebase/auth";
import { getFirestore} from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyBIPZ4bVXSJ_MIo7C3YMyoPTkATQETEK2g",
    authDomain: "prepwise-44b97.firebaseapp.com",
    projectId: "prepwise-44b97",
    storageBucket: "prepwise-44b97.firebasestorage.app",
    messagingSenderId: "419591756356",
    appId: "1:419591756356:web:e2c76f8a2f6752b5627a11",
    measurementId: "G-V263C0FDWY"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApps();

export const auth = getAuth(app);
export const  db = getFirestore(app);