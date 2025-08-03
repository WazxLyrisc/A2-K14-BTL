    const toggleBtn = document.getElementById('toggle-theme');
    const html = document.documentElement;

    toggleBtn.addEventListener('click', () => {
    const current = html.getAttribute('data-theme') || 'light';
    const next = current === 'light' ? 'dark' : 'light';
    html.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
    });

  // Load theme khi mở lại trang
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
    html.setAttribute('data-theme', savedTheme);
}

var mobileMenu = document.getElementById("mobile-menu");
var navLink = document.getElementById("nav-link");

mobileMenu.onclick = function () {
  navLink.classList.toggle("show");
};