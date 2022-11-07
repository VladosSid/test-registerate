// import { initializeApp } from 'firebase-admin/app';
import {
  getDatabase,
  ref,
  set,
  child,
  get,
  push,
  update,
} from 'firebase/database';

import { app } from '../index';

// const database = getDatabase(app);

function writeUserData(userId, name, email) {
  const db = getDatabase();
  set(ref(db, 'users/' + userId), {
    username: name,
    email: email,
  })
    .then(() => {
      console.log('Данные записаны.');
    })
    .catch(error => {
      console.log('Ошибка!!! Данные не звписаны.');
    });
}

// writeUserData('12345', 'VladoS', '123');

function getDataUser(userId) {
  const dbRef = ref(getDatabase());
  get(child(dbRef, `users/${userId}`))
    .then(snapshot => {
      if (snapshot.exists()) {
        console.log(snapshot.val());
      } else {
        console.log('No data available');
      }
    })
    .catch(error => {
      console.log('Ошибка получения данных!!!');
      console.error(error);
    });
}

function writeNewPost(userId, name) {
  const db = getDatabase();

  // A post entry.
  // const postData = {
  // username: name,
  // };

  const updates = {};
  updates['users/' + userId + '/email'] = name;

  return update(ref(db), updates);
}
writeNewPost('12345', 'Sidvsdg@Gmail.com');
