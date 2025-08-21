document.addEventListener('DOMContentLoaded', () => {
  // ------------------------
  // Mobile menu toggle
  // ------------------------
  const menuBtn = document.getElementById('menuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
  }

  // ------------------------
  // Theme toggle + persist
  // ------------------------
  const themeBtn = document.getElementById('themeBtn');
  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      const root = document.documentElement;
      const isDark = root.classList.toggle('dark');
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });
  }

  // Apply saved theme on page load
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.documentElement.classList.add('dark');
  } else if (savedTheme === 'light') {
    document.documentElement.classList.remove('dark');
  }



  















  // ------------------------
  // Current year in footer
  // ------------------------
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Stop normal form submission

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Subject line
    const subject = `New message via Portfolio Website`;

    // Email body (clean & professional)
    const body = `
Hello,

You have received a new message from your portfolio website.

-------------------------------------
Message:
${message}
-------------------------------------

Reply-To: ${email}
Sender: ${name}
    `;

    // Encode and open mail client
    window.location.href = `mailto:quickmailfly@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });
});



