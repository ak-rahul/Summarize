import { initializeApp, getApps } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithRedirect, signInWithEmailAndPassword as firebaseSignInWithEmailAndPassword } from 'firebase/auth';

// Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDZYjRVEWny-ikQEzbymF7ca6N0ZTpB2CA',
  authDomain: 'summarize-91155.firebaseapp.com',
  projectId: 'summarize-91155',
  storageBucket: 'summarize-91155.appspot.com',
  messagingSenderId: '1036901722721',
  appId: '1:1036901722721:web:695b9d0d6b7f0db4a1c9b1',
  measurementId: 'G-JZY1YB6Q3X',
};

// Initialize Firebase (if it hasn't been initialized already)
if (!getApps().length) {
  initializeApp(firebaseConfig);
}

// Firebase Authentication
const auth = getAuth();

// Google Sign-In
const signInWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  try {
    await signInWithRedirect(auth, provider);
  } catch (error) {
    throw error;
  }
};

// Email/Password Sign-In
const signInWithEmailAndPassword = async (email, password) => {
  try {
    await firebaseSignInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    throw error;
  }
};

// Exporting auth and methods for use in other files
export { auth, signInWithGoogle, signInWithEmailAndPassword };
