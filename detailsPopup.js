const projects = [
  {
    name: 'Budget<br>Monitor',
    description:
      'Start managing your finances and achieving your financial goals with ease.',
    featuredImage: 'assets/Snapshot Portfolio-1.png',
    technologies: ['RoR', 'PostgreSQL', 'Tailwind CSS'],
    linkToLiveVersion: 'https://budget-b2sg.onrender.com/',
    linkToSource: 'https://github.com/VaheStepanyan100/budget-app',
    items: [
      'CANOPY',
      '<img src="assets/Counter.png" alt="bullet" />',
      'Full Stack Dev',
      '<img src="assets/Counter.png" alt="bullet" />',
      '2023',
    ],
  },
  {
    name: 'Metrics<br>Web App',
    description:
      'Metrics web application aimed at tracking and analyzing data. It provides users with a user-friendly interface to view and manage data.',
    featuredImage: 'assets/Snapshot Portfolio-2.png',
    technologies: ['React', 'Redux', 'Styled Component'],
    linkToLiveVersion: 'https://vahestepanyan100.github.io/metrics-webapp/',
    linkToSource: 'https://github.com/VaheStepanyan100/metrics-webapp',
    items: [
      'CANOPY',
      '<img src="assets/Counter.png" alt="bullet" />',
      'Front-End Dev',
      '<img src="assets/Counter.png" alt="bullet" />',
      '2023',
    ],
  },
  {
    name: 'Bookstore',
    description:
      'Bookstore project provides a practical and engaging platform for individuals looking to expand their knowledge and skills in React and Redux while developing a fully functional web application for managing book-related information.',
    featuredImage: 'assets/Snapshot Portfolio-3.png',
    technologies: ['React', 'Redux', 'Styled Component'],
    linkToLiveVersion: 'https://vahestepanyan100.github.io/bookstore/',
    linkToSource: 'https://github.com/VaheStepanyan100/bookstore',
    items: [
      'CANOPY',
      '<img src="assets/Counter.png" alt="bullet" />',
      'Front-End Dev',
      '<img src="assets/Counter.png" alt="bullet" />',
      '2023',
    ],
  },
  {
    name: 'Space<br>Travelers Hub',
    description:
      'Real live data from the SpaceX API. Web application for a company that provides commercial and scientific space travel services. The application allow users to book rockets and join selected space missions.',
    featuredImage: 'assets/Snapshot Portfolio-4.png',
    technologies: ['React', 'Redux', 'Styled Component'],
    linkToLiveVersion:
      'https://vahestepanyan100.github.io/space-travelers-hub/',
    linkToSource: 'https://github.com/VaheStepanyan100/space-travelers-hub',
    items: [
      'CANOPY',
      '<img src="assets/Counter.png" alt="bullet" />',
      'Front-End Dev',
      '<img src="assets/Counter.png" alt="bullet" />',
      '2023',
    ],
  },
  {
    name: 'Math Magicians',
    description:
      'Math Magicians is a website for all fans of mathematics. It is a Single Page App (SPA) that allows users to:  Make simple calculations. Read a random math-related quote.',
    featuredImage: 'assets/Snapshot Portfolio-5.png',
    technologies: ['React', 'CSS'],
    linkToLiveVersion: 'https://vahestepanyan100.github.io/math-magicians/',
    linkToSource: 'https://github.com/VaheStepanyan100/math-magicians',
    items: [
      'CANOPY',
      '<img src="assets/Counter.png" alt="bullet" />',
      'Front-End Dev',
      '<img src="assets/Counter.png" alt="bullet" />',
      '2023',
    ],
  },
];

const classNames = [
  'work-one',
  'work-two',
  'work-three',
  'work-four',
  'work-five',
];

let count = 0;

projects.forEach((project) => {
  const container = document.createElement('article');
  container.classList.add('work', 'flex-column', classNames[count]);

  const cardImage = document.createElement('img');
  cardImage.setAttribute('src', project.featuredImage);
  cardImage.setAttribute('alt', `A snapshot of ${project.name} project`);
  cardImage.classList.add('scale');
  container.appendChild(cardImage);

  const cardInfo = document.createElement('div');
  cardInfo.classList.add('card-info');
  container.appendChild(cardInfo);

  const cardTitle = document.createElement('h3');
  cardTitle.innerHTML = project.name;
  cardInfo.appendChild(cardTitle);

  const skillInfo = document.createElement('ul');
  skillInfo.classList.add('skill-info', 'flex-row');
  cardInfo.appendChild(skillInfo);

  project.items.forEach((item) => {
    const li = document.createElement('li');
    li.innerHTML = item;
    skillInfo.appendChild(li);
  });

  const cardDescription = document.createElement('p');
  cardDescription.innerText = project.description;
  cardInfo.appendChild(cardDescription);

  const languageList = document.createElement('ul');
  languageList.classList.add('work-lang', 'flex-row');
  cardInfo.appendChild(languageList);

  project.technologies.forEach((item) => {
    const languageListItem = document.createElement('li');
    languageListItem.innerText = item;
    languageList.appendChild(languageListItem);
  });

  const seeProjectButton = document.createElement('button');
  seeProjectButton.classList.add('see-project');
  seeProjectButton.innerText = 'See project';
  cardInfo.appendChild(seeProjectButton);

  const worksSection = document.querySelector('.works-section');
  worksSection.appendChild(container);
  count += 1;
});

const seeProject = document.querySelectorAll('.see-project');
const detailPopup = document.querySelector('.detail-popup');
const closeIcon = document.querySelector('.close-button');

closeIcon.addEventListener('click', () => {
  detailPopup.classList.add('hide');
  const destruction = document.querySelectorAll(
    '.info li, .skills li, .detail-image',
  );
  for (let i = 0; i < destruction.length; i += 1) {
    destruction[i].parentNode.removeChild(destruction[i]);
  }
  if (detailPopup.classList.contains('hide')) {
    document.querySelector('.header').style.backgroundColor = '';
    document.querySelector('.intro').style.backgroundColor = '';
    document.querySelector('.about-article').style.backgroundColor = '';
    document.querySelector('.about-article').style.backgroundColor = '';
    document.body.style.backgroundColor = '';
  }
});

seeProject.forEach((el) => {
  el.addEventListener('click', (e) => {
    let i;
    const workClassNumber = e.target.closest('.work');
    if (workClassNumber.classList.contains('work-one')) {
      i = 0;
    } else if (workClassNumber.classList.contains('work-two')) {
      i = 1;
    } else if (workClassNumber.classList.contains('work-three')) {
      i = 2;
    } else if (workClassNumber.classList.contains('work-four')) {
      i = 3;
    } else if (workClassNumber.classList.contains('work-five')) {
      i = 4;
    }

    projects[i].technologies.forEach((item) => {
      const skills = document.querySelector('.skills');
      const skillItem = document.createElement('li');
      skillItem.innerHTML = item;
      skills.appendChild(skillItem);
    });

    const detailDescription = document.querySelector('.desc');
    detailDescription.innerHTML = projects[i].description;
    detailPopup.prepend(detailDescription);

    const detailImage = document.createElement('img');
    detailImage.setAttribute('src', projects[i].featuredImage);
    detailImage.classList.add('detail-image');
    detailImage.setAttribute('alt', `Snapshot of ${projects[i].name}`);
    detailPopup.prepend(detailImage);

    const seeLive = document.querySelector('#see-live');
    const seeSource = document.querySelector('#see-source');
    seeLive.setAttribute('href', projects[i].linkToLiveVersion);
    seeSource.setAttribute('href', projects[i].linkToSource);

    projects[i].items.forEach((item) => {
      const info = document.querySelector('.info');
      const detailInfo = document.createElement('li');
      detailInfo.innerHTML = item;
      info.appendChild(detailInfo);
      detailPopup.prepend(info);
    });

    const detailTitle = document.querySelector('.title');
    detailTitle.innerHTML = projects[i].name;
    detailPopup.prepend(detailTitle);

    detailPopup.classList.remove('hide');
    if (!detailPopup.classList.contains('hide')) {
      document.querySelector('.header').style.backgroundColor = '#C1C7D0';
      document.querySelector('.intro').style.backgroundColor = '#C1C7D0';
      document.querySelector('.about-article').style.backgroundColor = '#C1C7D0';
      document.querySelector('.about-article').style.backgroundColor = '#C1C7D0';
      document.body.style.backgroundColor = '#C1C7D0';
    }
  });
});
