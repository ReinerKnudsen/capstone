import {
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  signOut,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
} from 'firebase/auth';
import {
  collection,
  writeBatch,
  getFirestore,
  doc,
  setDoc,
  getDoc,
  query,
  getDocs,
} from 'firebase/firestore';
import { initializeApp } from 'firebase/app';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCi-xxBrM1W05yMUX9GRo4yPjein6sHYzE',
  authDomain: 'crown-store-app.firebaseapp.com',
  projectId: 'crown-store-app',
  storageBucket: 'crown-store-app.firebasestorage.app',
  messagingSenderId: '166260277738',
  appId: '1:166260277738:web:204c30164d033884deb293',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

/*
 * AUTH related
 */

export const auth = getAuth(firebaseApp);

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: 'select_account',
});

export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);

export const signInWithCredentials = async (email, password) => {
  try {
    const response = await signInWithEmailAndPassword(auth, email, password);
    return response;
  } catch (error) {
    switch (error.code) {
      case 'auth/invalid-credential':
        alert('Invalid credentials');
        break;
      default:
        console.error('Unknown error signing in');
    }
    return;
  }
};

export const signOutUser = () => signOut(auth);

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  try {
    const response = await createUserWithEmailAndPassword(auth, email, password);
    return response;
  } catch (error) {
    switch (error.code) {
      case 'auth/email-already-in-use':
        alert('Cannot create user. Email is already in use.');
        break;
      default:
        console.error('Unknown error signing up');
    }
    return;
  }
};

export const onAuthStateChangeListener = (callback) => onAuthStateChanged(auth, callback);

/*
 * Database related
 */

export const db = getFirestore(firebaseApp);

export const addCollectionAndDocuments = async (
  collectionKey, // name of collection
  field, // key field of the object
  objectsToAdd // data to add
) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);

  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object[field].toLowerCase());
    batch.set(docRef, object);
  });
  await batch.commit();
};

export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(db, 'categories');
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);
  const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
    const { title, items } = docSnapshot.data();
    acc[title.toLowerCase()] = items;
    return acc;
  }, {});
  return categoryMap;
};

export const createUserDocumentFromAuth = async (userAuth, additionalProps) => {
  if (!userAuth) return;
  const userDocRef = doc(db, 'users', userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);
  if (!userSnapshot.exists()) {
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
      console.error('Error creating user document', error);
    }
  }
  return userDocRef;
};
