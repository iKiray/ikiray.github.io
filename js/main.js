(function () {
  const root = document.documentElement;
  const toggle = document.querySelector('.theme-toggle');
  if (!toggle) return;

  // Writing may fail in restricted contexts; persistence is silently unavailable
  const setStored = (key, value) => {
    try { localStorage.setItem(key, value); } catch (e) {}
  };

  const applyTheme = (dark) => {
    root.classList.toggle('dark-mode', dark);
    toggle.textContent = dark ? 'Light mode' : 'Dark mode';
    toggle.setAttribute('aria-pressed', String(dark));
    toggle.setAttribute('aria-label', dark ? 'Disable dark mode' : 'Enable dark mode');
  };

  // Button text/init: read current state set by the inline init script
  applyTheme(root.classList.contains('dark-mode'));

  toggle.addEventListener('click', () => {
    const next = !root.classList.contains('dark-mode');
    applyTheme(next);
    setStored('theme', next ? 'dark' : 'light');
  });

  // Synchronize theme across open tabs on the same origin
  window.addEventListener('storage', (e) => {
    if (e.key === 'theme') applyTheme(e.newValue === 'dark');
  });
})();
