


// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore,collection } from "firebase/firestore";
import { getAuth ,GoogleAuthProvider, } from "firebase/auth"
// import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseconf = {
  apiKey: "AIzaSyD2XH6nwY4YBZ2ZhTpG4CcJ6foPn7EM7I4",
  authDomain: "clone-f0e9b.firebaseapp.com",
  projectId: "clone-f0e9b",
  storageBucket: "clone-f0e9b.appspot.com",
  messagingSenderId: "287966937602",
  appId: "1:287966937602:web:7aca573c02e8e49a6d1d1b",
  measurementId: "G-SGZN1S7C4B"
};

// Initialize Firebase
export const app = initializeApp(firebaseconf);
export const db =getFirestore(app);
export const tweetsRef = collection(db, 'tweets');
export const auth = getAuth(app);
  export const provider= new GoogleAuthProvider()  
export const database=getAuth(app)
// export const admin = require('./firebaseconf').default;
// export const t = Timestamp.now();
// export const f = firestore();
      
      
  
