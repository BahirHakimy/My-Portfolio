const header = document.getElementById('header');
const hamburger = document.getElementById('hamburger');
const icon = document.getElementById('hamburger-icon');
const nav = document.querySelector('.desktop-nav');
const navItems = document.querySelectorAll('.nav-item');
const logo = document.getElementById('logo');

let theme = window.localStorage.getItem('prefered-theme');
if (theme) {
  setTheme(theme);
}
function setTheme(theme) {
  document.body.className = theme;
  window.localStorage.setItem('prefered-theme', theme);
}

function showMobileNav() {
  header.classList.add('mobile-header');
  hamburger.classList.add('mobile-button');
  logo.classList.add('hidden');
  icon.className = 'fa-solid fa-xmark';
  nav.classList.add('mobile-nav');
  navItems.forEach((item) => {
    item.classList.add('mobile-nav-item');
  });
}

function hideMobileNav() {
  header.classList.remove('mobile-header');
  hamburger.classList.remove('mobile-button');
  icon.className = 'fa-solid fa-bars';
  logo.classList.remove('hidden');
  nav.classList.remove('mobile-nav');
  navItems.forEach((item) => {
    item.classList.remove('mobile-nav-item');
  });
}

hamburger.onclick = () => {
  if (hamburger.classList.contains('mobile-button')) {
    hideMobileNav();
  } else {
    showMobileNav();
  }
};
