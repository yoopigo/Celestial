//burger

function toggleLines(line1, line2, line3) {
  line1.classList.toggle('crossed-one');
  line2.classList.toggle('crossed-two');
  line3.classList.toggle('crossed-three');
}

const toggleButton = document.querySelector('.main-header__menu-down-button');
const tabletButton = document.querySelector('.tablet-menu__catalog');
const toggleBlock = document.querySelector('.mobile-header__menu-item-burger');
const buttonTabletClosed = document.querySelector(
  '.catalog__tablet-icon--cross'
);
const tabletMenuHome = document.querySelector('.tablet-menu__home');

const lineOne = document.querySelector('.line--one');
const lineTwo = document.querySelector('.line--two');
const lineThree = document.querySelector('.line--three');

const lineOneMobile = document.querySelector('.line--one-mobile-one');
const lineTwoMobile = document.querySelector('.line--two-mobile-two');
const lineThreeMobile = document.querySelector('.line--three-mobile-three');

const catalog = document.querySelector('.catalog-wrapper');

toggleButton.addEventListener('click', () => {
  toggleLines(lineOne, lineTwo, lineThree);
  catalog.classList.toggle('display-none');
});

tabletButton.addEventListener('click', () => {
  catalog.classList.toggle('display-none');
  tabletMenuHome.classList.toggle('tablet-menu__item-active');
  tabletButton.classList.toggle('tablet-menu__item-active2');
});

tabletMenuHome.addEventListener('click', () => {
  catalog.classList.add('display-none');
  tabletMenuHome.classList.add('tablet-menu__item-active');
  tabletButton.classList.remove('tablet-menu__item-active2');
});

toggleBlock.addEventListener('click', () => {
  toggleLines(lineOneMobile, lineTwoMobile, lineThreeMobile);
});

buttonTabletClosed.addEventListener('click', () => {
  catalog.classList.toggle('display-none');
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
const openLoginMobile = document.querySelector('.tablet-menu__login');

showPasswordButtonOff.addEventListener('click', () => {
  showPasswordButtonOff.classList.add('display-none');
  showPasswordButtonOn.classList.remove('display-none');
  passwordInput.type = 'text';
});

showPasswordButtonOn.addEventListener('click', () => {
  showPasswordButtonOn.classList.add('display-none');
  showPasswordButtonOff.classList.remove('display-none');
  passwordInput.type = 'password';
});

closeLogin.addEventListener('click', () => {
  loginModal.classList.add('display-none');
  openLoginMobile.classList.remove('tablet-menu__item-active');
});

openLogin.addEventListener('click', (evt) => {
  evt.preventDefault();
  loginModal.classList.toggle('display-none');
});

document.addEventListener('keydown', (evt) => {
  if (evt.key === 'Escape') {
    loginModal.classList.add('display-none');
    openLoginMobile.classList.remove('tablet-menu__item-active');
  }
});

openLoginMobile.addEventListener('click', (evt) => {
  evt.preventDefault();
  loginModal.classList.toggle('display-none');
  openLoginMobile.classList.toggle('tablet-menu__item-active');
});

//Catalog

document.addEventListener('DOMContentLoaded', function () {
  let categories = document.getElementsByClassName('catalog__item');
  for (let i = 0; i < categories.length; i++) {
    categories[i].addEventListener('mouseover', function () {
      if (window.innerWidth > 1024) {
        let subcatalogItems = this.getElementsByClassName(
          'subcatalog__wrapper'
        );
        if (subcatalogItems.length > 0) {
          subcatalogItems[0].style.display = 'block';
        }
      }
    });
    categories[i].addEventListener('mouseout', function () {
      if (window.innerWidth > 1024) {
        let subcatalogItems = this.getElementsByClassName(
          'subcatalog__wrapper'
        );
        if (subcatalogItems.length > 0) {
          subcatalogItems[0].style.display = 'none';
        }
      }
    });
  }
});

//subcatalog

document.addEventListener('DOMContentLoaded', () => {
  let subcatalogItem = document.querySelector('.catalog__item-sub');
  let subcatalogWrapper = document.querySelector('.subcatalog__wrapper');
  let catalogTabletButtonBack = document.querySelector(
    '.catalog__tablet-icon--back'
  );

  subcatalogItem.addEventListener('mouseover', () => {
    if (window.innerWidth > 1024) {
      subcatalogWrapper.style.display = 'block';
    }
  });

  subcatalogWrapper.addEventListener('mouseover', function () {
    if (window.innerWidth > 1024) {
      subcatalogWrapper.style.display = 'block';
    }
  });

  subcatalogWrapper.addEventListener('mouseleave', function () {
    if (window.innerWidth > 1024) {
      subcatalogWrapper.style.display = 'none';
    }
  });

  subcatalogItem.addEventListener('click', function () {
    if (window.innerWidth <= 1024) {
      subcatalogWrapper.style.display = 'flex';
    }
  });

  catalogTabletButtonBack.addEventListener('click', function () {
    subcatalogWrapper.style.display = 'none';
  });
});

//catalog slider

const catalogSliderContainer = document.querySelector(
  '.catalog__slide-container'
);
const catalogSlides = document.querySelectorAll('.catalog__slide');
const catalogPrevButton = document.querySelector(
  '.catalog__slider-button-prev'
);
const catalogNextButton = document.querySelector(
  '.catalog__slider-button-next'
);
const catalogDots = document.querySelectorAll('.catalog__dot');

let currentCatalogSlideIndex = 0;

function goToPrevSlide() {
  catalogSlides[currentCatalogSlideIndex].classList.remove('active-slide');
  catalogDots[currentCatalogSlideIndex].classList.remove('catalog__active-dot');

  currentCatalogSlideIndex--;

  if (currentCatalogSlideIndex < 0) {
    currentCatalogSlideIndex = catalogSlides.length - 1;
  }
  catalogSlides[currentCatalogSlideIndex].classList.add('active-slide');
  catalogDots[currentCatalogSlideIndex].classList.add('catalog__active-dot');
}

function goToNextSlide() {
  catalogSlides[currentCatalogSlideIndex].classList.remove('active-slide');
  catalogDots[currentCatalogSlideIndex].classList.remove('catalog__active-dot');
  currentCatalogSlideIndex++;

  if (currentCatalogSlideIndex >= catalogSlides.length) {
    currentCatalogSlideIndex = 0;
  }
  catalogSlides[currentCatalogSlideIndex].classList.add('active-slide');
  catalogDots[currentCatalogSlideIndex].classList.add('catalog__active-dot');
}

catalogPrevButton.addEventListener('click', goToPrevSlide);
catalogNextButton.addEventListener('click', goToNextSlide);
