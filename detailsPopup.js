const projects = [
  {
    name: 'Tonic',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    featuredImage: 'assets/Snapshoot Portfolio.svg',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    linkToLiveVersion: 'https://hjlk.jk/dfjkls',
    linkToSource: 'https://gfsdf.hjlhs8h',
  },
  {
    name: 'Multi-Post Stories',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    featuredImage: 'assets/Snapshoot Portfolio-2.svg',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    linkToLiveVersion: 'https://hjlk.jk/dfjkls',
    linkToSource: 'https://gfsdf.hjlhs8h',
  },
  {
    name: 'Tonic',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    featuredImage: 'assets/Snapshoot Portfolio-3.svg',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    linkToLiveVersion: 'https://hjlk.jk/dfjkls',
    linkToSource: 'https://gfsdf.hjlhs8h',
  },
  {
    name: 'Multi-Post Stories',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    featuredImage: 'assets/Snapshoot Portfolio-4.svg',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    linkToLiveVersion: 'https://hjlk.jk/dfjkls',
    linkToSource: 'https://gfsdf.hjlhs8h',
  },
];

const classNames = ['work-one', 'work-two', 'work-three', 'work-four'];

const skillInfoListItems = [
  'CANOPY',
  '<img src="assets/Counter.png" alt="bullet" />',
  'Back End Dev',
  '<img src="assets/Counter.png" alt="bullet" />',
  '2015',
];

const languages = ['HTML', 'CSS', 'JavaScript'];

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

  skillInfoListItems.forEach((item) => {
    const li = document.createElement('li');
    li.innerHTML = item;
    skillInfo.appendChild(li);
  });

  const cardDescription = document.createElement('p');
  cardDescription.innerHTML = project.description;
  cardInfo.appendChild(cardDescription);

  const languageList = document.createElement('ul');
  languageList.classList.add('work-lang', 'flex-row');
  cardInfo.appendChild(languageList);

  languages.forEach((item) => {
    let languageListItem = document.createElement('li');
    languageListItem.innerHTML = item;
    languageList.appendChild(languageListItem);
  });

  const seeProjectButton = document.createElement('button');
  seeProjectButton.classList.add('see-project');
  seeProjectButton.innerHTML = 'See project';
  cardInfo.appendChild(seeProjectButton);

  const worksSection = document.querySelector('.works-section');
  worksSection.appendChild(container);
  count++;
});
