const backdropEl = document.querySelector('.backdrop');
const logIn = document.querySelector('#logIn');
const buttonClose = document.querySelector('.modal-button');

logIn.addEventListener('click', toggleModal);

if (buttonClose) {
  buttonClose.addEventListener('click', toggleModal);
}

function toggleModal(e) {
  e.preventDefault();
  backdropEl.classList.toggle('is-hidden');
}

export function toggleModalForAuth() {
  backdropEl.classList.toggle('is-hidden');
}
