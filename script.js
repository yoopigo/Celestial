const toggleButton = document.querySelector('.main-header__menu-down-button');
const lineOne = document.querySelector('.line--one');
const lineTwo = document.querySelector('.line--two');
const lineThree = document.querySelector('.line--three');

toggleButton.addEventListener('click', () => {
  lineOne.classList.toggle('crossed-one');
  lineTwo.classList.toggle('crossed-two');
  lineThree.classList.toggle('crossed-three');
});
