
import { initializeApp } from 'firebase/app';
import {getFirestore} from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyCJHMucNOFtXWM8B7MuS9yD66felYG0pg8",
  authDomain: "quizzy-aede2.firebaseapp.com",
  projectId: "quizzy-aede2",
  storageBucket: "quizzy-aede2.appspot.com",
  messagingSenderId: "796208979666",
  appId: "1:796208979666:web:6d05c230437b76f94dd70b"
};


export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIRESTORE_DB = getFirestore(FIREBASE_APP)