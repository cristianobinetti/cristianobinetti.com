document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.getElementById('theme-toggle');
  const htmlEl = document.documentElement;
  
  const applyTheme = (theme) => {
    if (theme === 'dark') {
      htmlEl.classList.add('dark');
      toggleBtn.textContent = '☀️';
      localStorage.setItem('theme', 'dark');
    } else {
      htmlEl.classList.remove('dark');
      toggleBtn.textContent = '🌙';
      localStorage.setItem('theme', 'light');
    }
  };

  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  if (savedTheme) {
    applyTheme(savedTheme);
  } else {
    applyTheme(prefersDark ? 'dark' : 'light');
  }

  toggleBtn.addEventListener('click', () => {
    const isDark = htmlEl.classList.contains('dark');
    applyTheme(isDark ? 'light' : 'dark');
  });
});
