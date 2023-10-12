//burger

function toggleLines(line1, line2, line3) {
  line1.classList.toggle('crossed-one');
  line2.classList.toggle('crossed-two');
  line3.classList.toggle('crossed-three');
}

const toggleButton = document.querySelector('.main-header__menu-down-button');
const toggleBlock = document.querySelector('.mobile-header__menu-item-burger');

const lineOne = document.querySelector('.line--one');
const lineTwo = document.querySelector('.line--two');
const lineThree = document.querySelector('.line--three');

const lineOneMobile = document.querySelector('.line--one-mobile-one');
const lineTwoMobile = document.querySelector('.line--two-mobile-two');
const lineThreeMobile = document.querySelector('.line--three-mobile-three');

toggleButton.addEventListener('click', () => {
  toggleLines(lineOne, lineTwo, lineThree);
});

toggleBlock.addEventListener('click', () => {
  toggleLines(lineOneMobile, lineTwoMobile, lineThreeMobile);
});

//Search

const searchInput = document.querySelector('.main-header__menu-down-search');
const clearBtn = document.querySelector('.clear-btn');

clearBtn.addEventListener('click', () => {
  searchInput.value = '';
});

//slider

const prevBtn = document.querySelector('.slider__button-prev');
const nextBtn = document.querySelector('.slider__button-next');
const slideContainer = document.querySelector('.slide-container');
const slides = document.querySelectorAll('.slide-container img');
const dots = document.querySelectorAll('.dot');
let currentIndex = 0;
let width;

function init() {
  width = document.querySelector('.slider').offsetWidth;
  slideContainer.style.width = width * slides.length + 'px';
  slides.forEach((item) => {
    item.style.width = width + 'px';
    item.style.height = 'auto';
  });
  rollSlider();
  dots.forEach((dot) => {
    dot.classList.remove('active-dot');
  });
  dots[currentIndex].classList.add('active-dot');
}

function updateUI() {
  const dotsContainer = document.querySelector('.dots-container');
  const prevBtn = document.querySelector('.slider__button-prev');
  const nextBtn = document.querySelector('.slider__button-next');
  const slider = document.querySelector('.slider');
  const parentWidth = slider.offsetWidth;

  dotsContainer.style.left =
    (parentWidth - dotsContainer.offsetWidth) / 2 + 'px';
  prevBtn.style.left = '20px';
  nextBtn.style.right = '20px';
}

window.addEventListener('resize', function () {
  init();
  updateUI();
});

nextBtn.addEventListener('click', function () {
  currentIndex++;
  if (currentIndex >= slides.length - 2) {
    currentIndex = 0;
  }
  init();
  rollSlider();
});

prevBtn.addEventListener('click', function () {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = slides.length - 3;
  }
  init();
  rollSlider();
});

function rollSlider() {
  slideContainer.style.transform = 'translate(-' + currentIndex * width + 'px)';
}

//Advantages

const advantages = document.querySelector('.advantages');
let isDragging = false;
let startX, scrollLeft;

advantages.addEventListener('mousedown', (e) => {
  isDragging = true;
  startX = e.pageX - advantages.offsetLeft;
  scrollLeft = advantages.scrollLeft;
});

window.addEventListener('mouseup', () => {
  isDragging = false;
});

window.addEventListener('mousemove', (e) => {
  if (!isDragging) return;
  const x = e.pageX - advantages.offsetLeft;
  const scrollX = scrollLeft - (x - startX);
  advantages.scrollLeft = scrollX;
});

//

const dropInput = document.querySelector('.map__info-input');
const dropList = document.querySelector('.drop');
dropInput.addEventListener('focus', show, false);
dropInput.addEventListener('blur', hide, false);
dropList.addEventListener('click', dropSelect, false);

function hide() {
  setTimeout(() => dropList.classList.remove('visible'), 300);
}
function show() {
  setTimeout(() => dropList.classList.add('visible'), 300);
}

function dropSelect(e) {
  dropInput.value = e.target.textContent;
  hide();
}

ymaps.ready(function () {
  var myMap = new ymaps.Map('yaMap', {
    center: [56.828, 60.684324],
    zoom: 11,
    controls: ['zoomControl', 'geolocationControl'],
  });

  var myPlacemark = new ymaps.Placemark(
    [56.761737, 60.761418],
    {
      balloonContent:
        '<strong>Магазин на Черняховского</strong><br>улица Черняховского, 99<br>+7 (999) 012-34-56<br>Ежедневно с 09:00 до 22:00',
    },
    {
      iconLayout: 'default#image',
      iconImageHref: 'img/map/pin.svg',
      iconImageSize: [48, 56],
      iconImageOffset: [-24, -36],
    }
  );

  var myPlacemark2 = new ymaps.Placemark(
    [56.865259, 60.667983],
    {
      balloonContent:
        '<strong>Магазин на Блюхера</strong><br>улица Блюхера, 99<br>+7 (999) 012-34-56 (доб. 02)<br>Ежедневно с 09:00 до 22:00',
    },
    {
      iconLayout: 'default#image',
      iconImageHref: 'img/map/pin.svg',
      iconImageSize: [48, 56],
      iconImageOffset: [-24, -36],
    }
  );

  myMap.geoObjects.add(myPlacemark);
  myMap.geoObjects.add(myPlacemark2);

  document
    .querySelector('.map__info-item-1')
    .addEventListener('click', function () {
      myMap.setCenter([56.761737, 60.761418]);
      myPlacemark.balloon.open();
    });

  document
    .querySelector('.map__info-item-2')
    .addEventListener('click', function () {
      myMap.setCenter([56.865259, 60.667983]);
      myPlacemark2.balloon.open();
    });
});

//LoginModal

const passwordInput = document.querySelector('.login__data-password');
const showPasswordButtonOff = document.querySelector(
  '.login__data-password-swg--one'
);
const showPasswordButtonOn = document.querySelector(
  '.login__data-password-swg--two'
);
const closeLogin = document.querySelector('.login__title-button');
const loginModal = document.querySelector('.login');
const openLogin = document.querySelector('.main-header__menu-down-login');
const openLoginMobile = document.querySelector('.tablet-menu__login ');

showPasswordButtonOff.addEventListener('click', () => {
  showPasswordButtonOff.classList.add('login__data-password-display');
  showPasswordButtonOn.classList.remove('login__data-password-display');
  passwordInput.type = 'text';
});

showPasswordButtonOn.addEventListener('click', () => {
  showPasswordButtonOn.classList.add('login__data-password-display');
  showPasswordButtonOff.classList.remove('login__data-password-display');
  passwordInput.type = 'password';
});

closeLogin.addEventListener('click', () => {
  loginModal.classList.add('login__data-password-display');
});

openLogin.addEventListener('click', (evt) => {
  evt.preventDefault();
  loginModal.classList.toggle('login__data-password-display');
});

document.addEventListener('keydown', (evt) => {
  if (evt.key === 'Escape') {
    loginModal.classList.add('login__data-password-display');
  }
});

openLoginMobile.addEventListener('click', (evt) => {
  evt.preventDefault();
  loginModal.classList.toggle('login__data-password-display');
});
