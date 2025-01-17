import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyASMQOXMZbflr6dglkf-6Gbsvmo4BRwLVA",
  authDomain: "clothing-db-dcce3.firebaseapp.com",
  projectId: "clothing-db-dcce3",
  storageBucket: "clothing-db-dcce3.firebasestorage.app",
  messagingSenderId: "263568795500",
  appId: "1:263568795500:web:3f7cc3f2e64fbbfe207549",
  measurementId: "G-2171341HYN"
};

firebase.initializeApp(firebaseConfig);  // Changed 'config' to 'firebaseConfig'

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
