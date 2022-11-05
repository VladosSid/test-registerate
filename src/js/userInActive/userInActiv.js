import { auth, setVerifyToken } from '../index';

export let currentToken = '';

export function veryfiUser() {
  const user = auth.currentUser;

  if (user !== null) {
    currentToken = user.accessToken;
    setVerifyToken(user.accessToken, user.uid);

    user.providerData.forEach(profile => {
      console.log('Sign-in provider: ' + profile.providerId);
      console.log('  Provider-specific UID: ' + profile.uid);
      console.log('  Name: ' + profile.displayName);
      console.log('  Email: ' + profile.email);
      console.log('  Photo URL: ' + profile.photoURL);
    });

    return user.accessToken;
  } else {
    console.log(
      'Не удалось получить данные позьлователя. Авторизйутесь еще раз.'
    );
  }
}
