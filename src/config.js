import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from "firebase/auth";
import { GithubAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBWsQe02UxswTfffcRDh4NQ8aKYtVkR1Qk",
  authDomain: "resumebuilder9901.firebaseapp.com",
  projectId: "resumebuilder9901",
  storageBucket: "resumebuilder9901.appspot.com",
  messagingSenderId: "121309553198",
  appId: "1:121309553198:web:b81f9d212891efbec335bf"
};

export const app = initializeApp(firebaseConfig);
export const googleprovider = new GoogleAuthProvider();
export const githubprovider = new GithubAuthProvider();
export const db = getFirestore(app);
