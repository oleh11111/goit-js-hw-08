import throttle from 'lodash.throttle';

function getFormData() {
  const form = JSON.parse(localStorage.getItem('feedback-form-state'));

  return form || {
    email: '',
    message: '',
  };
}

function initForm(formData) {
  const emailEl = document.querySelector('[name="email"]');
  const messageEl = document.querySelector('[name="message"]');

  emailEl.value = formData.email;
  messageEl.value = formData.message;
}

const form = document.querySelector('form');

let formData = getFormData();
initForm(formData);

form.addEventListener('input', throttle(event => {
  const value = event.target.value;
  const name = event.target.getAttribute('name');

  if (name === 'email') {
    formData.email = value;
  } else {
    formData.message = value;
  }

  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}, 500));

form.addEventListener('submit', (event) => {
  event.preventDefault();
  console.log(formData);

  localStorage.removeItem('feedback-form-state');
  formData = getFormData();
  initForm(formData);
});
