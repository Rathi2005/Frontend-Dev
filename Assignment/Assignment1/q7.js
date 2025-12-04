// q7.js - Track mouse inside a box, show coordinates and drop red dot on dblclick
const box = document.getElementById('box');
const coordsDisplay = document.getElementById('coords');

// Mouse move: show clientX, clientY
box.addEventListener('mousemove', (e) => {
  // clientX/clientY are relative to viewport; offsetX/offsetY are relative to element
  coordsDisplay.textContent = `clientX: ${e.clientX}, clientY: ${e.clientY}`;
});

// Double click inside: drop a small red dot at the click position
box.addEventListener('dblclick', (e) => {
  // Compute coordinates relative to the box (so we can position the dot inside)
  const rect = box.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  const dot = document.createElement('div');
  dot.className = 'dot';
  dot.style.left = `${x}px`;
  dot.style.top = `${y}px`;
  box.appendChild(dot);
});
