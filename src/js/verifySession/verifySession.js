import { currentToken, renderBtnAuth, toggleModalForAuth } from '../index';

let sessionTokenLocal = '';

export function setVerifyToken(sessionToken, uid) {
  dataSessionUser = {
    uid: uid,
    token: sessionToken,
  };

  localStorage.setItem('userSession', JSON.stringify(dataSessionUser));
  getUsersessionData();
}

function getUsersessionData() {
  const localDataSession = localStorage.getItem('userSession');

  try {
    sessionTokenLocal = JSON.parse(localDataSession).token;

    accessTokenVerification();
  } catch (error) {
    console.log(error.name);
    console.log(error.message);
  }
}

export function accessTokenVerification() {
  if (sessionTokenLocal === currentToken) {
    renderBtnAuth();
    return toggleModalForAuth();
  }
  console.log('Сессия завершена, авторизуйтесь заново!!!');
}
