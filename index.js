const grid = document.getElementById("grid")
const newGridButton = document.getElementById('new-grid-button')
const modeSelector = document.getElementById('modes')

let gridSize = 4

modeSelector.addEventListener("change", () => generateGrid(gridSize))

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
      if(modeSelector.value === "random") {
        gridItem.style.backgroundColor = getRandomRGB();
      } else {
        gridItem.style.backgroundColor = "black";
      }
    }, { once: true })
    gridItem.classList.add('grid-item')
    grid.appendChild(gridItem)
  }
}

function getRandomRGB() {
  const rValue = Math.floor(Math.random() * 255)
  const gValue = Math.floor(Math.random() * 255)
  const bValue = Math.floor(Math.random() * 255)

  return `rgb(${rValue}, ${gValue}, ${bValue})`
}

generateGrid(gridSize)