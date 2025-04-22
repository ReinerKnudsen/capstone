/* eslint-disable no-unused-vars */
import {
  getAuth,
  signInWithPopup,
  signInWithRedirect,
  GoogleAuthProvider,
} from "firebase/auth";
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  doc,
  setDoc,
  getDoc,
  collection,
} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCi-xxBrM1W05yMUX9GRo4yPjein6sHYzE",
  authDomain: "crown-store-app.firebaseapp.com",
  projectId: "crown-store-app",
  storageBucket: "crown-store-app.firebasestorage.app",
  messagingSenderId: "166260277738",
  appId: "1:166260277738:web:204c30164d033884deb293",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export const auth = getAuth(firebaseApp);

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);

/*
 * Database related
 */

export const db = getFirestore(firebaseApp);

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot.exists());
};
