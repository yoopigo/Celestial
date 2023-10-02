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

function showSlide(index) {
  slideContainer.style.transform = `translateX(-${index * 100}%)`;
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
  updateDots();
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
  updateDots();
}

function updateDots() {
  dots.forEach((dot, index) => {
    if (index === currentIndex) {
      dot.classList.add('active-dot');
    } else {
      dot.classList.remove('active-dot');
    }
  });
}

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    currentIndex = index;
    showSlide(currentIndex);
    updateDots();
  });
});

prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);

showSlide(currentIndex);
