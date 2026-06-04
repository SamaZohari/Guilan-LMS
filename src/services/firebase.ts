import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAHfuCGS12JUg1V8g9MXXwrXiVtCKmdNWo",
  authDomain: "guilan-lms.firebaseapp.com",
  projectId: "guilan-lms",
  storageBucket: "guilan-lms.firebasestorage.app",
  messagingSenderId: "373343111414",
  appId: "1:373343111414:web:7b21d2e371b6576d3204d7",
  measurementId: "G-RK3Y57GXH3"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;