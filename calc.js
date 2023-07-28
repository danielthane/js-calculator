const buttons = document.querySelectorAll('.calc-btn');
const displayTextEl = document.querySelector('.display-text');


buttons.forEach(button => button.addEventListener('click', (e) => {
    if (displayTextEl.textContent == "0" && button.textContent != "C"){
        displayTextEl.textContent = button.textContent
    }
    else if (button.textContent != "C"){
        displayTextEl.textContent += button.textContent;
    }
}))

function operate(operation, num1, num2){
    if (operation === '+'){
        return add(num1, num2);
    }
    else if (operation === '-'){
        return subtract(num1, num2);
    }
    else if (operation === '/'){
        return divide(num1, num2);
    }
    else if (operation === '*'){
        return multiply(num1, num2);
    }
}


function add(a, b){
    return a + b;
}

function subtract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    let answer = a / b;
    if (Number.isInteger(a / b)){
        return a / b;
    }
    else{
        return (a / b).toFixed(4);
    }
}

console.log(operate('/', 1, 2));