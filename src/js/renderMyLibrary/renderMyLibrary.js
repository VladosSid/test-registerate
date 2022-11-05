const btnNotAuth = document.querySelector('.btnNotAuth');
const btnAuth = document.querySelectorAll('.btnAyth');

export function renderBtnAuth() {
  btnNotAuth.classList.toggle('is-hidden');

  for (let i = 0; i < btnAuth.length; i++) {
    btnAuth[i].classList.toggle('is-hidden');
  }
}
