// q2.js - Live Character Counter with warnings and prevention
const messageBox = document.getElementById('messageBox');
const remainingDisplay = document.getElementById('remaining');
const resetButton = document.getElementById('resetBtn');

const MAX_CHARS = 100;
const WARNING_THRESHOLD = 20; // yellow when <= 20 remaining

function updateCounter(typedLength) {
  const remaining = MAX_CHARS - typedLength;
  remainingDisplay.textContent = remaining;

  remainingDisplay.classList.remove('warning', 'danger');

  if (remaining <= 0) {
    remainingDisplay.classList.add('danger');
  } else if (remaining <= WARNING_THRESHOLD) {
    remainingDisplay.classList.add('warning');
  }
}

// Prevent default further typing when at limit (for some browsers)
messageBox.addEventListener('keydown', (e) => {
  const currentLength = messageBox.value.length;
  // Allow control keys (Backspace, Arrow keys, etc.)
  if (currentLength >= MAX_CHARS && !['Backspace', 'Delete', 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'].includes(e.key)) {
    e.preventDefault();
  }
});

messageBox.addEventListener('input', () => {
  const lengthNow = messageBox.value.length;
  if (lengthNow > MAX_CHARS) {
    // Enforce maximum length just in case
    messageBox.value = messageBox.value.slice(0, MAX_CHARS);
  }
  updateCounter(messageBox.value.length);
});

// Reset button clears everything
resetButton.addEventListener('click', () => {
  messageBox.value = '';
  updateCounter(0);
});

// Initialize
updateCounter(0);
