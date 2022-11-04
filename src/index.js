// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';

import * as myModule from './js';

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
export const app = initializeApp(firebaseConfig);

// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

// REG
const form = document.querySelector('.form-login');
const formSingIn = document.querySelector('.form-SingIn');

// REG
form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const regData = {
    email: '',
    password: '',
  };

  const {
    elements: { login, pass },
  } = event.currentTarget;

  if (login.value === '' || pass.value === '') {
    return console.log('Please fill in all the fields!');
  }

  regData.email = login.value;
  regData.password = pass.value;

  const { email, password } = regData;

  createUserWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
      // Signed in
      const user = userCredential.user;
      console.log('Регистрация успешна');
      // ...
    })
    .catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(error);
      console.log('Ошибка регистрации');
      // ..
    });

  event.currentTarget.reset();
}

// AUTH
formSingIn.addEventListener('submit', singIn);

function singIn(event) {
  event.preventDefault();

  const regData = {
    email: '',
    password: '',
  };

  const {
    elements: { login, pass },
  } = event.currentTarget;

  if (login.value === '' || pass.value === '') {
    return console.log('Please fill in all the fields!');
  }

  regData.email = login.value;
  regData.password = pass.value;

  const { email, password } = regData;

  signInWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
      // Signed in
      const user = userCredential.user;
      console.log(userCredential);
      console.log('Вход выполнен');
      // ...
    })
    .catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(error);
      console.log('Вход не выполнен');
    });

  event.currentTarget.reset();
}
