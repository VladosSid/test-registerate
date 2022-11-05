// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyD3jSQv2WOE_n61TrtkJRoZUBs4LT-bYkA',
  authDomain: 'teamproject-filmoteka.firebaseapp.com',
  projectId: 'teamproject-filmoteka',
  storageBucket: 'teamproject-filmoteka.appspot.com',
  messagingSenderId: '1061812312194',
  appId: '1:1061812312194:web:74e64ebe4fba458f60bc9b',
  databaseURL:
    'https://teamproject-filmoteka-default-rtdb.europe-west1.firebasedatabase.app/',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
