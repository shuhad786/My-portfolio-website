const PopupArray = [{
  title: 'Multi-Post Stories',
  titleDesktop: 'Keeping track of hundreds  of components website',
  img: './images/popup-background-image.png',
  text1: 'Lorem Ipsum is simply dummy text of the <br> printing and typesetting industry. Lorem <br> Ipsum has been the industrys standard <br> dummy text ever since the 1500s, when <br> an unknown printer took a galley of type <br> and scrambled it to make a type <br> specimen book. It has survived not only <br> five centuries, but also the leap into <br> electronic typesetting, remaining essent',
  text2: 'Lorem Ipsum is simply dummy text of the printing and <br> typesetting industry. Lorem Ipsum has been the <br> industrys standard dummy text ever since the 1500s, <br> when an unknown printer took a galley of type and <br> scrambled it 1960s with the releaLorem Ipsum is simply <br> dummy text of the printing and typesetting industry. <br> Lorem Ipsum has been the industrys standard dummy <br> text ever since the 1500s, when an unknown printer <br> took a galley of type and scrambled it 1960s with the <br> releax map lapora verita.',
  techstack1: 'html',
  techstack2: 'Bootstrap',
  techstack3: 'Ruby on rails',
  button1: 'See Live',
  button2: 'See Source',
  button1Img: './images/popup-icon-see project.png',
  button2Img: './images/popup-icon-github.png',
}];

const PopupWrap = document.querySelector('.popup');

for (let i = 0; i < PopupArray.length; i += 1) {
  const card = document.createElement('div');
  card.classList.add('popup-container');

  const head = document.createElement('div');
  head.classList.add('popup-head');

  const L1 = document.createElement('div');
  L1.classList.add('popup-layout1');

  const L2 = document.createElement('div');
  L2.classList.add('popup-layout2');

  const btnRow = document.createElement('div');
  btnRow.classList.add('btn-row');

  const title1 = document.createElement('h2');
  title1.classList.add('popup-title');
  title1.innerHTML = PopupArray[i].title;

  const title2 = document.createElement('h2');
  title2.classList.add('popup-title-desktop');
  title2.innerHTML = PopupArray[i].titleDesktop;

  const closebtn = document.createElement('div');
  closebtn.classList.add('popup-close');

  const bar1 = document.createElement('span');
  bar1.classList.add('popup-bar');

  const bar2 = document.createElement('span');
  bar2.classList.add('popup-bar');

  const bar3 = document.createElement('span');
  bar3.classList.add('popup-bar');

  const image = document.createElement('img');
  image.classList.add('popup-project-image');
  image.src = PopupArray[i].img;

  const ContentText1 = document.createElement('p');
  ContentText1.classList.add('popup-text-mobile');
  ContentText1.innerHTML = PopupArray[i].text1;

  const ContentText2 = document.createElement('p');
  ContentText2.classList.add('popup-text-desktop');
  ContentText2.innerHTML = PopupArray[i].text2;

  const ul = document.createElement('ul');
  ul.classList.add('popup-tech-container');

  const li1 = document.createElement('li');
  li1.innerHTML = PopupArray[i].techstack1;

  const li2 = document.createElement('li');
  li2.innerHTML = PopupArray[i].techstack2;

  const li3 = document.createElement('li');
  li3.innerHTML = PopupArray[i].techstack3;

  const imageLive = document.createElement('img');
  imageLive.src = PopupArray[i].button1Img;

  const btn1 = document.createElement('button');
  btn1.classList.add('btn1');
  btn1.innerHTML = PopupArray[i].button1;
  btn1.appendChild(imageLive);

  const imageSource = document.createElement('img');
  imageSource.src = PopupArray[i].button2Img;

  const btn2 = document.createElement('button');
  btn2.classList.add('btn2');
  btn2.innerHTML = PopupArray[i].button2;
  btn2.appendChild(imageSource);

  PopupWrap.appendChild(card).appendChild(head).appendChild(title1);
  PopupWrap.appendChild(card).appendChild(head).appendChild(title2);
  PopupWrap.appendChild(card).appendChild(head).appendChild(closebtn).appendChild(bar1);
  PopupWrap.appendChild(card).appendChild(head).appendChild(closebtn).appendChild(bar2);
  PopupWrap.appendChild(card).appendChild(head).appendChild(closebtn).appendChild(bar3);
  PopupWrap.appendChild(card).appendChild(ul).appendChild(li1);
  PopupWrap.appendChild(card).appendChild(ul).appendChild(li2);
  PopupWrap.appendChild(card).appendChild(ul).appendChild(li3);
  PopupWrap.appendChild(card).appendChild(L1).appendChild(image);
  PopupWrap.appendChild(card).appendChild(L1).appendChild(ContentText1);
  PopupWrap.appendChild(card).appendChild(L1).appendChild(L2).appendChild(ContentText2);
  PopupWrap
    .appendChild(card)
    .appendChild(L1)
    .appendChild(L2)
    .appendChild(btnRow)
    .appendChild(btn1);
  PopupWrap
    .appendChild(card)
    .appendChild(L1)
    .appendChild(L2)
    .appendChild(btnRow)
    .appendChild(btn2);
}

const popupwindow = document.querySelector('.popup-container');
const popupclose = document.querySelector('.popup-close');
const mobile1 = document.querySelector('.Mproject-button-1');
const mobile2 = document.querySelector('.Mproject-button-2');
const mobile3 = document.querySelector('.Mproject-button-3');
const mobile4 = document.querySelector('.Mproject-button-4');
const mobile5 = document.querySelector('.Mproject-button-5');
const mobile6 = document.querySelector('.Mproject-button-6');
const popupopen = document.querySelector('.project-button-1');
const popupopen2 = document.querySelector('.project-button-2');
const popupopen3 = document.querySelector('.project-button-3');
const popupopen4 = document.querySelector('.project-button-4');
const popupopen5 = document.querySelector('.project-button-5');
const popupopen6 = document.querySelector('.project-button-6');
const maincontainer = document.querySelector('.main-container');

mobile1.addEventListener('click', () => {
  popupwindow.classList.add('show');
  maincontainer.style.filter = 'blur(50px)';
});

mobile2.addEventListener('click', () => {
  popupwindow.classList.add('show');
  maincontainer.style.filter = 'blur(50px)';
});

mobile3.addEventListener('click', () => {
  popupwindow.classList.add('show');
  maincontainer.style.filter = 'blur(50px)';
});

mobile4.addEventListener('click', () => {
  popupwindow.classList.add('show');
  maincontainer.style.filter = 'blur(50px)';
});

mobile5.addEventListener('click', () => {
  popupwindow.classList.add('show');
  maincontainer.style.filter = 'blur(50px)';
});

mobile6.addEventListener('click', () => {
  popupwindow.classList.add('show');
  maincontainer.style.filter = 'blur(50px)';
});

popupopen.addEventListener('click', () => {
  popupwindow.classList.add('show');
  maincontainer.style.filter = 'blur(50px)';
});

popupopen2.addEventListener('click', () => {
  popupwindow.classList.add('show');
  maincontainer.style.filter = 'blur(50px)';
});

popupopen3.addEventListener('click', () => {
  popupwindow.classList.add('show');
  maincontainer.style.filter = 'blur(50px)';
});

popupopen4.addEventListener('click', () => {
  popupwindow.classList.add('show');
  maincontainer.style.filter = 'blur(50px)';
});

popupopen5.addEventListener('click', () => {
  popupwindow.classList.add('show');
  maincontainer.style.filter = 'blur(50px)';
});

popupopen6.addEventListener('click', () => {
  popupwindow.classList.add('show');
  maincontainer.style.filter = 'blur(50px)';
});

popupclose.addEventListener('click', () => {
  popupwindow.classList.remove('show');
  maincontainer.style.filter = 'blur(0px)';
});
