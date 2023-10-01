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
