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

  const ContainerPopup = document.querySelector('.popup');

for (let i = 0; i < PopupArray.length; i += 1) {
  const card = document.createElement('div');
  card.classList.add('popup-container');

  const head = document.createElement('div');
  head.classList.add('popup-head');

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

  const imageLive2 = document.createElement('img');
  imageLive2.src = PopupArray[i].button1Img;

  const btn1 = document.createElement('button');
  btn1.classList.add('btn1');
  btn1.innerHTML = PopupArray[i].button1;
  btn1.appendChild(imageLive);

  const btn3 = document.createElement('button');
  btn3.classList.add('btn1');
  btn3.innerHTML = PopupArray[i].button1;
  btn3.appendChild(imageLive2);

  const imageSource = document.createElement('img');
  imageSource.src = PopupArray[i].button2Img;

  const imageSource2 = document.createElement('img');
  imageSource2.src = PopupArray[i].button2Img;

  const btn2 = document.createElement('button');
  btn2.classList.add('btn2');
  btn2.innerHTML = PopupArray[i].button2;
  btn2.appendChild(imageSource);

  const btn4 = document.createElement('button');
  btn4.classList.add('btn2');
  btn4.innerHTML = PopupArray[i].button2;
  btn4.appendChild(imageSource2);

  const btnRow = document.createElement('div');
  btnRow.classList.add('btn-row');

  ContainerPopup.appendChild(card).appendChild(head).appendChild(title1);
  ContainerPopup.appendChild(card).appendChild(head).appendChild(title2);
  ContainerPopup.appendChild(card).appendChild(head).appendChild(closebtn).appendChild(bar1);
  ContainerPopup.appendChild(card).appendChild(head).appendChild(closebtn).appendChild(bar2);
  ContainerPopup.appendChild(card).appendChild(head).appendChild(closebtn).appendChild(bar3);
  ContainerPopup.appendChild(card).appendChild(ul).appendChild(li1);
  ContainerPopup.appendChild(card).appendChild(ul).appendChild(li2);
  ContainerPopup.appendChild(card).appendChild(ul).appendChild(li3);
  ContainerPopup.appendChild(card).appendChild(image);
  ContainerPopup.appendChild(card).appendChild(ContentText1);
  ContainerPopup.appendChild(card).appendChild(ContentText2);
  
  ContainerPopup.appendChild(card).appendChild(btn1);
  ContainerPopup.appendChild(card).appendChild(btn2);
}
