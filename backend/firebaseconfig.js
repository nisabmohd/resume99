const firebase = require("firebase");
const firebaseConfig = {
    apiKey: "AIzaSyBWsQe02UxswTfffcRDh4NQ8aKYtVkR1Qk",
    authDomain: "resumebuilder9901.firebaseapp.com",
    projectId: "resumebuilder9901",
    storageBucket: "resumebuilder9901.appspot.com",
    messagingSenderId: "121309553198",
    appId: "1:121309553198:web:b81f9d212891efbec335bf"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
module.exports = db;

