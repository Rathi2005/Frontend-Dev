// q1.js - Product List Manager (Event Delegation + Inline Edit + Auto-save)
const productInput = document.getElementById('productInput');
const addProductBtn = document.getElementById('addProductBtn');
const productList = document.getElementById('productList');

/**
 * Create a list item element for a product name
 */
function createProductListItem(productName) {
  const li = document.createElement('li');

  const nameSpan = document.createElement('span');
  nameSpan.className = 'name';
  nameSpan.textContent = productName;

  const controls = document.createElement('div');
  controls.className = 'controls';

  const editBtn = document.createElement('button');
  editBtn.className = 'edit';
  editBtn.type = 'button';
  editBtn.textContent = 'Edit';

  const deleteBtn = document.createElement('button');
  deleteBtn.className = 'delete';
  deleteBtn.type = 'button';
  deleteBtn.textContent = 'Delete';

  controls.appendChild(editBtn);
  controls.appendChild(deleteBtn);

  li.appendChild(nameSpan);
  li.appendChild(controls);

  return li;
}

// Add product
addProductBtn.addEventListener('click', () => {
  const name = productInput.value.trim();
  if (!name) return;
  productList.appendChild(createProductListItem(name));
  productInput.value = '';
  productInput.focus();
});

// Use event delegation on the UL to handle Edit/Delete clicks
productList.addEventListener('click', (event) => {
  const clicked = event.target;
  // Find the li ancestor
  const listItem = clicked.closest('li');
  if (!listItem) return;

  // Delete
  if (clicked.classList.contains('delete')) {
    listItem.remove();
    return;
  }

  // Edit: switch into inline edit mode
  if (clicked.classList.contains('edit')) {
    enterEditMode(listItem);
    return;
  }
});

// Handle auto-save when clicking outside or when input loses focus
document.addEventListener('click', (event) => {
  // If click is inside the currently editing item, do nothing
  const editingItem = productList.querySelector('.editing');
  if (!editingItem) return;
  if (editingItem.contains(event.target)) return;

  // Click outside: save changes
  saveEdit(editingItem);
}, true); // capture phase to get outside clicks early

// Enter edit mode: replace .name span with input and change button text
function enterEditMode(listItem) {
  if (listItem.classList.contains('editing')) return;
  listItem.classList.add('editing');

  const nameSpan = listItem.querySelector('.name');
  const currentText = nameSpan.textContent;

  const input = document.createElement('input');
  input.value = currentText;
  input.setAttribute('aria-label', 'Edit product name');

  // Replace span with input
  listItem.insertBefore(input, nameSpan);
  nameSpan.style.display = 'none';

  // Change Edit button to Save while editing (optional)
  const editBtn = listItem.querySelector('.edit');
  editBtn.textContent = 'Save';

  // Save on Enter
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      saveEdit(listItem);
    } else if (e.key === 'Escape') {
      cancelEdit(listItem, currentText);
    }
  });

  // Auto-save when input loses focus
  input.addEventListener('blur', () => {
    saveEdit(listItem);
  });

  input.focus();
}

// Save edited value
function saveEdit(listItem) {
  if (!listItem.classList.contains('editing')) return;

  const input = listItem.querySelector('input');
  const newText = input ? input.value.trim() : null;
  const nameSpan = listItem.querySelector('.name');

  if (newText) {
    nameSpan.textContent = newText;
  }
  // cleanup
  if (input) input.remove();
  nameSpan.style.display = '';
  listItem.classList.remove('editing');

  const editBtn = listItem.querySelector('.edit');
  if (editBtn) editBtn.textContent = 'Edit';
}

// Cancel edit and revert
function cancelEdit(listItem, originalText) {
  const input = listItem.querySelector('input');
  const nameSpan = listItem.querySelector('.name');
  if (input) input.remove();
  nameSpan.textContent = originalText;
  nameSpan.style.display = '';
  listItem.classList.remove('editing');

  const editBtn = listItem.querySelector('.edit');
  if (editBtn) editBtn.textContent = 'Edit';
}
