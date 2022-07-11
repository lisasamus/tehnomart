const modalMap = document.querySelector('.modal-map');
const contactsMap = document.querySelector('.contacts-map');
const modalEsc = modalMap.querySelector('.modal-esc');

contactsMap.addEventListener('click', function () {
  modalMap.classList.add('modal-show');
});

modalEsc.addEventListener('click', function () {
  modalMap.classList.remove('modal-show');
});


window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    modalMap.classList.remove('modal-show');
  }
});
