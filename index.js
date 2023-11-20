const grid = document.getElementById("grid")

for(let i = 0; i < 16; i++) {
  const gridItem = document.createElement('div');
  gridItem.addEventListener('mouseover', (e) => {
    gridItem.classList.add('colored');
  })
  gridItem.classList.add('grid-item')
  grid.appendChild(gridItem)
}