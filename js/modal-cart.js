const productsButtonBuy = document.querySelector('.products-button-buy');
const modalEsc = document.querySelector('.modal-esc');
const modalCatalog = document.querySelector('.modal-catalog');

productsButtonBuy.addEventListener('click', function (evt) {
  evt.preventDefault();
  modalCatalog.classList.add('modal-show');
});

modalEsc.addEventListener('click', function () {
  modalCatalog.classList.remove('modal-show');
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    modalCatalog.classList.remove('modal-show');
  }
});
