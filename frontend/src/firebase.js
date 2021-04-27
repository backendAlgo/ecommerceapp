import firebase from "firebase/app";
import "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAYrq84sNjW2_Rzth8X75nlXm_60eediX8",
    authDomain: "ecommerce-f453a.firebaseapp.com",
    projectId: "ecommerce-f453a",
    storageBucket: "ecommerce-f453a.appspot.com",
    messagingSenderId: "745282361108",
    appId: "1:745282361108:web:557c2f2ecc4b9062789401",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// export
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
