function randomRange(min, max) {
  return Math.floor(Math.random() * (max - (min - 1))) + min;
}

function generateColor() {
  return `rgb(${
    randomRange(1, 255)
  }, ${
    randomRange(1, 255)
  }, ${
    randomRange(1, 255)
  }`;
}

const defaultColorPallet = ['black'];

for (let i = 0; i < 3; i += 1) {
  defaultColorPallet.push(generateColor());
}

const colorPallette = document.querySelector('#color-palette');

let selected = null;

function createColor(color) {
  const div = document.createElement('div');
  div.style.backgroundColor = color;
  div.id = color;
  div.className = 'color';
  div.addEventListener('click', (event) => {
    selected.classList.toggle('selected');
    event.target.classList.toggle('selected');
    selected = event.target;
  });
  colorPallette.appendChild(div);
}

defaultColorPallet.forEach((color) => createColor(color));

const black = document.querySelector('#black');
black.classList.toggle('selected');

selected = black;

const pixelTable = document.querySelector('#pixel-board');

function createTable(num) {
  const size = num < 5 ? 5 : num > 50 ? 50 : num;
  pixelTable.style.gridTemplateColumns = `repeat(${size}, 48px)`;
  pixelTable.innerHTML = '';
  for (let j = 0; j < size * size; j += 1) {
    const pixel = document.createElement('div');
    pixel.className = 'pixel';
    pixel.style.backgroundColor = 'rgb(255, 255, 255)';
    pixel.addEventListener('click', () => {
      const select = document.querySelector('.selected');
      pixel.style.backgroundColor = select.style.backgroundColor;
    });
    pixelTable.appendChild(pixel);
  }
}

function clearTable() {
  const pixels = document.querySelectorAll('.pixel');
  pixels.forEach((elem) => {
    const pixel = elem;
    pixel.style.backgroundColor = 'rgb(255, 255, 255)';
  });
}

const clearButton = document.querySelector('#clear-board');
clearButton.addEventListener('click', clearTable);

const tableSize = document.querySelector('#board-size');
const generateButton = document.querySelector('#generate-board');
generateButton.addEventListener('click', () => {
  const size = parseInt(tableSize.value, 10);
  if (!Number.isNaN(size)) {
    createTable(size);
  } else {
    alert('Board inv??lido!');
  }
});
createTable(5);
