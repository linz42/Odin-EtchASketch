// Variables
const gridContainer = document.querySelector('.gridContainer');

// Remove old grid
function removeGrid() {
    let e = document.querySelector('.gridContainer');
    let first = e.firstElementChild;
    while (first) {
        first.remove();
        first = e.firstElementChild;
    };
}

// Create grid
function createGrid() {
    const gridNum = document.querySelector('#gridSize').value;
    const gridNumTotal = gridNum * gridNum;
    for (i = 0; i < gridNumTotal; i++) {
        const height = (960/gridNum);
        const row = document.createElement('div');
        gridContainer.appendChild(row);
        row.classList.add('class', 'gridRow');
        row.style.height = `${height}px`;
        row.style.width = `${height}px`;
    }
}

// Change grid size when range is changed
document.getElementById('gridSize').addEventListener('change', () => {
    removeGrid();
    createGrid();
});

// Changing background color
document.getElementById('.gridRow').addEventListener('mouseover', () => {
    colorSquare();
});

// Slider
let slider = document.querySelector('#gridSize');
let output = document.querySelector('#gridValue');
output.innterHTML = slider.value;
slider.oninput = function() {
    output.innerHTML = this.value;
};

// Reset button
const reset = document.querySelector('.reset');
reset.addEventListener('click', function resetpage() {
    location.reload();
});