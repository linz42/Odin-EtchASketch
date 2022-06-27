// Variables
const gridNum = document.querySelector('#gridSize').value;
const gridNumTotal = gridNum * gridNum;
const gridContainer = document.querySelector('.gridContainer');
const side = (960/gridNum);
const gridRow = document.querySelectorAll('.gridRow');

// Resize squares in grid
for (i = 0; i < gridNumTotal; i++) {
    // adding row of divs
        const div = document.createElement('div'); 
        gridContainer.append(div);
        div.classList.add('class', 'gridSquare');
        div.style.height = `${side}px`;
        div.style.width = `${side}px`;
        // console.log("row: " + i + "/" + gridNum);
};

// for (j = 0; j < gridNum; j++) {
//     // adding column of divs
//         const div = document.createElement('div'); 
//         gridRow.append(div);
//         div.classList.add('class', 'gridColumn');
//         div.style.width = `${side}px`;
//         console.log("column: " + j + "/" + gridNum);
// };


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