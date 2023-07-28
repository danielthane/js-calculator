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
    while (operations.length > 0){
        while (operations.includes(operationOrder[0])){
            doOperations(operationOrder[0], operations, numbers)
        }
        while (operations.includes(operationOrder[1])){
            doOperations(operationOrder[1], operations, numbers)
        }
        while (operations.includes(operationOrder[2])){
            doOperations(operationOrder[2], operations, numbers)
        }
        while (operations.includes(operationOrder[3])){
            doOperations(operationOrder[3], operations, numbers)
        }
    displayTextEl.textContent += `=${numbers[0]}`;
    }
})

function doOperations(operation, operations, numbers){
    let index = operations.indexOf(operation);
    console.log(numbers[index], numbers[index+1])
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
