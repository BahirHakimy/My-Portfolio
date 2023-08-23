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
    name: 'Rent-a-car (Car reservations)',
    description:
      "A beautifull web app created using Ruby on Rails, React js, TailwindCSS and PostgreSQL where users can rent cars. It has a beautifull and responsive UI and also ability to add new cars or remove existent one's",
    tags: [
      'Ruby on rails',
      'React js',
      'Redux js',
      'TailwindCSS',
      'PostgreSQL',
    ],
    images: [
      './assets/images/rent-a-car-desktop.png',
      './assets/images/rent-a-car-mobile.png',
    ],
    sourceLink: 'https://github.com/BahirHakimy/rent-a-car',
    demoLink: 'https://rent-a-car-lmhu.onrender.com/',
  },
  {
    name: 'The Sky (Weather App)',
    description:
      'A beautifully made weather app that shows the weather condition based on the users location, it uses Open Weather api to fetch weather data.',
    tags: ['React js', 'TailwindCSS', 'Redux js', 'OpenWeather API'],
    images: [
      './assets/images/the-sky-desktop.png',
      './assets/images/the-sky-mobile.png',
    ],
    sourceLink: 'https://github.com/BahirHakimy/the-sky',
    demoLink: 'https://the-sky.onrender.com/',
  },
  {
    name: 'Doosti social app',
    description:
      'Doosti is a social app where users can send and receive private or group messages, find friends, send and receive friend requests, send or recieve files voice messages, emojis and more. It also has a light and a dark them. users can also serach for other users and see their profiles',
    tags: [
      'React js',
      'Django',
      'Django RestFramework',
      'StyledComponents',
      'EmotionCSS',
    ],
    images: [
      './assets/images/doosti-desktop.png',
      './assets/images/doosti-desktop.png',
    ],
    sourceLink: 'https://github.com/BahirHakimy/DoostiApp',
    demoLink: 'https://doostiapp.onrender.com/',
  },
  {
    name: 'NASAverse (Portraits of the universe)',
    description:
      'A beautiful website to surf through exciting pictures of the universe. Built with: (Javascript, Fetch API, HTML, CSS, Nasa Open API)',
    tags: ['Javascript', 'HTML', 'CSS', 'NASA Open API'],
    images: [
      './assets/images/nasaverse-desktop.png',
      './assets/images/nasaverse-desktop.png',
    ],
    sourceLink: 'https://github.com/jaimevillegas/Module-2-Capstone-Project/',
    demoLink: 'https://jaimevillegas.github.io/Module-2-Capstone-Project/',
  },
  {
    name: 'TODO List, Task Management App',
    description:
      'A minimal yet beautiful Todo app created by Javascript based on glass-morphism design patterns, its features include creating new todos, editing and deleting them, and reordering with dragging.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    images: [
      './assets/images/todo-desktop.png',
      './assets/images/todo-mobile.png',
    ],
    sourceLink: 'https://github.com/BahirHakimy/todo-list',
    demoLink: 'https://bahirhakimy.github.io/ToDo-List/',
  },
  {
    name: 'CSS 3D Flipping Clock',
    description:
      'Simple flipping clock made with HTML/CSS/JS, in this project I have used CSS 3D features to build a beautiful flipping clock.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    images: [
      './assets/images/3d-clock-desktop.png',
      './assets/background/3d-clock-mobile.png',
    ],
    sourceLink: 'https://github.com/BahirHakimy/3d-clock',
    demoLink: 'https://bahirhakimy.github.io/3D-Clock/',
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
      <a href='${project.demoLink}' class='modal-button'>
        See Live <img src='./assets/icons/see-live.svg' alt='icon' />
      </a>
      <a href='${project.sourceLink}' class='modal-button'>
        See Source <img src='./assets/icons/githubWhite.svg' alt='icon' />
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
