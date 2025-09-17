// theme toggle with prefers-color-scheme support
document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('theme-toggle');
  const body = document.body;

  const updateButtonIcon = () => {
    btn.textContent = body.classList.contains('dark') ? '☀️' : '🌙';
  };

  // always set theme based on system preference
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  body.classList.toggle('dark', prefersDark || !window.matchMedia);
  updateButtonIcon();

  // toggle theme temporarily (no persistence)
  btn.addEventListener('click', () => {
    body.classList.toggle('dark');
    updateButtonIcon();
  });
});
