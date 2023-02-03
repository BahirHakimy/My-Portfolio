function $(query) {
  return document.querySelector(query);
}

function createElement(tagname = 'div', attrs = {}) {
  const elem = document.createElement(tagname);
  Object.keys(attrs).forEach((key) => {
    if (['class', 'id'].includes(key)) {
      elem.setAttribute(key, attrs[key]);
    } else {
      elem[key] = attrs[key];
    }
  });
  return elem;
}

const header = document.getElementById('header');
const hamburger = document.getElementById('hamburger');
const icon = document.getElementById('hamburger-icon');
const navItems = document.querySelectorAll('.nav-item');
const logo = document.getElementById('logo');
const modalContainer = document.getElementById('modal-container');
const errorMessage = document.getElementById('error-message');
const nav = $('.desktop-nav');
const form = $('form');

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
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et laborum sunt ipsa molestias odit, accusamus iste labore doloribus cum enim est ea perferendis, laudantium eum obcaecati natus consequatur nisi voluptatibus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et laborum sunt ipsa molestias odit, accusamus iste labore doloribus cum enim est ea perferendis, laudantium eum obcaecati natus consequatur nisi voluptatibus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et laborum sunt ipsa molestias odit, accusamus iste labore doloribus cum enim est ea perferendis, laudantium eum obcaecati natus consequatur nisi voluptatibus.',
    tags: ['Ruby on rails', 'css', 'JavaScript', 'html'],
    images: [
      './assets/background/desktop-project.png',
      './assets/background/mobile-project.png',
    ],
    sourceLink: 'https://github.com/BahirHakimy/My-Portfolio',
    demoLink: 'https://bahirhakimy.github.io/My-Portfolio/',
  },
  {
    name: 'Multi-Post Stories Gain+Glory',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et laborum sunt ipsa molestias odit, accusamus iste labore doloribus cum enim est ea perferendis, laudantium eum obcaecati natus consequatur nisi voluptatibus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et laborum sunt ipsa molestias odit, accusamus iste labore doloribus cum enim est ea perferendis, laudantium eum obcaecati natus consequatur nisi voluptatibus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et laborum sunt ipsa molestias odit, accusamus iste labore doloribus cum enim est ea perferendis, laudantium eum obcaecati natus consequatur nisi voluptatibus.',
    tags: ['Ruby on rails', 'css', 'JavaScript', 'html'],
    images: [
      './assets/background/desktop-project.png',
      './assets/background/mobile-project.png',
    ],
    sourceLink: 'https://github.com/BahirHakimy/My-Portfolio',
    demoLink: 'https://bahirhakimy.github.io/My-Portfolio/',
  },
  {
    name: 'Multi-Post Stories Gain+Glory',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et laborum sunt ipsa molestias odit, accusamus iste labore doloribus cum enim est ea perferendis, laudantium eum obcaecati natus consequatur nisi voluptatibus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et laborum sunt ipsa molestias odit, accusamus iste labore doloribus cum enim est ea perferendis, laudantium eum obcaecati natus consequatur nisi voluptatibus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et laborum sunt ipsa molestias odit, accusamus iste labore doloribus cum enim est ea perferendis, laudantium eum obcaecati natus consequatur nisi voluptatibus.',
    tags: ['Ruby on rails', 'css', 'JavaScript', 'html'],
    images: [
      './assets/background/desktop-project.png',
      './assets/background/mobile-project.png',
    ],
    sourceLink: 'https://github.com/BahirHakimy/My-Portfolio',
    demoLink: 'https://bahirhakimy.github.io/My-Portfolio/',
  },
  {
    name: 'Multi-Post Stories Gain+Glory',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et laborum sunt ipsa molestias odit, accusamus iste labore doloribus cum enim est ea perferendis, laudantium eum obcaecati natus consequatur nisi voluptatibus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et laborum sunt ipsa molestias odit, accusamus iste labore doloribus cum enim est ea perferendis, laudantium eum obcaecati natus consequatur nisi voluptatibus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et laborum sunt ipsa molestias odit, accusamus iste labore doloribus cum enim est ea perferendis, laudantium eum obcaecati natus consequatur nisi voluptatibus.',
    tags: ['Ruby on rails', 'css', 'JavaScript', 'html'],
    images: [
      './assets/background/desktop-project.png',
      './assets/background/mobile-project.png',
    ],
    sourceLink: 'https://github.com/BahirHakimy/My-Portfolio',
    demoLink: 'https://bahirhakimy.github.io/My-Portfolio/',
  },
  {
    name: 'Multi-Post Stories Gain+Glory',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et laborum sunt ipsa molestias odit, accusamus iste labore doloribus cum enim est ea perferendis, laudantium eum obcaecati natus consequatur nisi voluptatibus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et laborum sunt ipsa molestias odit, accusamus iste labore doloribus cum enim est ea perferendis, laudantium eum obcaecati natus consequatur nisi voluptatibus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et laborum sunt ipsa molestias odit, accusamus iste labore doloribus cum enim est ea perferendis, laudantium eum obcaecati natus consequatur nisi voluptatibus.',
    tags: ['Ruby on rails', 'css', 'JavaScript', 'html'],
    images: [
      './assets/background/desktop-project.png',
      './assets/background/mobile-project.png',
    ],
    sourceLink: 'https://github.com/BahirHakimy/My-Portfolio',
    demoLink: 'https://bahirhakimy.github.io/My-Portfolio/',
  },
  {
    name: 'Multi-Post Stories Gain+Glory',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et laborum sunt ipsa molestias odit, accusamus iste labore doloribus cum enim est ea perferendis, laudantium eum obcaecati natus consequatur nisi voluptatibus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et laborum sunt ipsa molestias odit, accusamus iste labore doloribus cum enim est ea perferendis, laudantium eum obcaecati natus consequatur nisi voluptatibus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et laborum sunt ipsa molestias odit, accusamus iste labore doloribus cum enim est ea perferendis, laudantium eum obcaecati natus consequatur nisi voluptatibus.',
    tags: ['Ruby on rails', 'css', 'JavaScript', 'html'],
    images: [
      './assets/background/desktop-project.png',
      './assets/background/mobile-project.png',
    ],
    sourceLink: 'https://github.com/BahirHakimy/My-Portfolio',
    demoLink: 'https://bahirhakimy.github.io/My-Portfolio/',
  },
];

function createModel(project) {
  const model = createElement('div', { id: 'modal' });

  model.innerHTML = `
    <button id='modal-close'>
      <img src='./assets/icons/close.svg' alt='close-button' />
    </button>
    <picture class='modal-image'>
      <source
        srcset='${project.images[0]}'
        media='(min-width: 768px)'
      />
      <img
        class='modal-image'
        src='${project.images[1]}'
        alt='project-image'
      />
    </picture>
    <h2 class='modal-title text-secondary'>${project.name}</h2>
    <ul id='modal-tags' class='languages'>
    ${project.tags
      .map((tag) => `<li class='language-tags'>${tag}</li>`)
      .join('')}</ul>
    <p class='modal-text'>
     ${project.description}
    </p>
    <div id='modal-buttons-container'>
      <a href='${project.sourceLink}' class='modal-button'>
        See Live <img src='./assets/icons/githubWhite.svg' alt='icon' />
      </a>
      <a href='${project.demoLink}' class='modal-button'>
        See Source <img src='./assets/icons/see-live.svg' alt='icon' />
      </a>
    </div>`;
  return model;
}

function hideModel() {
  modalContainer.style.display = 'none';
  modalContainer.innerHTML = '';
  $('#container').style.overflow = 'auto';
}

function showModel(index = 0) {
  const project = projects[index];
  modalContainer.append(createModel(project));
  modalContainer.style.display = 'flex';
  document.getElementById('modal-close').onclick = () => hideModel();
  $('#container').style.overflow = 'hidden';
}

document.querySelectorAll('.project-btn').forEach((btn, index) => {
  btn.onclick = () => {
    showModel(index);
  };
});

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
