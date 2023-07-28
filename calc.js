const buttons = document.querySelectorAll('button');
const displayTextEl = document.querySelector('.display-text');
const equalsButtonEl = document.querySelector('.equals');
let num1 = '';
let operation = '';
let num2 = '';
let result;

buttons.forEach(button => button.addEventListener('click', (e) => {
    if (displayTextEl.textContent == "0" && button.textContent != "C"){
        displayTextEl.textContent = button.textContent + " ";
    }
    else if (button.textContent != "C"){
        displayTextEl.textContent += button.textContent + " ";
    }
}))


buttons.forEach(button => button.addEventListener('click', () =>{
    if (button.classList.contains('number') && operation == ''){
        num1 += button.textContent;
    }
    else if (button.classList.contains('number')){
        num2 += button.textContent;
    }
    else if (button.classList.contains('operation')){
        operation = button.textContent;
    }
}))

equalsButtonEl.addEventListener('click', () => {
    result = operate(operation, num1, num2);
    displayTextEl.textContent += result;
})


function operate(operation, num1, num2){
    num1 = Number(num1);
    num2 = Number(num2);
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
