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
        const height = (750/gridNum);
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
function changeColor() {
    const squareColor = document.querySelectorAll('.gridRow');
    for (n = 0; n < squareColor.length; n++) {
        const colorSelect = document.querySelector('input[name="coloroption"]:checked').value;
        let singleSquare = squareColor[n];
        singleSquare.addEventListener('mouseenter', function (e) {
            if (colorSelect == 'random') {
                // Random colors code
                let color1 = Math.floor(Math.random() * 256);
                let color2 = Math.floor(Math.random() * 256);
                let color3 = Math.floor(Math.random() * 256);
                let randomcolor = `${color1}, ${color2}, ${color3}`;
                singleSquare.style.backgroundColor = 'rgb(' + randomcolor + ')';
            // } else if (colorSelect == 'grayScale') {
            //     // GrayScale code
            //     const start = 'rgba(0, 0, 0, .1)';
            //     singleSquare.style.backgroundColor = start;
            } else if (colorSelect == 'choice') {
                // User choice code
                const choice = document.getElementById('colorpicker').value;
                console.log(choice);
                singleSquare.style.backgroundColor = choice;
            } else if (colorSelect == 'eraser') {
                // Eraser
                singleSquare.style.backgroundColor = "white";
            }
        });
    };
}

// function changeColor() {
//     const squareColor = document.querySelector('.gridRow');
//     squareColor.addEventListener('mouseenter', function (e) {
//         console.log('hi');
//         let color1 = Math.floor(Math.random() * 255);
//         let color2 = Math.floor(Math.random() * 255);
//         let color3 = Math.floor(Math.random() * 255);
//         let randomcolor = `${color1}, ${color2}, ${color3}`;
//         squareColor.style.backgroundColor = 'rgb(' + randomcolor + ')';

//     })
// }

// Mouse Listener
gridContainer.addEventListener('mouseenter', changeColor);

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