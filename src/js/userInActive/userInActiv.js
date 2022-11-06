import { auth, setVerifyToken, getUsersessionData } from '../index';
import { onAuthStateChanged } from 'firebase/auth';

export let currentToken = '';

export function veryfiUser() {
  // const user = auth.currentUser;
  // console.log(auth.currentUser);

  // if (user !== null) {
  //   console.log('NOT NULL:', auth.currentUser);
  //   currentToken = user.accessToken;
  //   setVerifyToken(user.accessToken, user.uid);

  //   user.providerData.forEach(profile => {
  //     // console.log('Sign-in provider: ' + profile.providerId);
  //     // console.log('  Provider-specific UID: ' + profile.uid);
  //     // console.log('  Name: ' + profile.displayName);
  //     // console.log('  Email: ' + profile.email);
  //     // console.log('  Photo URL: ' + profile.photoURL);
  //   });

  //   return user.accessToken;
  // } else {
  //   console.log(
  //     'Не удалось получить данные позьлователя. Авторизйутесь еще раз.'
  //   );
  // }

  onAuthStateChanged(auth, user => {
    if (user) {
      currentToken = user.accessToken;
      setVerifyToken(user.accessToken, user.uid);
      getUsersessionData();
    } else {
      console.log(
        'Не удалось получить данные позьлователя. Авторизйутесь еще раз.'
      );
    }
  });
}
