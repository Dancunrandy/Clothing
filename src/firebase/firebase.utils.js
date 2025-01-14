// Import the required Firebase services from the Firebase SDK
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Firebase config object
const config = {
  apiKey: "AIzaSyASMQOXMZbflr6dglkf-6Gbsvmo4BRwLVA",
  authDomain: "clothing-db-dcce3.firebaseapp.com",
  projectId: "clothing-db-dcce3",
  storageBucket: "clothing-db-dcce3.firebasestorage.app",
  messagingSenderId: "263568795500",
  appId: "1:263568795500:web:3f7cc3f2e64fbbfe207549",
  measurementId: "G-2171341HYN"
};

// Initialize Firebase
const app = initializeApp(config);

// Initialize Firebase services
const auth = getAuth(app);
const firestore = getFirestore(app);

// Set up Google Auth Provider
const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

// Function to handle sign-in with Google
export const signInWithGoogle = () => signInWithPopup(auth, provider);

// Export the Firebase services for use in other parts of the app
export { auth, firestore };
