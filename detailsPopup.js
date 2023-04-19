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

  projects[0].technologies.forEach((item) => {
    const languageListItem = document.createElement('li');
    languageListItem.innerHTML = item;
    languageList.appendChild(languageListItem);
  });

  const seeProjectButton = document.createElement('button');
  seeProjectButton.classList.add('see-project');
  seeProjectButton.innerHTML = 'See project';
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
    }

    projects[0].technologies.forEach((item) => {
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

    skillInfoListItems.forEach((item) => {
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
