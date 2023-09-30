const toggleButton = document.querySelector('.main-header__menu-down-button');
const lines = document.querySelectorAll('.line');

toggleButton.addEventListener('click', function () {
  for (let i = 0; i < lines.length; i++) {
    lines[i].classList.toggle('crossed');
  }
});
