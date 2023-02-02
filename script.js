const header = document.getElementById('header');
const hamburger = document.getElementById('hamburger');
const icon = document.getElementById('hamburger-icon');
const nav = document.querySelector('.desktop-nav');
const navItems = document.querySelectorAll('.nav-item');
const logo = document.getElementById('logo');
const popupContainer = document.getElementById('popup-container');
const popupClose = document.getElementById('popup-close');
const popupTitle = document.querySelector('.popup-title');
const popupTags = document.getElementById('popup-tags');
const popupDescription = document.querySelector('.popup-text');
const errorMessage = document.getElementById('error-message');
const form = document.querySelector('form');

function setTheme(theme) {
  document.body.className = theme;
  window.localStorage.setItem('prefered-theme', theme);
}

const theme = window.localStorage.getItem('prefered-theme');
if (theme) {
  setTheme(theme);
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

const projects = [
  {
    name: 'Multi-Post Stories Gain+Glory',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et laborum sunt ipsa molestias odit, accusamus iste labore doloribus cum enim est ea perferendis, laudantium eum obcaecati natus consequatur nisi voluptatibus.',
    tags: ['Ruby on rails', 'css', 'JavaScript', 'html'],
  },
  {
    name: 'Multi-Post Stories Gain+Glory',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et laborum sunt ipsa molestias odit, accusamus iste labore doloribus cum enim est ea perferendis, laudantium eum obcaecati natus consequatur nisi voluptatibus.',
    tags: ['Ruby on rails', 'css', 'JavaScript', 'html'],
  },
  {
    name: 'Multi-Post Stories Gain+Glory',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et laborum sunt ipsa molestias odit, accusamus iste labore doloribus cum enim est ea perferendis, laudantium eum obcaecati natus consequatur nisi voluptatibus.',
    tags: ['Ruby on rails', 'css', 'JavaScript', 'html'],
  },
  {
    name: 'Multi-Post Stories Gain+Glory',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et laborum sunt ipsa molestias odit, accusamus iste labore doloribus cum enim est ea perferendis, laudantium eum obcaecati natus consequatur nisi voluptatibus.',
    tags: ['Ruby on rails', 'css', 'JavaScript', 'html'],
  },
  {
    name: 'Multi-Post Stories Gain+Glory',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et laborum sunt ipsa molestias odit, accusamus iste labore doloribus cum enim est ea perferendis, laudantium eum obcaecati natus consequatur nisi voluptatibus.',
    tags: ['Ruby on rails', 'css', 'JavaScript', 'html'],
  },
  {
    name: 'Multi-Post Stories Gain+Glory',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et laborum sunt ipsa molestias odit, accusamus iste labore doloribus cum enim est ea perferendis, laudantium eum obcaecati natus consequatur nisi voluptatibus.',
    tags: ['Ruby on rails', 'css', 'JavaScript', 'html'],
  },
];

function showModel(index = 0) {
  const project = projects[index];
  popupTitle.textContent = project.name;
  popupDescription.textContent = project.description;
  project.tags.forEach((tag) => {
    const item = document.createElement('li');
    item.classList.add('language-tags');
    item.textContent = tag;
    popupTags.appendChild(item);
  });
  window.scrollTo(0, 0);
  popupContainer.style.display = 'flex';
}

function hideModel() {
  popupContainer.style.display = 'none';
  document.body.style.maxHeight = 'auto';
  document.body.style.overflow = 'auto';
}

document.querySelectorAll('.project-btn').forEach((btn, index) => {
  btn.onclick = () => {
    showModel(index);
  };
});

popupClose.onclick = () => hideModel();

form.addEventListener('submit', (ev) => {
  ev.preventDefault();
  const { email } = ev.target;
  const lowerCase = email.value.toLowerCase();
  if (lowerCase !== email.value) {
    errorMessage.textContent = `Email is incorrect, Form not submitted. Try: ${lowerCase}`;
    errorMessage.style.display = 'block';
  } else {
    errorMessage.style.display = 'none';
    ev.target.submit();
  }
});
