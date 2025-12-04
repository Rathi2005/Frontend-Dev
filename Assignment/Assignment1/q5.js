// q5.js - Image gallery modal preview with outside-click close and stopPropagation inside
const imageGrid = document.getElementById('imageGrid');
const modalOverlay = document.getElementById('modalOverlay');
const modalBox = document.getElementById('modalBox');
const modalImage = document.getElementById('modalImage');

// Click any image -> show modal with larger image
imageGrid.addEventListener('click', (e) => {
  const clickedImg = e.target.closest('img');
  if (!clickedImg) return;
  const src = clickedImg.src;
  // Could modify to use higher-res URL pattern if available
  modalImage.src = src;
  modalOverlay.style.display = 'flex';
});

// Clicking outside modal closes overlay
modalOverlay.addEventListener('click', () => {
  modalOverlay.style.display = 'none';
  modalImage.src = '';
});

// Prevent clicks inside modal from bubbling up (so modal doesn't close)
modalBox.addEventListener('click', (e) => {
  e.stopPropagation();
});
