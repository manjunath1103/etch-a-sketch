const container = document.querySelector('#container');
const inputSize = document.querySelector('#size');
const changeSizeBtn = document.querySelector('#update-size');
const colorMode = document.querySelector('#color');
const eraserMode = document.querySelector('#eraser');
const rainbowMode = document.querySelector('#rainbow');
const clearMode = document.querySelector('#clear');


let currentColor = `#333`;
let containerSize = inputSize.value;
let currentMode = 'color';

let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);


colorMode.onclick = () => (currentMode = 'color');
eraserMode.onclick = () => (currentMode = 'eraser');
rainbowMode.onclick = () => (currentMode = 'rainbow');
clearMode.onclick = clearContainer;
changeSizeBtn.onclick = updateContainer;


function createDiv(id, cls) {
    const div = document.createElement('div');
    div.setAttribute('id', id);
    div.setAttribute('class', cls);
    return div;
}

function updateContainer(){
    if(inputSize.value < 1){
        inputSize.value = 1;
    }
    if(inputSize.value > 100){
        inputSize.value = 100;
    }
    container.innerHTML = '';
    containerSize = inputSize.value;
    for (let row = 1; row <= containerSize; row++) {
    const rowDiv = createDiv(`row-${row}`, `row`);
    for (let col = 1; col <= containerSize; col++) {
        const rowElement = createDiv(`row-${row}-col-${col}`, `rowElement`);
        rowDiv.appendChild(rowElement);
        rowElement.addEventListener('mousedown', changeColor);
        rowElement.addEventListener('mouseover', changeColor);
    }
    container.appendChild(rowDiv);
}
}


function random() {
    return Math.floor(Math.random()*255 + 1);
}

function changeColor(e) {
    if (e.type === 'mouseover' && !mouseDown) return;
    // if(!mouseDown) return;
    if (currentMode === 'color') {
        e.target.style.backgroundColor = currentColor;
    }
    if(currentMode === 'eraser') {
        e.target.style.backgroundColor = 'white';
    }
    if(currentMode === 'rainbow'){
        e.target.style.backgroundColor = `rgb(${random()},${random()},${random()})`;
        console.log(45);
    }
}

function clearContainer() {
    const elements = container.querySelectorAll('.rowElement');
    for(const element of elements){
        element.style.backgroundColor = 'white';
    }
}

updateContainer();





