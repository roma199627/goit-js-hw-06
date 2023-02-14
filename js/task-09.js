function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const change = document.querySelector('.change-color');
const body = document.querySelector('body');
const color = document.querySelector('.color');


change.addEventListener('click', e => {
  const getRandom = getRandomHexColor();
  body.style.backgroundColor = getRandom;
  color.textContent = getRandom;
});








