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
