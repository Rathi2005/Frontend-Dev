// q9.js - Form validation with preventDefault and live error updates
const regForm = document.getElementById('regForm');
const nameField = document.getElementById('nameField');
const emailField = document.getElementById('emailField');
const passwordField = document.getElementById('passwordField');

const nameErr = document.getElementById('nameErr');
const emailErr = document.getElementById('emailErr');
const passwordErr = document.getElementById('passwordErr');
const successMsg = document.getElementById('successMsg');

function validateNameField() {
  if (!nameField.value.trim()) {
    nameErr.textContent = 'Name is required.';
    nameField.classList.add('invalid');
    return false;
  }
  nameErr.textContent = '';
  nameField.classList.remove('invalid');
  return true;
}
function validateEmailField() {
  const v = emailField.value.trim();
  if (!v) {
    emailErr.textContent = 'Email is required.';
    emailField.classList.add('invalid');
    return false;
  }
  if (!v.includes('@')) {
    emailErr.textContent = 'Email must contain @.';
    emailField.classList.add('invalid');
    return false;
  }
  emailErr.textContent = '';
  emailField.classList.remove('invalid');
  return true;
}
function validatePasswordField() {
  if (passwordField.value.length < 6) {
    passwordErr.textContent = 'Password must be at least 6 characters.';
    passwordField.classList.add('invalid');
    return false;
  }
  passwordErr.textContent = '';
  passwordField.classList.remove('invalid');
  return true;
}

// On submit, prevent default and show inline errors if any
regForm.addEventListener('submit', (e) => {
  e.preventDefault();
  successMsg.style.display = 'none';

  const isNameValid = validateNameField();
  const isEmailValid = validateEmailField();
  const isPasswordValid = validatePasswordField();

  if (isNameValid && isEmailValid && isPasswordValid) {
    // Form would be submitted here; we show success message instead
    successMsg.style.display = 'block';
    successMsg.textContent = 'Form Submitted Successfully';
    // Optionally clear the form
    // regForm.reset();
  }
});

// Live validation: errors disappear while correcting input
nameField.addEventListener('input', validateNameField);
emailField.addEventListener('input', validateEmailField);
passwordField.addEventListener('input', validatePasswordField);
