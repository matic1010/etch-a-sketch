const grid = document.getElementById("grid")
const newGridButton = document.getElementById('new-grid-button')
let gridSize = 4

newGridButton.addEventListener("click", () => {
  let gridSize = undefined;
  while(!gridSize) {
    gridSize = Number(prompt("How many squares per side?"))
  }
  generateGrid(gridSize)
})

function generateGrid(size) {
  grid.innerHTML = ''
  grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`
  for(let i = 0; i < size * size; i++) {
    const gridItem = document.createElement('div');
    gridItem.addEventListener('mouseover', (e) => {
      gridItem.classList.add('colored');
    })
    gridItem.classList.add('grid-item')
    grid.appendChild(gridItem)
  }
}

generateGrid(gridSize)