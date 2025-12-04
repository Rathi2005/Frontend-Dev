// q4.js - Theme switcher using setAttribute and custom data-theme attribute
const themeButtons = document.querySelectorAll('button[data-theme-choice]');

themeButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const chosenTheme = btn.getAttribute('data-theme-choice');
    // Apply theme by setting attribute on <body>
    document.body.setAttribute('data-theme', chosenTheme);
    // Save current theme in custom attribute explicitly (already done)
    document.body.setAttribute('data-current-theme', chosenTheme);
  });
});

// Restore theme from attribute on load (if present)
const persistedTheme = document.body.getAttribute('data-current-theme');
if (persistedTheme) {
  document.body.setAttribute('data-theme', persistedTheme);
}
