// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
import { getFirestore, collection, addDoc, getDocs } from 'firebase/firestore'; // Updated import

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAUWh1CJBDR7WlTwsnSn1YguicM1yQxQ9s",
  authDomain: "tanya-e352e.firebaseapp.com",
  projectId: "tanya-e352e",
  storageBucket: "tanya-e352e.appspot.com",
  messagingSenderId: "385523101423",
  appId: "1:385523101423:web:281a022ef431097544b51a",
  measurementId: "G-S4F5SDQTER"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


// Get the auth instance
const auth = getAuth(app);

// Initialize Firestore and export it
const db = getFirestore(app);


export { app, analytics, auth, db, collection, addDoc, getDocs }; // Updated export