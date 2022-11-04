const backdropEl = document.querySelector('.backdrop');
const logIn = document.querySelector('#logIn');
const buttonClose = document.querySelector('.modal-button');

logIn.addEventListener('click', e => {
  e.preventDefault();
  backdropEl.classList.toggle('is-hidden');
});

buttonClose.addEventListener('click', e => {
  e.preventDefault();
  backdropEl.classList.toggle('is-hidden');
});
