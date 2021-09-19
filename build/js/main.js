const form = document.querySelector('.add-form');
const formButton = document.querySelector('.add-form__button')
const nameInput = form.querySelector('input[name="name"]');
const imageInput = form.querySelector('input[name="image"]');
const priceInput = form.querySelector('input[name="price"]');

function checkValidity() {
  if (nameInput.validity.valid && imageInput.validity.valid && priceInput.validity.valid) {
    formButton.removeAttribute('disabled');
  } else {
    formButton.setAttribute('disabled', 'disabled');
  }
}

nameInput.addEventListener('input', checkValidity);
imageInput.addEventListener('input', checkValidity);
priceInput.addEventListener('input', checkValidity);
