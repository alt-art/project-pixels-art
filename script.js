let defaultColorPallet = ['black', 'yellow', 'green','blue'];
const colorPallette = document.querySelector('#color-palette');

let selected = null;

function createColor(color) {
    let div = document.createElement('div');
    div.style.backgroundColor = color;
    div.id = color;
    div.className = 'color';
    div.addEventListener('click', event => {
        selected.classList.toggle('selected');
        event.target.classList.toggle('selected');
        selected = event.target;
    })
    colorPallette.appendChild(div);
}

defaultColorPallet.forEach(color => createColor(color));

let black = document.querySelector('#black');
black.classList.toggle('selected');

selected = black;

const pixelTable = document.querySelector('#pixel-board');

function createTable(width, height) {
    pixelTable.style.gridTemplateColumns = `repeat(${width}, 40px)`;
    for (let j = 0; j < width; j++) {
        for (let i = 0; i < height; i++) {
            let pixel = document.createElement('div');
            pixel.className = 'pixel';
            pixel.style.backgroundColor = 'rgb(255, 255, 255)';
            pixelTable.appendChild(pixel);
        }
    }
}

createTable(5,5)