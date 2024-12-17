import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword, signInWithCredential } from "firebase/auth";
import { getAnalytics } from "firebase/analytics"; // Import for analytics (optional)

const firebaseConfig = {
  apiKey: "AIzaSyDTy6tdH1wU4dbkFCdI75UYffNcgpfTA74",
  authDomain: "research-paper-summarize-bb74c.firebaseapp.com",
  projectId: "research-paper-summarize-bb74c",
  storageBucket: "research-paper-summarize-bb74c.firebasestorage.app",
  messagingSenderId: "736022588925",
  appId: "1:736022588925:web:005ab07b1f8b135129fd94",
  measurementId: "G-ESF7KN45EQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);  // Optional, only if you're using analytics

// Export authentication and Google Sign-In provider
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

// Google sign-in method
const signInWithGoogle = () => {
  return signInWithPopup(auth, googleProvider);
};

export { auth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithCredential, googleProvider, signInWithGoogle };
