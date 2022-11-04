// import { app } from '../index';
// import {
//   getAuth,
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
// } from 'firebase/auth';

// const auth = getAuth(app);

// const form = document.querySelector('.form-login');
// const formSingIn = document.querySelector('.form-SingIn');

// // REG
// form.addEventListener('submit', handleSubmit);

// function handleSubmit(event) {
//   event.preventDefault();

//   const regData = {
//     email: '',
//     password: '',
//   };

//   const {
//     elements: { login, pass },
//   } = event.currentTarget;

//   if (login.value === '' || pass.value === '') {
//     return console.log('Please fill in all the fields!');
//   }

//   regData.email = login.value;
//   regData.password = pass.value;

//   const { email, password } = regData;

//   event.currentTarget.reset();
// }

// // AUTH

// formSingIn.addEventListener('submit', singIn);

// function singIn(event) {
//   event.preventDefault();

//   const regData = {
//     email: '',
//     password: '',
//   };

//   const {
//     elements: { login, pass },
//   } = event.currentTarget;

//   if (login.value === '' || pass.value === '') {
//     return console.log('Please fill in all the fields!');
//   }

//   regData.email = login.value;
//   regData.password = pass.value;

//   const { email, password } = regData;

//   signInWithEmailAndPassword(email, password, auth)
//     .then(userCredential => {
//       // Signed in
//       const user = userCredential.user;
//       console.log(userCredential);
//       console.log('Вход выполнен');
//       // ...
//     })
//     .catch(error => {
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       console.log(error);
//       console.log('Вход не выполнен');
//     });

//   event.currentTarget.reset();
// }
