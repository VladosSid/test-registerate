import { signOut } from 'firebase/auth';

import { auth, renderBtnAuth, currentToken } from '../index';

const logOutUser = document.querySelector('#logOut');
logOutUser.addEventListener('click', userOut);

// ========== OutUser ============
export function userOut(e) {
  e.preventDefault();

  localStorage.clear();

  signOut(auth)
    .then(() => {
      renderBtnAuth();
      console.log('Выход из аккаунта выполнен!!!');
    })
    .catch(error => {
      console.log('Выход из аккаунта не выполнен!!!');
      console.log(error);
    });
}
