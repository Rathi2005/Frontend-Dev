// q6.js - Real-time table filter (case-insensitive)
const searchBox = document.getElementById('searchBox');
const studentsTable = document.getElementById('studentsTable').querySelector('tbody');
const noResultsMessage = document.getElementById('noResults');

searchBox.addEventListener('input', () => {
  const query = searchBox.value.trim().toLowerCase();
  let visibleCount = 0;

  Array.from(studentsTable.rows).forEach(row => {
    const rowText = Array.from(row.cells).map(cell => cell.textContent.toLowerCase()).join(' ');
    const matched = rowText.includes(query);
    row.style.display = matched ? '' : 'none';
    if (matched) visibleCount++;
  });

  noResultsMessage.style.display = visibleCount === 0 ? 'block' : 'none';
});
