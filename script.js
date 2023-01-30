// Add the mobile-header class to header
const header = document.getElementById('header');
// Add the mobile-button class to hamburger nav
const hamburger = document.getElementById('hamburger');
// Change the class of icon tag to fa-solid fa-xmark
const icon = document.querySelector('.fa-solid');
// Add the mobile-nav to nav
const nav = document.querySelector('.desktop-nav');
// Add the mobile-nav-item class to nav items
const navItems = document.querySelectorAll('.nav-item');

let theme = window.localStorage.getItem("prefered-theme");
      if (theme) {
        setTheme(theme);
      }
      function setTheme(theme) {
        document.body.className = theme;
        window.localStorage.setItem("prefered-theme", theme);
      }

function showMobileNav() {
  header.classList.add('mobile-header');
  hamburger.classList.add('mobile-button');
  if (icon.classList.contains('fa-xmark')) {
    icon.classList.remove('fa-xmark')
  }
  nav.classList.add('mobile-nav');
  navItems.forEach(item => {
    item.classList.add('mobile-nav-item');
  })
}

function hideMobileNav() {
  header.classList.remove('mobile-header');
  hamburger.classList.remove('mobile-button');
  icon.className = 'fa-solid fa-xmark';
  nav.classList.remove('mobile-nav');
  navItems.forEach(item => {
    item.classList.remove('mobile-nav-item');
  })
}

hamburger.onclick = () => {
  if (hamburger.classList.contains('mobile-button')) {
    hideMobileNav();
  } else {
    showMobileNav();
  }
}
