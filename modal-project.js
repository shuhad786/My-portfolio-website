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
  ContentText.classList.add('popup-text-mobile');
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

  grid.appendChild(card).appendChild(image);
  grid.appendChild(card).appendChild(title);
  grid.appendChild(card).appendChild(ContentText);
  grid.appendChild(card).appendChild(ul).appendChild(li1);
  grid.appendChild(card).appendChild(ul).appendChild(li2);
  grid.appendChild(card).appendChild(ul).appendChild(li3);
  grid.appendChild(card).appendChild(btn);
}
  
//   const ProjectArray3 = [{
//     title: 'Multi-Post Stories',
//     titleDesktop: 'Keeping track of hundreds  of components website',
//     img: './images/popup-background-image.png',
//     text1: 'Lorem Ipsum is simply dummy text of the <br> printing and typesetting industry. Lorem <br> Ipsum has been the industrys standard <br> dummy text ever since the 1500s, when <br> an unknown printer took a galley of type <br> and scrambled it to make a type <br> specimen book. It has survived not only <br> five centuries, but also the leap into <br> electronic typesetting, remaining essent',
//     text2: 'Lorem Ipsum is simply dummy text of the printing and <br> typesetting industry. Lorem Ipsum has been the <br> industrys standard dummy text ever since the 1500s, <br> when an unknown printer took a galley of type and <br> scrambled it 1960s with the releaLorem Ipsum is simply <br> dummy text of the printing and typesetting industry. <br> Lorem Ipsum has been the industrys standard dummy <br> text ever since the 1500s, when an unknown printer <br> took a galley of type and scrambled it 1960s with the <br> releax map lapora verita.',
//     techstack1: 'html',
//     techstack2: 'Bootstrap',
//     techstack3: 'Ruby on rails',
//     button1: 'See Live',
//     button2: 'See Source',
//     button1Img: './images/popup-icon-see project.png',
//     button2Img: './images/popup-icon-github.png',
//   }];

// for (let i = 0; i < ProjectArray3.length; i += 1) {
//   const card = document.createElement('div');
//   card.classList.add('popup-container');

//   const head = document.createElement('div');
//   head.classList.add('popup-head');

//   const L1 = document.createElement('div');
//   L1.classList.add('popup-layout1');

//   const L2 = document.createElement('div');
//   L2.classList.add('popup-layout2');

//   const btnRow = document.createElement('div');
//   btnRow.classList.add('btn-row');

//   const title1 = document.createElement('h2');
//   title1.classList.add('popup-title');
//   title1.innerHTML = PopupArray[i].title;

//   const title2 = document.createElement('h2');
//   title2.classList.add('popup-title-desktop');
//   title2.innerHTML = PopupArray[i].titleDesktop;

//   const closebtn = document.createElement('div');
//   closebtn.classList.add('popup-close');

//   const bar1 = document.createElement('span');
//   bar1.classList.add('popup-bar');

//   const bar2 = document.createElement('span');
//   bar2.classList.add('popup-bar');

//   const bar3 = document.createElement('span');
//   bar3.classList.add('popup-bar');

//   const image = document.createElement('img');
//   image.classList.add('popup-project-image');
//   image.src = PopupArray[i].img;

//   const ContentText1 = document.createElement('p');
//   ContentText1.classList.add('popup-text-mobile');
//   ContentText1.innerHTML = PopupArray[i].text1;

//   const ContentText2 = document.createElement('p');
//   ContentText2.classList.add('popup-text-desktop');
//   ContentText2.innerHTML = PopupArray[i].text2;

//   const ul = document.createElement('ul');
//   ul.classList.add('popup-tech-container');

//   const li1 = document.createElement('li');
//   li1.innerHTML = PopupArray[i].techstack1;

//   const li2 = document.createElement('li');
//   li2.innerHTML = PopupArray[i].techstack2;

//   const li3 = document.createElement('li');
//   li3.innerHTML = PopupArray[i].techstack3;

//   const imageLive = document.createElement('img');
//   imageLive.src = PopupArray[i].button1Img;

//   const btn1 = document.createElement('button');
//   btn1.classList.add('btn1');
//   btn1.innerHTML = PopupArray[i].button1;
//   btn1.appendChild(imageLive);

//   const imageSource = document.createElement('img');
//   imageSource.src = PopupArray[i].button2Img;

//   const btn2 = document.createElement('button');
//   btn2.classList.add('btn2');
//   btn2.innerHTML = PopupArray[i].button2;
//   btn2.appendChild(imageSource);

//   PopupWrap.appendChild(card).appendChild(head).appendChild(title1);
//   PopupWrap.appendChild(card).appendChild(head).appendChild(title2);
//   PopupWrap.appendChild(card).appendChild(head).appendChild(closebtn).appendChild(bar1);
//   PopupWrap.appendChild(card).appendChild(head).appendChild(closebtn).appendChild(bar2);
//   PopupWrap.appendChild(card).appendChild(head).appendChild(closebtn).appendChild(bar3);
//   PopupWrap.appendChild(card).appendChild(ul).appendChild(li1);
//   PopupWrap.appendChild(card).appendChild(ul).appendChild(li2);
//   PopupWrap.appendChild(card).appendChild(ul).appendChild(li3);
//   PopupWrap.appendChild(card).appendChild(L1).appendChild(image);
//   PopupWrap.appendChild(card).appendChild(L1).appendChild(ContentText1);
//   PopupWrap.appendChild(card).appendChild(L1).appendChild(L2).appendChild(ContentText2);
//   PopupWrap
//     .appendChild(card)
//     .appendChild(L1)
//     .appendChild(L2)
//     .appendChild(btnRow)
//     .appendChild(btn1);
//   PopupWrap
//     .appendChild(card)
//     .appendChild(L1)
//     .appendChild(L2)
//     .appendChild(btnRow)
//     .appendChild(btn2);
// }

//   const ProjectArray4 = [{
//     title: 'Multi-Post Stories',
//     titleDesktop: 'Keeping track of hundreds  of components website',
//     img: './images/popup-background-image.png',
//     text1: 'Lorem Ipsum is simply dummy text of the <br> printing and typesetting industry. Lorem <br> Ipsum has been the industrys standard <br> dummy text ever since the 1500s, when <br> an unknown printer took a galley of type <br> and scrambled it to make a type <br> specimen book. It has survived not only <br> five centuries, but also the leap into <br> electronic typesetting, remaining essent',
//     text2: 'Lorem Ipsum is simply dummy text of the printing and <br> typesetting industry. Lorem Ipsum has been the <br> industrys standard dummy text ever since the 1500s, <br> when an unknown printer took a galley of type and <br> scrambled it 1960s with the releaLorem Ipsum is simply <br> dummy text of the printing and typesetting industry. <br> Lorem Ipsum has been the industrys standard dummy <br> text ever since the 1500s, when an unknown printer <br> took a galley of type and scrambled it 1960s with the <br> releax map lapora verita.',
//     techstack1: 'html',
//     techstack2: 'Bootstrap',
//     techstack3: 'Ruby on rails',
//     button1: 'See Live',
//     button2: 'See Source',
//     button1Img: './images/popup-icon-see project.png',
//     button2Img: './images/popup-icon-github.png',
//   }];

// for (let i = 0; i < ProjectArray4.length; i += 1) {
//   const card = document.createElement('div');
//   card.classList.add('popup-container');

//   const head = document.createElement('div');
//   head.classList.add('popup-head');

//   const L1 = document.createElement('div');
//   L1.classList.add('popup-layout1');

//   const L2 = document.createElement('div');
//   L2.classList.add('popup-layout2');

//   const btnRow = document.createElement('div');
//   btnRow.classList.add('btn-row');

//   const title1 = document.createElement('h2');
//   title1.classList.add('popup-title');
//   title1.innerHTML = PopupArray[i].title;

//   const title2 = document.createElement('h2');
//   title2.classList.add('popup-title-desktop');
//   title2.innerHTML = PopupArray[i].titleDesktop;

//   const closebtn = document.createElement('div');
//   closebtn.classList.add('popup-close');

//   const bar1 = document.createElement('span');
//   bar1.classList.add('popup-bar');

//   const bar2 = document.createElement('span');
//   bar2.classList.add('popup-bar');

//   const bar3 = document.createElement('span');
//   bar3.classList.add('popup-bar');

//   const image = document.createElement('img');
//   image.classList.add('popup-project-image');
//   image.src = PopupArray[i].img;

//   const ContentText1 = document.createElement('p');
//   ContentText1.classList.add('popup-text-mobile');
//   ContentText1.innerHTML = PopupArray[i].text1;

//   const ContentText2 = document.createElement('p');
//   ContentText2.classList.add('popup-text-desktop');
//   ContentText2.innerHTML = PopupArray[i].text2;

//   const ul = document.createElement('ul');
//   ul.classList.add('popup-tech-container');

//   const li1 = document.createElement('li');
//   li1.innerHTML = PopupArray[i].techstack1;

//   const li2 = document.createElement('li');
//   li2.innerHTML = PopupArray[i].techstack2;

//   const li3 = document.createElement('li');
//   li3.innerHTML = PopupArray[i].techstack3;

//   const imageLive = document.createElement('img');
//   imageLive.src = PopupArray[i].button1Img;

//   const btn1 = document.createElement('button');
//   btn1.classList.add('btn1');
//   btn1.innerHTML = PopupArray[i].button1;
//   btn1.appendChild(imageLive);

//   const imageSource = document.createElement('img');
//   imageSource.src = PopupArray[i].button2Img;

//   const btn2 = document.createElement('button');
//   btn2.classList.add('btn2');
//   btn2.innerHTML = PopupArray[i].button2;
//   btn2.appendChild(imageSource);

//   PopupWrap.appendChild(card).appendChild(head).appendChild(title1);
//   PopupWrap.appendChild(card).appendChild(head).appendChild(title2);
//   PopupWrap.appendChild(card).appendChild(head).appendChild(closebtn).appendChild(bar1);
//   PopupWrap.appendChild(card).appendChild(head).appendChild(closebtn).appendChild(bar2);
//   PopupWrap.appendChild(card).appendChild(head).appendChild(closebtn).appendChild(bar3);
//   PopupWrap.appendChild(card).appendChild(ul).appendChild(li1);
//   PopupWrap.appendChild(card).appendChild(ul).appendChild(li2);
//   PopupWrap.appendChild(card).appendChild(ul).appendChild(li3);
//   PopupWrap.appendChild(card).appendChild(L1).appendChild(image);
//   PopupWrap.appendChild(card).appendChild(L1).appendChild(ContentText1);
//   PopupWrap.appendChild(card).appendChild(L1).appendChild(L2).appendChild(ContentText2);
//   PopupWrap
//     .appendChild(card)
//     .appendChild(L1)
//     .appendChild(L2)
//     .appendChild(btnRow)
//     .appendChild(btn1);
//   PopupWrap
//     .appendChild(card)
//     .appendChild(L1)
//     .appendChild(L2)
//     .appendChild(btnRow)
//     .appendChild(btn2);
// }

//   const ProjectArray5 = [{
//     title: 'Multi-Post Stories',
//     titleDesktop: 'Keeping track of hundreds  of components website',
//     img: './images/popup-background-image.png',
//     text1: 'Lorem Ipsum is simply dummy text of the <br> printing and typesetting industry. Lorem <br> Ipsum has been the industrys standard <br> dummy text ever since the 1500s, when <br> an unknown printer took a galley of type <br> and scrambled it to make a type <br> specimen book. It has survived not only <br> five centuries, but also the leap into <br> electronic typesetting, remaining essent',
//     text2: 'Lorem Ipsum is simply dummy text of the printing and <br> typesetting industry. Lorem Ipsum has been the <br> industrys standard dummy text ever since the 1500s, <br> when an unknown printer took a galley of type and <br> scrambled it 1960s with the releaLorem Ipsum is simply <br> dummy text of the printing and typesetting industry. <br> Lorem Ipsum has been the industrys standard dummy <br> text ever since the 1500s, when an unknown printer <br> took a galley of type and scrambled it 1960s with the <br> releax map lapora verita.',
//     techstack1: 'html',
//     techstack2: 'Bootstrap',
//     techstack3: 'Ruby on rails',
//     button1: 'See Live',
//     button2: 'See Source',
//     button1Img: './images/popup-icon-see project.png',
//     button2Img: './images/popup-icon-github.png',
//   }];

// for (let i = 0; i < ProjectArray5.length; i += 1) {
//   const card = document.createElement('div');
//   card.classList.add('popup-container');

//   const head = document.createElement('div');
//   head.classList.add('popup-head');

//   const L1 = document.createElement('div');
//   L1.classList.add('popup-layout1');

//   const L2 = document.createElement('div');
//   L2.classList.add('popup-layout2');

//   const btnRow = document.createElement('div');
//   btnRow.classList.add('btn-row');

//   const title1 = document.createElement('h2');
//   title1.classList.add('popup-title');
//   title1.innerHTML = PopupArray[i].title;

//   const title2 = document.createElement('h2');
//   title2.classList.add('popup-title-desktop');
//   title2.innerHTML = PopupArray[i].titleDesktop;

//   const closebtn = document.createElement('div');
//   closebtn.classList.add('popup-close');

//   const bar1 = document.createElement('span');
//   bar1.classList.add('popup-bar');

//   const bar2 = document.createElement('span');
//   bar2.classList.add('popup-bar');

//   const bar3 = document.createElement('span');
//   bar3.classList.add('popup-bar');

//   const image = document.createElement('img');
//   image.classList.add('popup-project-image');
//   image.src = PopupArray[i].img;

//   const ContentText1 = document.createElement('p');
//   ContentText1.classList.add('popup-text-mobile');
//   ContentText1.innerHTML = PopupArray[i].text1;

//   const ContentText2 = document.createElement('p');
//   ContentText2.classList.add('popup-text-desktop');
//   ContentText2.innerHTML = PopupArray[i].text2;

//   const ul = document.createElement('ul');
//   ul.classList.add('popup-tech-container');

//   const li1 = document.createElement('li');
//   li1.innerHTML = PopupArray[i].techstack1;

//   const li2 = document.createElement('li');
//   li2.innerHTML = PopupArray[i].techstack2;

//   const li3 = document.createElement('li');
//   li3.innerHTML = PopupArray[i].techstack3;

//   const imageLive = document.createElement('img');
//   imageLive.src = PopupArray[i].button1Img;

//   const btn1 = document.createElement('button');
//   btn1.classList.add('btn1');
//   btn1.innerHTML = PopupArray[i].button1;
//   btn1.appendChild(imageLive);

//   const imageSource = document.createElement('img');
//   imageSource.src = PopupArray[i].button2Img;

//   const btn2 = document.createElement('button');
//   btn2.classList.add('btn2');
//   btn2.innerHTML = PopupArray[i].button2;
//   btn2.appendChild(imageSource);

//   PopupWrap.appendChild(card).appendChild(head).appendChild(title1);
//   PopupWrap.appendChild(card).appendChild(head).appendChild(title2);
//   PopupWrap.appendChild(card).appendChild(head).appendChild(closebtn).appendChild(bar1);
//   PopupWrap.appendChild(card).appendChild(head).appendChild(closebtn).appendChild(bar2);
//   PopupWrap.appendChild(card).appendChild(head).appendChild(closebtn).appendChild(bar3);
//   PopupWrap.appendChild(card).appendChild(ul).appendChild(li1);
//   PopupWrap.appendChild(card).appendChild(ul).appendChild(li2);
//   PopupWrap.appendChild(card).appendChild(ul).appendChild(li3);
//   PopupWrap.appendChild(card).appendChild(L1).appendChild(image);
//   PopupWrap.appendChild(card).appendChild(L1).appendChild(ContentText1);
//   PopupWrap.appendChild(card).appendChild(L1).appendChild(L2).appendChild(ContentText2);
//   PopupWrap
//     .appendChild(card)
//     .appendChild(L1)
//     .appendChild(L2)
//     .appendChild(btnRow)
//     .appendChild(btn1);
//   PopupWrap
//     .appendChild(card)
//     .appendChild(L1)
//     .appendChild(L2)
//     .appendChild(btnRow)
//     .appendChild(btn2);
// }
  
//   const ProjectArray6 = [{
//     title: 'Multi-Post Stories',
//     titleDesktop: 'Keeping track of hundreds  of components website',
//     img: './images/popup-background-image.png',
//     text1: 'Lorem Ipsum is simply dummy text of the <br> printing and typesetting industry. Lorem <br> Ipsum has been the industrys standard <br> dummy text ever since the 1500s, when <br> an unknown printer took a galley of type <br> and scrambled it to make a type <br> specimen book. It has survived not only <br> five centuries, but also the leap into <br> electronic typesetting, remaining essent',
//     text2: 'Lorem Ipsum is simply dummy text of the printing and <br> typesetting industry. Lorem Ipsum has been the <br> industrys standard dummy text ever since the 1500s, <br> when an unknown printer took a galley of type and <br> scrambled it 1960s with the releaLorem Ipsum is simply <br> dummy text of the printing and typesetting industry. <br> Lorem Ipsum has been the industrys standard dummy <br> text ever since the 1500s, when an unknown printer <br> took a galley of type and scrambled it 1960s with the <br> releax map lapora verita.',
//     techstack1: 'html',
//     techstack2: 'Bootstrap',
//     techstack3: 'Ruby on rails',
//     button1: 'See Live',
//     button2: 'See Source',
//     button1Img: './images/popup-icon-see project.png',
//     button2Img: './images/popup-icon-github.png',
//   }];

// for (let i = 0; i < ProjectArray6.length; i += 1) {
//   const card = document.createElement('div');
//   card.classList.add('popup-container');

//   const head = document.createElement('div');
//   head.classList.add('popup-head');

//   const L1 = document.createElement('div');
//   L1.classList.add('popup-layout1');

//   const L2 = document.createElement('div');
//   L2.classList.add('popup-layout2');

//   const btnRow = document.createElement('div');
//   btnRow.classList.add('btn-row');

//   const title1 = document.createElement('h2');
//   title1.classList.add('popup-title');
//   title1.innerHTML = PopupArray[i].title;

//   const title2 = document.createElement('h2');
//   title2.classList.add('popup-title-desktop');
//   title2.innerHTML = PopupArray[i].titleDesktop;

//   const closebtn = document.createElement('div');
//   closebtn.classList.add('popup-close');

//   const bar1 = document.createElement('span');
//   bar1.classList.add('popup-bar');

//   const bar2 = document.createElement('span');
//   bar2.classList.add('popup-bar');

//   const bar3 = document.createElement('span');
//   bar3.classList.add('popup-bar');

//   const image = document.createElement('img');
//   image.classList.add('popup-project-image');
//   image.src = PopupArray[i].img;

//   const ContentText1 = document.createElement('p');
//   ContentText1.classList.add('popup-text-mobile');
//   ContentText1.innerHTML = PopupArray[i].text1;

//   const ContentText2 = document.createElement('p');
//   ContentText2.classList.add('popup-text-desktop');
//   ContentText2.innerHTML = PopupArray[i].text2;

//   const ul = document.createElement('ul');
//   ul.classList.add('popup-tech-container');

//   const li1 = document.createElement('li');
//   li1.innerHTML = PopupArray[i].techstack1;

//   const li2 = document.createElement('li');
//   li2.innerHTML = PopupArray[i].techstack2;

//   const li3 = document.createElement('li');
//   li3.innerHTML = PopupArray[i].techstack3;

//   const imageLive = document.createElement('img');
//   imageLive.src = PopupArray[i].button1Img;

//   const btn1 = document.createElement('button');
//   btn1.classList.add('btn1');
//   btn1.innerHTML = PopupArray[i].button1;
//   btn1.appendChild(imageLive);

//   const imageSource = document.createElement('img');
//   imageSource.src = PopupArray[i].button2Img;

//   const btn2 = document.createElement('button');
//   btn2.classList.add('btn2');
//   btn2.innerHTML = PopupArray[i].button2;
//   btn2.appendChild(imageSource);

//   PopupWrap.appendChild(card).appendChild(head).appendChild(title1);
//   PopupWrap.appendChild(card).appendChild(head).appendChild(title2);
//   PopupWrap.appendChild(card).appendChild(head).appendChild(closebtn).appendChild(bar1);
//   PopupWrap.appendChild(card).appendChild(head).appendChild(closebtn).appendChild(bar2);
//   PopupWrap.appendChild(card).appendChild(head).appendChild(closebtn).appendChild(bar3);
//   PopupWrap.appendChild(card).appendChild(ul).appendChild(li1);
//   PopupWrap.appendChild(card).appendChild(ul).appendChild(li2);
//   PopupWrap.appendChild(card).appendChild(ul).appendChild(li3);
//   PopupWrap.appendChild(card).appendChild(L1).appendChild(image);
//   PopupWrap.appendChild(card).appendChild(L1).appendChild(ContentText1);
//   PopupWrap.appendChild(card).appendChild(L1).appendChild(L2).appendChild(ContentText2);
//   PopupWrap
//     .appendChild(card)
//     .appendChild(L1)
//     .appendChild(L2)
//     .appendChild(btnRow)
//     .appendChild(btn1);
//   PopupWrap
//     .appendChild(card)
//     .appendChild(L1)
//     .appendChild(L2)
//     .appendChild(btnRow)
//     .appendChild(btn2);
// }
