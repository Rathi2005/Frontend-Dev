// q3.js - Multi-step form with basic validation and summary
const steps = Array.from(document.querySelectorAll('.step'));
let currentStepIndex = 0;

const nameInput = document.getElementById('nameInput');
const emailInput = document.getElementById('emailInput');
const passwordInput = document.getElementById('passwordInput');

function showStep(index) {
  steps.forEach((step, i) => {
    step.classList.toggle('active', i === index);
  });
  currentStepIndex = index;
}

// Simple validations
function validateName() {
  const value = nameInput.value.trim();
  const err = document.getElementById('nameError');
  if (!value) { err.textContent = 'Name is required.'; return false; }
  err.textContent = '';
  return true;
}

function validateEmail() {
  const value = emailInput.value.trim();
  const err = document.getElementById('emailError');
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!value) { err.textContent = 'Email is required.'; return false; }
  if (!emailRegex.test(value)) { err.textContent = 'Enter a valid email.'; return false; }
  err.textContent = '';
  return true;
}

function validatePassword() {
  const value = passwordInput.value;
  const err = document.getElementById('passwordError');
  if (value.length < 6) { err.textContent = 'Password must be at least 6 chars.'; return false; }
  err.textContent = '';
  return true;
}

// Step navigation
document.getElementById('next1').addEventListener('click', () => {
  if (validateName()) showStep(1);
});
document.getElementById('back2').addEventListener('click', () => showStep(0));

document.getElementById('next2').addEventListener('click', () => {
  if (validateEmail()) showStep(2);
});
document.getElementById('back3').addEventListener('click', () => showStep(1));

document.getElementById('finishBtn').addEventListener('click', () => {
  const validAll = validateName() & validateEmail() & validatePassword();
  if (validAll) {
    // show summary
    const summaryDiv = document.getElementById('summary');
    summaryDiv.innerHTML = `<h3>Summary</h3>
      <p><strong>Name:</strong> ${nameInput.value.trim()}</p>
      <p><strong>Email:</strong> ${emailInput.value.trim()}</p>
      <p><strong>Password:</strong> ${'*'.repeat(passwordInput.value.length)}</p>`;
    showStep(0); // optionally reset view or keep at step 0
  }
});

// Live validation removal of errors when user types
[nameInput, emailInput, passwordInput].forEach((el) => {
  el.addEventListener('input', () => {
    if (el === nameInput) validateName();
    if (el === emailInput) validateEmail();
    if (el === passwordInput) validatePassword();
  });
});
