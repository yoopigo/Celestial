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
