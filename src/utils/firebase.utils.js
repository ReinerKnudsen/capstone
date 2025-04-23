/* eslint-disable no-unused-vars */

import {
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
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

/*
 * AUTH related
 */

export const auth = getAuth(firebaseApp);

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);

export const signInWithCredentials = (email, password) =>
  signInWithEmailAndPassword(auth, email, password);

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  console.log("Received User: ", email, password);
  try {
    const response = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    return response;
  } catch (error) {
    if (error.code === "auth/email-already-in-use") {
      alert("Cannot create user. Email is already in use.");
    }
    console.log("Error creating user", error);
  }
};

/*
 * Database related
 */

export const db = getFirestore(firebaseApp);

export const createUserDocumentFromAuth = async (userAuth, additionalProps) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);
  if (userSnapshot.exists()) {
    return userDocRef;
  }
  const { displayName, email } = userAuth;
  const createdAt = new Date();

  try {
    await setDoc(userDocRef, {
      displayName,
      email,
      createdAt,
      ...additionalProps,
    });
  } catch (error) {
    console.log("Error creating user document", error);
  }
};
