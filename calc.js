const buttons = document.querySelectorAll('button');
const displayTextEl = document.querySelector('.display-text');
const equalsButtonEl = document.querySelector('.equals');
const clearButton = document.querySelector('.clear');
const operationOrder = ['/', '*', '+', '-'];
let input ='';
let error = false;

// Clear button implementation
clearButton.addEventListener('click', () => {
    input = '';
    displayTextEl.textContent = "";
})


buttons.forEach(button => button.addEventListener('click', () => {
    if (input.length < 16){
        if (!button.classList.contains('equals') && !button.classList.contains('clear')){
            if (button.classList.contains('operation') && operationOrder.includes(input[input.length - 1])){
                error = true
            }
            else{
                input += button.textContent;
                displayTextEl.textContent = input + " ";
            }
        }
    }
}))


equalsButtonEl.addEventListener('click', () => {
    let numbers = splitNumbersOperations(input)[0];
    let operations = splitNumbersOperations(input) [1];
    // Removes operations when they're completed until none remaining
    while (operations.length > 0){
        for (let i = 0; i < operationOrder.length; i++){
            while (operations.includes(operationOrder[i])){
                bidmas(operationOrder[i], operations, numbers)
            }
        }
    displayTextEl.textContent += `=${numbers[0]}`;
    }
})

function bidmas(operation, operations, numbers){
    // Finds the operations in bidmas order
    let index = operations.indexOf(operation);
    // Operates on the two relevant numbers before updating the arrays
    let currentResult = operate(operations[index], numbers[index], numbers[index + 1]);
    numbers.splice(index, 2, currentResult);
    operations.splice(index, 1);
}

function splitNumbersOperations(input){
    inputArray = input.split(/([_\W])/);
    let numbers = [];
    let operations = [];
    for (let i = 0; i < inputArray.length; i ++){
        if (i % 2 == 0){
            numbers.push(Number(inputArray[i]));
        }
        else{
            operations.push(inputArray[i]);
        }
    }
    return [numbers, operations];

}

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
