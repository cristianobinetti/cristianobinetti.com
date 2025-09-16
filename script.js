document.addEventListener('DOMContentLoaded', () => {
  const themeToggleBtn = document.getElementById('theme-toggle');
  const htmlElement = document.documentElement;

  const updateButtonIcon = () => {
    if (htmlElement.classList.contains('dark')) {
      themeToggleBtn.textContent = '☀️';
    } else {
      themeToggleBtn.textContent = '🌙';
    }
  };

  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
    htmlElement.classList.add('dark');
  } else {
    htmlElement.classList.remove('dark');
  }

  updateButtonIcon();

  themeToggleBtn.addEventListener('click', () => {
    htmlElement.classList.toggle('dark');

    if (htmlElement.classList.contains('dark')) {
      localStorage.setItem('theme', 'dark');
    } else {
      localStorage.setItem('theme', 'light');
    }

    updateButtonIcon();
  });
});
