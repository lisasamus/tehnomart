const buttonContact = document.querySelector('.contacts-button');
const modalContact = document.querySelector('.modal-contact');
const modalEsc = document.querySelector('.modal-esc');
const modalInputName = modalContact.querySelector('.modal-input-name');
const modalContactForm = modalContact.querySelector('.modal-contact-form');
const modalInputMail = modalContact.querySelector('.modal-input-mail');
const modalInputText = modalContact.querySelector('.modal-input-text');

let isStorageSupport = true;
let storage = "";

try {
  storage = localStorage.getItem("name");
} catch (err) {
  isStorageSupport = false;
}

buttonContact.addEventListener('click', function (evt) {
  evt.preventDefault();
  modalContact.classList.add('modal-show');
  if (storage) {
    modalInputName.value = storage;
    modalInputMail.focus();
  } else {
    modalInputName.focus();
  }
});

modalEsc.addEventListener('click', function (evt) {
  evt.preventDefault();
  modalContact.classList.remove('modal-show');
  modalContact.classList.remove("modal-error");
});

modalContactForm.addEventListener('submit', function (evt) {
  if (!modalInputName.value || !modalInputMail || !modalInputText.value) {
    evt.preventDefault();
    modalContact.classList.remove("modal-error");
    modalContact.offsetWidth = modalContact.offsetWidth;
    modalContact.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("name", modalInputName.value);
    }
  }

})

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (modalContact.classList.contains("modal-show")) {
      evt.preventDefault();
      modalContact.classList.remove("modal-show");
      modalContact.classList.remove("modal-error");
    }
  }
});
