// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import{getStorage} from "firebase/storage";
import{getFirestore} from "firebase/firestore"
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAxgddbWvTSz8QLJNVKBPrtUsgdI6Oqv_Q",
  authDomain: "booka-a523f.firebaseapp.com",
  projectId: "booka-a523f",
  storageBucket: "booka-a523f.appspot.com",
  messagingSenderId: "497321726490",
  appId: "1:497321726490:web:b1be21be57124bef87f7a3",
  measurementId: "G-Q8XLN4PYL8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app)
const storage = getStorage(app)
// const AuthContext =createContext()

export {auth, db, storage}