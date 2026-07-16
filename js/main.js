document.addEventListener('DOMContentLoaded', () => {
  const root = document.documentElement;
  const toggle = document.querySelector('.theme-toggle');
  if (!toggle) return;

  const getStored = (key) => {
    try {
      return localStorage.getItem(key);
    } catch (e) {
      return null;
    }
  };

  const setStored = (key, value) => {
    try {
      localStorage.setItem(key, value);
    } catch (e) {}
  };

  const applyTheme = (dark) => {
    root.classList.toggle('dark-mode', dark);
    toggle.textContent = dark ? 'Light mode' : 'Dark mode';
    toggle.setAttribute('aria-pressed', String(dark));
    toggle.setAttribute('aria-label', dark ? 'Disable dark mode' : 'Enable dark mode');
  };

  applyTheme(getStored('theme') === 'dark');

  toggle.addEventListener('click', () => {
    const next = !root.classList.contains('dark-mode');
    applyTheme(next);
    setStored('theme', next ? 'dark' : 'light');
  });

  window.addEventListener('storage', (e) => {
    if (e.key === 'theme') {
      applyTheme(e.newValue === 'dark');
    }
  });
});
