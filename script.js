const hamburgerIcon = document.querySelector('.hamburgerIcon');
const menulist = document.querySelector('.menu-list-items > ul');
const menuListItems = document.querySelectorAll('.menu-list-items li');

hamburgerIcon.addEventListener('click', () => {
  menulist.classList.toggle('active');
});

menuListItems.forEach((el) => {
  el.addEventListener('click', () => {
    menulist.classList.toggle('active');
  });
});

// Validate Form

const form = document.querySelector('#form');
const errorElement = document.querySelector('.error-element');
const emailInput = form.elements.email;
const submit = document.querySelector('#get-in-touch-button');

function showError(event) {
  if (!emailInput.value) {
    errorElement.textContent = '*The email address is not provided.';
  }
  if (emailInput.value && emailInput.value !== emailInput.value.toLowerCase()) {
    errorElement.textContent = '*The email address should be in lowercase.';
    event.preventDefault();
  }
}

submit.addEventListener('click', showError);

// Local Storage

const fullNameInput = form.name;
const messageInput = form.message;

const formObj = {
  fullName: '',
  email: '',
  message: '',
};

if (localStorage.formStorage) {
  formObj.fullName = JSON.parse(localStorage.formStorage).fullName;
  formObj.email = JSON.parse(localStorage.formStorage).email;
  formObj.message = JSON.parse(localStorage.formStorage).message;
  fullNameInput.value = formObj.fullName;
  emailInput.value = formObj.email;
  messageInput.value = formObj.message;
}

fullNameInput.addEventListener('input', () => {
  formObj.fullName = fullNameInput.value;
  localStorage.setItem('formStorage', JSON.stringify(formObj));
});

emailInput.addEventListener('input', () => {
  formObj.email = emailInput.value;
  localStorage.setItem('formStorage', JSON.stringify(formObj));
});

messageInput.addEventListener('input', () => {
  formObj.message = messageInput.value;
  localStorage.setItem('formStorage', JSON.stringify(formObj));
});
