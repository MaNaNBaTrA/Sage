import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  setPersistence,
  browserLocalPersistence,
} from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAO_8jIrq7D_hTXJ2MpphAI5Iq9y5SE3QE",
  authDomain: "sage-8bbc2.firebaseapp.com",
  projectId: "sage-8bbc2",
  storageBucket: "sage-8bbc2.firebasestorage.app",
  messagingSenderId: "29538039218",
  appId: "1:29538039218:web:cde3763a119e10f4f3a0ab",
  measurementId: "G-RQ07EX2Q5H",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();


setPersistence(auth, browserLocalPersistence)
  .then(() => {
    console.log("Auth persistence set to local");
  })
  .catch((error) => {
    console.error("Error setting auth persistence:", error);
  });


export const signUpWithEmail = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error) {
    console.error("Error signing up with email:", error.message);
    throw error;
  }
};


export const signInWithEmail = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    console.log("User signed in successfully:", userCredential.user);
    return userCredential.user;
  } catch (error) {
    console.error("Error signing in with email:");
    console.error("Error Code:", error.code); 
    console.error("Error Message:", error.message); 
    
    if (error.customData) {
      console.error("Custom Data:", error.customData); 
    }

    throw error;
  }
};



export const logout = async () => {
  try {
    await signOut(auth);
    console.log("User logged out");
  } catch (error) {
    console.error("Error signing out:", error.message);
  }
};


export const loginWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    console.log("User signed in with Google:", result.user);
    return result.user;
  } catch (error) {
    console.error("Error signing in with Google:", error.message);
    throw error;
  }
};


export const onAuthStateChangedHandler = (callback) => {
  return onAuthStateChanged(auth, callback);
};
