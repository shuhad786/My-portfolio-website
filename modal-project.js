const popupwindow = document.querySelector('.popup-container');
const popupclose = document.querySelector('.popup-close');
const maincontainer = document.querySelector('.main-container');

const ProjectArray1 = [{
  img: './images/desktop-project-background.png',
  button: 'See Project',
}];

const grid = document.querySelector('.desktop-project-grid');

for (let i = 0; i < ProjectArray1.length; i += 1) {
  const card = document.createElement('div');
  card.classList.add('desktop-project-1');

  const image = document.createElement('img');
  image.classList.add('project-background');
  image.src = ProjectArray1[i].img;

  const btn = document.createElement('button');
  btn.classList.add('project-button-1');
  btn.innerHTML = ProjectArray1[i].button;
  btn.addEventListener('click', () => {
    popupwindow.classList.toggle('show');
    maincontainer.style.filter = 'blur(50px)';
  });

  popupclose.addEventListener('click', () => {
    popupwindow.classList.remove('show');
    maincontainer.style.filter = 'blur(0px)';
  });

  grid.appendChild(card).appendChild(image);
  grid.appendChild(card).appendChild(btn);
}

const ProjectArray2 = [{
  title: 'Data Dashboard <br> Healthcare',
  img: './images/desktop-project-background-2.png',
  text: 'A daily selection of privately <br> personalized reads, no accounts or <br> sign-ups required has been <br> the industrys standard.',
  techstack1: 'html',
  techstack2: 'Bootstrap',
  techstack3: 'Ruby on rails',
  button: 'See Project',
}];

for (let i = 0; i < ProjectArray2.length; i += 1) {
  const card = document.createElement('div');
  card.classList.add('desktop-project-2');

  const image = document.createElement('img');
  image.classList.add('project-background');
  image.src = ProjectArray2[i].img;

  const title = document.createElement('h2');
  title.classList.add('desktop-project-title-2');
  title.innerHTML = ProjectArray2[i].title;

  const ContentText = document.createElement('p');
  ContentText.classList.add('desktop-project-description-2');
  ContentText.innerHTML = ProjectArray2[i].text;

  const ul = document.createElement('ul');
  ul.classList.add('project-list');

  const li1 = document.createElement('li');
  li1.classList.add('project-item');
  li1.innerHTML = ProjectArray2[i].techstack1;

  const li2 = document.createElement('li');
  li2.classList.add('project-item');
  li2.innerHTML = ProjectArray2[i].techstack2;

  const li3 = document.createElement('li');
  li3.classList.add('project-item');
  li3.innerHTML = ProjectArray2[i].techstack3;

  const btn = document.createElement('button');
  btn.classList.add('project-button-2');
  btn.innerHTML = ProjectArray2[i].button;
  btn.addEventListener('click', () => {
    popupwindow.classList.toggle('show');
    maincontainer.style.filter = 'blur(50px)';
  });

  popupclose.addEventListener('click', () => {
    popupwindow.classList.remove('show');
    maincontainer.style.filter = 'blur(0px)';
  });

  grid.appendChild(card).appendChild(image);
  grid.appendChild(card).appendChild(title);
  grid.appendChild(card).appendChild(ContentText);
  grid.appendChild(card).appendChild(ul).appendChild(li1);
  grid.appendChild(card).appendChild(ul).appendChild(li2);
  grid.appendChild(card).appendChild(ul).appendChild(li3);
  grid.appendChild(card).appendChild(btn);
}

const ProjectArray3 = [{
  title: 'Website Portfolio',
  img: './images/desktop-project-background-3.png',
  text: 'A daily selection of privately <br> personalized reads, no accounts or <br> sign-ups required has been <br> the industrys standard.',
  techstack1: 'html',
  techstack2: 'Bootstrap',
  techstack3: 'Ruby on rails',
  button: 'See Project',
}];

for (let i = 0; i < ProjectArray3.length; i += 1) {
  const card = document.createElement('div');
  card.classList.add('desktop-project-3');

  const image = document.createElement('img');
  image.classList.add('project-background');
  image.src = ProjectArray3[i].img;

  const title = document.createElement('h2');
  title.classList.add('desktop-project-title-3');
  title.innerHTML = ProjectArray3[i].title;

  const ContentText = document.createElement('p');
  ContentText.classList.add('desktop-project-description-3');
  ContentText.innerHTML = ProjectArray3[i].text;

  const ul = document.createElement('ul');
  ul.classList.add('project-list');

  const li1 = document.createElement('li');
  li1.classList.add('project-item');
  li1.innerHTML = ProjectArray3[i].techstack1;

  const li2 = document.createElement('li');
  li2.classList.add('project-item');
  li2.innerHTML = ProjectArray3[i].techstack2;

  const li3 = document.createElement('li');
  li3.classList.add('project-item');
  li3.innerHTML = ProjectArray3[i].techstack3;

  const btn = document.createElement('button');
  btn.classList.add('project-button-2');
  btn.innerHTML = ProjectArray3[i].button;
  btn.addEventListener('click', () => {
    popupwindow.classList.toggle('show');
    maincontainer.style.filter = 'blur(50px)';
  });

  popupclose.addEventListener('click', () => {
    popupwindow.classList.remove('show');
    maincontainer.style.filter = 'blur(0px)';
  });

  grid.appendChild(card).appendChild(image);
  grid.appendChild(card).appendChild(title);
  grid.appendChild(card).appendChild(ContentText);
  grid.appendChild(card).appendChild(ul).appendChild(li1);
  grid.appendChild(card).appendChild(ul).appendChild(li2);
  grid.appendChild(card).appendChild(ul).appendChild(li3);
  grid.appendChild(card).appendChild(btn);
}

const ProjectArray4 = [{
  title: 'Data Dashboard <br> Healthcare',
  img: './images/desktop-project-background-2.png',
  text: 'A daily selection of privately <br> personalized reads, no accounts or <br> sign-ups required has been <br> the industrys standard.',
  techstack1: 'html',
  techstack2: 'Bootstrap',
  techstack3: 'Ruby on rails',
  button: 'See Project',
}];

for (let i = 0; i < ProjectArray4.length; i += 1) {
  const card = document.createElement('div');
  card.classList.add('desktop-project-4');

  const image = document.createElement('img');
  image.classList.add('project-background');
  image.src = ProjectArray4[i].img;

  const title = document.createElement('h2');
  title.classList.add('desktop-project-title-4');
  title.innerHTML = ProjectArray4[i].title;

  const ContentText = document.createElement('p');
  ContentText.classList.add('desktop-project-description-4');
  ContentText.innerHTML = ProjectArray4[i].text;

  const ul = document.createElement('ul');
  ul.classList.add('project-list');

  const li1 = document.createElement('li');
  li1.classList.add('project-item');
  li1.innerHTML = ProjectArray4[i].techstack1;

  const li2 = document.createElement('li');
  li2.classList.add('project-item');
  li2.innerHTML = ProjectArray4[i].techstack2;

  const li3 = document.createElement('li');
  li3.classList.add('project-item');
  li3.innerHTML = ProjectArray4[i].techstack3;

  const btn = document.createElement('button');
  btn.classList.add('project-button-2');
  btn.innerHTML = ProjectArray4[i].button;
  btn.addEventListener('click', () => {
    popupwindow.classList.toggle('show');
    maincontainer.style.filter = 'blur(50px)';
  });

  popupclose.addEventListener('click', () => {
    popupwindow.classList.remove('show');
    maincontainer.style.filter = 'blur(0px)';
  });

  grid.appendChild(card).appendChild(image);
  grid.appendChild(card).appendChild(title);
  grid.appendChild(card).appendChild(ContentText);
  grid.appendChild(card).appendChild(ul).appendChild(li1);
  grid.appendChild(card).appendChild(ul).appendChild(li2);
  grid.appendChild(card).appendChild(ul).appendChild(li3);
  grid.appendChild(card).appendChild(btn);
}

const ProjectArray5 = [{
  title: 'Data Dashboard <br> Healthcare',
  img: './images/desktop-project-background-2.png',
  text: 'A daily selection of privately <br> personalized reads, no accounts or <br> sign-ups required has been <br> the industrys standard.',
  techstack1: 'html',
  techstack2: 'Bootstrap',
  techstack3: 'Ruby on rails',
  button: 'See Project',
}];

for (let i = 0; i < ProjectArray5.length; i += 1) {
  const card = document.createElement('div');
  card.classList.add('desktop-project-5');

  const image = document.createElement('img');
  image.classList.add('project-background');
  image.src = ProjectArray5[i].img;

  const title = document.createElement('h2');
  title.classList.add('desktop-project-title-5');
  title.innerHTML = ProjectArray5[i].title;

  const ContentText = document.createElement('p');
  ContentText.classList.add('desktop-project-description-5');
  ContentText.innerHTML = ProjectArray5[i].text;

  const ul = document.createElement('ul');
  ul.classList.add('project-list');

  const li1 = document.createElement('li');
  li1.classList.add('project-item');
  li1.innerHTML = ProjectArray5[i].techstack1;

  const li2 = document.createElement('li');
  li2.classList.add('project-item');
  li2.innerHTML = ProjectArray5[i].techstack2;

  const li3 = document.createElement('li');
  li3.classList.add('project-item');
  li3.innerHTML = ProjectArray5[i].techstack3;

  const btn = document.createElement('button');
  btn.classList.add('project-button-2');
  btn.innerHTML = ProjectArray5[i].button;
  btn.addEventListener('click', () => {
    popupwindow.classList.toggle('show');
    maincontainer.style.filter = 'blur(50px)';
  });

  popupclose.addEventListener('click', () => {
    popupwindow.classList.remove('show');
    maincontainer.style.filter = 'blur(0px)';
  });

  grid.appendChild(card).appendChild(image);
  grid.appendChild(card).appendChild(title);
  grid.appendChild(card).appendChild(ContentText);
  grid.appendChild(card).appendChild(ul).appendChild(li1);
  grid.appendChild(card).appendChild(ul).appendChild(li2);
  grid.appendChild(card).appendChild(ul).appendChild(li3);
  grid.appendChild(card).appendChild(btn);
}

const ProjectArray6 = [{
  title: 'Data Dashboard <br> Healthcare',
  img: './images/desktop-project-background-2.png',
  text: 'A daily selection of privately <br> personalized reads, no accounts or <br> sign-ups required has been <br> the industrys standard.',
  techstack1: 'html',
  techstack2: 'Bootstrap',
  techstack3: 'Ruby on rails',
  button: 'See Project',
}];

for (let i = 0; i < ProjectArray6.length; i += 1) {
  const card = document.createElement('div');
  card.classList.add('desktop-project-6');

  const image = document.createElement('img');
  image.classList.add('project-background');
  image.src = ProjectArray6[i].img;

  const title = document.createElement('h2');
  title.classList.add('desktop-project-title-6');
  title.innerHTML = ProjectArray6[i].title;

  const ContentText = document.createElement('p');
  ContentText.classList.add('desktop-project-description-6');
  ContentText.innerHTML = ProjectArray6[i].text;

  const ul = document.createElement('ul');
  ul.classList.add('project-list');

  const li1 = document.createElement('li');
  li1.classList.add('project-item');
  li1.innerHTML = ProjectArray6[i].techstack1;

  const li2 = document.createElement('li');
  li2.classList.add('project-item');
  li2.innerHTML = ProjectArray6[i].techstack2;

  const li3 = document.createElement('li');
  li3.classList.add('project-item');
  li3.innerHTML = ProjectArray6[i].techstack3;

  const btn = document.createElement('button');
  btn.classList.add('project-button-2');
  btn.innerHTML = ProjectArray6[i].button;
  btn.addEventListener('click', () => {
    popupwindow.classList.toggle('show');
    maincontainer.style.filter = 'blur(50px)';
  });

  popupclose.addEventListener('click', () => {
    popupwindow.classList.remove('show');
    maincontainer.style.filter = 'blur(0px)';
  });

  grid.appendChild(card).appendChild(image);
  grid.appendChild(card).appendChild(title);
  grid.appendChild(card).appendChild(ContentText);
  grid.appendChild(card).appendChild(ul).appendChild(li1);
  grid.appendChild(card).appendChild(ul).appendChild(li2);
  grid.appendChild(card).appendChild(ul).appendChild(li3);
  grid.appendChild(card).appendChild(btn);
}

const block = document.querySelector('.mobile-project');

const MProjectArray1 = [{
  title: 'Professional Art <br> Printing Data',
  img: './images/Project-background.png',
  text: 'A daily selection of privately <br> personalized reads, no accounts or <br> sign-ups required has been <br> the industrys standard.',
  techstack1: 'html',
  techstack2: 'Bootstrap',
  techstack3: 'Ruby on rails',
  button: 'See Project',
}];

for (let i = 0; i < MProjectArray1.length; i += 1) {
  const card = document.createElement('div');
  card.classList.add('project-1');

  const image = document.createElement('img');
  image.classList.add('project-background');
  image.src = MProjectArray1[i].img;

  const title = document.createElement('h2');
  title.classList.add('project-title');
  title.innerHTML = MProjectArray1[i].title;

  const ContentText = document.createElement('p');
  ContentText.classList.add('project-description');
  ContentText.innerHTML = MProjectArray1[i].text;

  const ul = document.createElement('ul');
  ul.classList.add('project-list');

  const li1 = document.createElement('li');
  li1.classList.add('project-item');
  li1.innerHTML = MProjectArray1[i].techstack1;

  const li2 = document.createElement('li');
  li2.classList.add('project-item');
  li2.innerHTML = MProjectArray1[i].techstack2;

  const li3 = document.createElement('li');
  li3.classList.add('project-item');
  li3.innerHTML = MProjectArray1[i].techstack3;

  const btn = document.createElement('button');
  btn.classList.add('Mproject-button-1');
  btn.innerHTML = MProjectArray1[i].button;
  btn.addEventListener('click', () => {
    popupwindow.classList.toggle('show');
    maincontainer.style.filter = 'blur(50px)';
  });

  popupclose.addEventListener('click', () => {
    popupwindow.classList.remove('show');
    maincontainer.style.filter = 'blur(0px)';
  });

  block.appendChild(card).appendChild(image);
  block.appendChild(card).appendChild(title);
  block.appendChild(card).appendChild(ContentText);
  block.appendChild(card).appendChild(ul).appendChild(li1);
  block.appendChild(card).appendChild(ul).appendChild(li2);
  block.appendChild(card).appendChild(ul).appendChild(li3);
  block.appendChild(card).appendChild(btn);
}

const MProjectArray2 = [{
  title: 'Professional Art <br> Printing Data',
  img: './images/Project-background.png',
  text: 'A daily selection of privately <br> personalized reads, no accounts or <br> sign-ups required has been <br> the industrys standard.',
  techstack1: 'html',
  techstack2: 'Bootstrap',
  techstack3: 'Ruby on rails',
  button: 'See Project',
}];

for (let i = 0; i < MProjectArray2.length; i += 1) {
  const card = document.createElement('div');
  card.classList.add('project-2');

  const image = document.createElement('img');
  image.classList.add('project-background');
  image.src = MProjectArray2[i].img;

  const title = document.createElement('h2');
  title.classList.add('project-title');
  title.innerHTML = MProjectArray2[i].title;

  const ContentText = document.createElement('p');
  ContentText.classList.add('project-description');
  ContentText.innerHTML = MProjectArray2[i].text;

  const ul = document.createElement('ul');
  ul.classList.add('project-list');

  const li1 = document.createElement('li');
  li1.classList.add('project-item');
  li1.innerHTML = MProjectArray2[i].techstack1;

  const li2 = document.createElement('li');
  li2.classList.add('project-item');
  li2.innerHTML = MProjectArray2[i].techstack2;

  const li3 = document.createElement('li');
  li3.classList.add('project-item');
  li3.innerHTML = MProjectArray2[i].techstack3;

  const btn = document.createElement('button');
  btn.classList.add('Mproject-button-1');
  btn.innerHTML = MProjectArray2[i].button;
  btn.addEventListener('click', () => {
    popupwindow.classList.toggle('show');
    maincontainer.style.filter = 'blur(50px)';
  });

  popupclose.addEventListener('click', () => {
    popupwindow.classList.remove('show');
    maincontainer.style.filter = 'blur(0px)';
  });

  block.appendChild(card).appendChild(image);
  block.appendChild(card).appendChild(title);
  block.appendChild(card).appendChild(ContentText);
  block.appendChild(card).appendChild(ul).appendChild(li1);
  block.appendChild(card).appendChild(ul).appendChild(li2);
  block.appendChild(card).appendChild(ul).appendChild(li3);
  block.appendChild(card).appendChild(btn);
}

const MProjectArray3 = [{
  title: 'Professional Art <br> Printing Data',
  img: './images/Project-background.png',
  text: 'A daily selection of privately <br> personalized reads, no accounts or <br> sign-ups required has been <br> the industrys standard.',
  techstack1: 'html',
  techstack2: 'Bootstrap',
  techstack3: 'Ruby on rails',
  button: 'See Project',
}];

for (let i = 0; i < MProjectArray3.length; i += 1) {
  const card = document.createElement('div');
  card.classList.add('project-3');

  const image = document.createElement('img');
  image.classList.add('project-background');
  image.src = MProjectArray3[i].img;

  const title = document.createElement('h2');
  title.classList.add('project-title');
  title.innerHTML = MProjectArray3[i].title;

  const ContentText = document.createElement('p');
  ContentText.classList.add('project-description');
  ContentText.innerHTML = MProjectArray3[i].text;

  const ul = document.createElement('ul');
  ul.classList.add('project-list');

  const li1 = document.createElement('li');
  li1.classList.add('project-item');
  li1.innerHTML = MProjectArray3[i].techstack1;

  const li2 = document.createElement('li');
  li2.classList.add('project-item');
  li2.innerHTML = MProjectArray3[i].techstack2;

  const li3 = document.createElement('li');
  li3.classList.add('project-item');
  li3.innerHTML = MProjectArray3[i].techstack3;

  const btn = document.createElement('button');
  btn.classList.add('Mproject-button-1');
  btn.innerHTML = MProjectArray3[i].button;
  btn.addEventListener('click', () => {
    popupwindow.classList.toggle('show');
    maincontainer.style.filter = 'blur(50px)';
  });

  popupclose.addEventListener('click', () => {
    popupwindow.classList.remove('show');
    maincontainer.style.filter = 'blur(0px)';
  });

  block.appendChild(card).appendChild(image);
  block.appendChild(card).appendChild(title);
  block.appendChild(card).appendChild(ContentText);
  block.appendChild(card).appendChild(ul).appendChild(li1);
  block.appendChild(card).appendChild(ul).appendChild(li2);
  block.appendChild(card).appendChild(ul).appendChild(li3);
  block.appendChild(card).appendChild(btn);
}

const MProjectArray4 = [{
  title: 'Professional Art <br> Printing Data',
  img: './images/Project-background.png',
  text: 'A daily selection of privately <br> personalized reads, no accounts or <br> sign-ups required has been <br> the industrys standard.',
  techstack1: 'html',
  techstack2: 'Bootstrap',
  techstack3: 'Ruby on rails',
  button: 'See Project',
}];

for (let i = 0; i < MProjectArray4.length; i += 1) {
  const card = document.createElement('div');
  card.classList.add('project-4');

  const image = document.createElement('img');
  image.classList.add('project-background');
  image.src = MProjectArray4[i].img;

  const title = document.createElement('h2');
  title.classList.add('project-title');
  title.innerHTML = MProjectArray4[i].title;

  const ContentText = document.createElement('p');
  ContentText.classList.add('project-description');
  ContentText.innerHTML = MProjectArray4[i].text;

  const ul = document.createElement('ul');
  ul.classList.add('project-list');

  const li1 = document.createElement('li');
  li1.classList.add('project-item');
  li1.innerHTML = MProjectArray4[i].techstack1;

  const li2 = document.createElement('li');
  li2.classList.add('project-item');
  li2.innerHTML = MProjectArray4[i].techstack2;

  const li3 = document.createElement('li');
  li3.classList.add('project-item');
  li3.innerHTML = MProjectArray4[i].techstack3;

  const btn = document.createElement('button');
  btn.classList.add('Mproject-button-1');
  btn.innerHTML = MProjectArray4[i].button;
  btn.addEventListener('click', () => {
    popupwindow.classList.toggle('show');
    maincontainer.style.filter = 'blur(50px)';
  });

  popupclose.addEventListener('click', () => {
    popupwindow.classList.remove('show');
    maincontainer.style.filter = 'blur(0px)';
  });

  block.appendChild(card).appendChild(image);
  block.appendChild(card).appendChild(title);
  block.appendChild(card).appendChild(ContentText);
  block.appendChild(card).appendChild(ul).appendChild(li1);
  block.appendChild(card).appendChild(ul).appendChild(li2);
  block.appendChild(card).appendChild(ul).appendChild(li3);
  block.appendChild(card).appendChild(btn);
}

const MProjectArray5 = [{
  title: 'Professional Art <br> Printing Data',
  img: './images/Project-background.png',
  text: 'A daily selection of privately <br> personalized reads, no accounts or <br> sign-ups required has been <br> the industrys standard.',
  techstack1: 'html',
  techstack2: 'Bootstrap',
  techstack3: 'Ruby on rails',
  button: 'See Project',
}];

for (let i = 0; i < MProjectArray1.length; i += 1) {
  const card = document.createElement('div');
  card.classList.add('project-5');

  const image = document.createElement('img');
  image.classList.add('project-background');
  image.src = MProjectArray5[i].img;

  const title = document.createElement('h2');
  title.classList.add('project-title');
  title.innerHTML = MProjectArray5[i].title;

  const ContentText = document.createElement('p');
  ContentText.classList.add('project-description');
  ContentText.innerHTML = MProjectArray5[i].text;

  const ul = document.createElement('ul');
  ul.classList.add('project-list');

  const li1 = document.createElement('li');
  li1.classList.add('project-item');
  li1.innerHTML = MProjectArray5[i].techstack1;

  const li2 = document.createElement('li');
  li2.classList.add('project-item');
  li2.innerHTML = MProjectArray5[i].techstack2;

  const li3 = document.createElement('li');
  li3.classList.add('project-item');
  li3.innerHTML = MProjectArray5[i].techstack3;

  const btn = document.createElement('button');
  btn.classList.add('Mproject-button-1');
  btn.innerHTML = MProjectArray5[i].button;
  btn.addEventListener('click', () => {
    popupwindow.classList.toggle('show');
    maincontainer.style.filter = 'blur(50px)';
  });

  popupclose.addEventListener('click', () => {
    popupwindow.classList.remove('show');
    maincontainer.style.filter = 'blur(0px)';
  });

  block.appendChild(card).appendChild(image);
  block.appendChild(card).appendChild(title);
  block.appendChild(card).appendChild(ContentText);
  block.appendChild(card).appendChild(ul).appendChild(li1);
  block.appendChild(card).appendChild(ul).appendChild(li2);
  block.appendChild(card).appendChild(ul).appendChild(li3);
  block.appendChild(card).appendChild(btn);
}

const MProjectArray6 = [{
  title: 'Professional Art <br> Printing Data',
  img: './images/Project-background.png',
  text: 'A daily selection of privately <br> personalized reads, no accounts or <br> sign-ups required has been <br> the industrys standard.',
  techstack1: 'html',
  techstack2: 'Bootstrap',
  techstack3: 'Ruby on rails',
  button: 'See Project',
}];

for (let i = 0; i < MProjectArray6.length; i += 1) {
  const card = document.createElement('div');
  card.classList.add('project-6');

  const image = document.createElement('img');
  image.classList.add('project-background');
  image.src = MProjectArray6[i].img;

  const title = document.createElement('h2');
  title.classList.add('project-title');
  title.innerHTML = MProjectArray6[i].title;

  const ContentText = document.createElement('p');
  ContentText.classList.add('project-description');
  ContentText.innerHTML = MProjectArray6[i].text;

  const ul = document.createElement('ul');
  ul.classList.add('project-list');

  const li1 = document.createElement('li');
  li1.classList.add('project-item');
  li1.innerHTML = MProjectArray6[i].techstack1;

  const li2 = document.createElement('li');
  li2.classList.add('project-item');
  li2.innerHTML = MProjectArray6[i].techstack2;

  const li3 = document.createElement('li');
  li3.classList.add('project-item');
  li3.innerHTML = MProjectArray6[i].techstack3;

  const btn = document.createElement('button');
  btn.classList.add('Mproject-button-1');
  btn.innerHTML = MProjectArray6[i].button;
  btn.addEventListener('click', () => {
    popupwindow.classList.toggle('show');
    maincontainer.style.filter = 'blur(50px)';
  });

  popupclose.addEventListener('click', () => {
    popupwindow.classList.remove('show');
    maincontainer.style.filter = 'blur(0px)';
  });

  block.appendChild(card).appendChild(image);
  block.appendChild(card).appendChild(title);
  block.appendChild(card).appendChild(ContentText);
  block.appendChild(card).appendChild(ul).appendChild(li1);
  block.appendChild(card).appendChild(ul).appendChild(li2);
  block.appendChild(card).appendChild(ul).appendChild(li3);
  block.appendChild(card).appendChild(btn);
}
