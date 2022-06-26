// Grid creator
const gridcontainer = document.querySelector('.gridcontainer');
const square = document.createElement('div');
const gridvalue = document.querySelector('#gridValue');

console.log(gridvalue);

gridcontainer.append(square);

// Resize squares in grid



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