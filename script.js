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
    updateGridNum();
});

// Changing background color
const squareColor = document.querySelectorAll('.gridRow');
const colorSelect = document.querySelector('input[name="coloroption"]:checked').value;
let m;
squareColor[m].addEventListener('mouseover', function (e) {
        let color = Math.floor(Math.random() * 255);
        if (colorSelect == 'random') {
            // Random colors code
            squareColor[m].setAttribute('style', `background-color: rgb(${color}, ${color}, ${color});`)
        } else if (colorSelect == 'grayScale') {
            squarecolor[m].setAttribute('style ')
            // GrayScale code
        } else if (colorSelect == 'choice') {
            // User choice code
        }
    });


// Slider Output
function updateGridNum() {
    let slider = document.querySelector('#gridSize');
    let output = document.querySelector('#gridValue');
    output.innterHTML = slider.value;
    slider.oninput = function() {
        output.innerHTML = this.value;
    };
}

// Reset button
function resetGrid() {
    const reset = document.querySelector('.reset');
    reset.addEventListener('click', function resetpage() {
        location.reload();
    });
}