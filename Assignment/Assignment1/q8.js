// q8.js - Custom dropdown (click outside closes using capture phase)
const dropdown = document.getElementById('customDropdown');
const dropdownBtn = document.getElementById('dropdownBtn');
const optionsList = document.getElementById('optionsList');

// Toggle dropdown visibility
dropdownBtn.addEventListener('click', (e) => {
  e.stopPropagation(); // prevent immediate document handler
  dropdown.classList.toggle('open');
});

// Clicking an option sets button text
optionsList.addEventListener('click', (e) => {
  const option = e.target.closest('.option');
  if (!option) return;
  const displayText = option.textContent;
  dropdownBtn.textContent = displayText;
  dropdown.classList.remove('open');
});

// Use capture phase on document to close the dropdown when clicking outside
document.addEventListener('click', (e) => {
  // If click occurs and dropdown is open and click is outside, close it
  if (dropdown.classList.contains('open') && !dropdown.contains(e.target)) {
    dropdown.classList.remove('open');
  }
}, true); // capture phase
