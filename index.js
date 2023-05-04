const gridContainer = document.querySelector('.grid-container');
const newGridButton = document.querySelector('.new-grid-button');

newGridButton.addEventListener('click', newGridHandler);

function newGridHandler() {
  const size = parseInt(prompt('How big should your grid be?'));
  clearGrid();
  generateGrid(size);
}

function clearGrid() {
  gridContainer.innerHTML = '';
}

function generateGrid(size) {
  gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  for (let i = 0; i < size * size; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.addEventListener('mouseenter', (e) => cell.classList.add('filled'));
    gridContainer.appendChild(cell);
  }
}

window.onload = () => {
  generateGrid(16);
};
