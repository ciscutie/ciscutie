// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAuq2i-4eblPnJmigQ0COuqFh7igb7I0_8',
  authDomain: 'franciscutie-portfolio.firebaseapp.com',
  projectId: 'franciscutie-portfolio',
  storageBucket: 'franciscutie-portfolio.appspot.com',
  messagingSenderId: '607093591007',
  appId: '1:607093591007:web:94909459b626f2b42a126a',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const dbForm = getFirestore(app);
export { dbForm };
