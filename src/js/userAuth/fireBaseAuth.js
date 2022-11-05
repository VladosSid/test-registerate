import { auth, veryfiUser } from '../index';

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';

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
      console.log(user);
      console.log('Регистрация успешна');
      // ...
    })
    .catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
      console.log('Ошибка регистрации');
      // ..
    });

  event.currentTarget.reset();
}

// AUTH
formSingIn.addEventListener('submit', singIn);

function singIn(event) {
  event.preventDefault();

  const authData = {
    email: '',
    password: '',
  };

  const {
    elements: { login, pass },
  } = event.currentTarget;

  if (login.value === '' || pass.value === '') {
    return console.log('Please fill in all the fields!');
  }

  authData.email = login.value;
  authData.password = pass.value;

  const { email, password } = authData;

  signInWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
      // Signed in
      veryfiUser();
      const user = userCredential.user;
      console.log('Вход выполнен');
      // ...
    })
    .catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(error);
      console.log(errorMessage);
      console.log('Вход не выполнен');
    });

  event.currentTarget.reset();
}
