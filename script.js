// script.js

document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.getElementById('theme-toggle');
  // Impostazione iniziale in base a preferenza utente / sistema
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  if (prefersDark) {
    document.documentElement.classList.add('dark');
    toggleBtn.textContent = '☀️';
  }

  toggleBtn.addEventListener('click', () => {
    const isDark = document.documentElement.classList.toggle('dark');
    toggleBtn.textContent = isDark ? '☀️' : '🌙';
  });
});
