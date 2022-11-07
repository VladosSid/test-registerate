const backdropEl = document.querySelector('.backdrop');
const logIn = document.querySelector('#logIn');
const buttonClose = document.querySelector('.modal-button');

logIn.addEventListener('click', openModal);

buttonClose.addEventListener('click', closeModal);

function closeModal(e) {
  backdropEl.classList.add('is-hidden');
}

export function closeModalForAuth() {
  backdropEl.classList.add('is-hidden');
}

export function openModal(e) {
  e.preventDefault();
  backdropEl.classList.remove('is-hidden');
}
