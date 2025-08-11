// Mobile menu toggle
const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');
menuBtn?.addEventListener('click', () => mobileMenu.classList.toggle('hidden'));

// Theme toggle + persist
const themeBtn = document.getElementById('themeBtn');
themeBtn?.addEventListener('click', () => {
  const isDark = document.documentElement.classList.toggle('dark');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

// Current year in footer
document.getElementById('year').textContent = new Date().getFullYear();