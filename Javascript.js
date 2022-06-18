let operandOne = ""
let operandTwo = ""
let operator = ''
let sum = 0
let tempOperand = 0
const display = document.querySelector('#display')


function clearAll() {
    operandOne = sum;
    operandTwo = ""
    operator = "";
    sum = "";
}

function clearButton() {
    clearAll();
    display.innerText = ""
}

function clickOne() {
    tempOperand = 1;
    setOperands();
}

function clickTwo() {
    tempOperand = 2;
    setOperands();
}

function clickThree() {
    tempOperand = 3;
    setOperands();
}

function clickFour() {
    tempOperand = 4;
    setOperands();
}

function clickFive() {
    tempOperand = 5;
    setOperands();
}

function clickSix() {
    tempOperand = 6;
    setOperands();
}

function clickSeven() {
    tempOperand = 7;
    setOperands();
}

function clickEight() {
    tempOperand = 8;
    setOperands();
}

function clickNine() {
    tempOperand = 9;
    setOperands();
}

function setOperands() {
    if (display.innerText.length < 10) {
    if (operator == "") {
        if (operandOne.length == 0) {
            operandOne = tempOperand.toString();
            display.innerText += tempOperand.toString();
        } else {
            operandOne = operandOne + tempOperand.toString()
            display.innerText += tempOperand.toString();
        }
    } else {
        if (operandTwo.length == 0) {
            operandTwo += tempOperand.toString()
            display.innerText += tempOperand.toString();
        } else {
            operandTwo = operandTwo + tempOperand.toString()
            display.innerText += tempOperand.toString();
        }
    }
}
    console.log(operandOne,operator,operandTwo)
}

function clickPlus() {
    if (operandTwo == "" && operator == "") {
        if (operandOne.length != 0) {
        operator = '+';
        display.innerText = display.innerText+ operator.toString();
        console.log(operator)
        }
    }
}

function clickMinus() {
    if (operandTwo == "" && operator == "") {
        if (operandOne.length != 0) {
        operator = '-';
        display.innerText = display.innerText+ operator.toString();
        console.log(operator)
        }
    }
}

function clickTimes() {
    if (operandTwo == "" && operator == "") {
        if (operandOne.length != 0) {
        operator = '*';
        display.innerText = display.innerText+ operator.toString();
        console.log(operator)
        }
    }
}

function clickDivide() {
    if (operandTwo == "" && operator == "") {
        if (operandOne.length != 0) {
        operator = '/';
        display.innerText = display.innerText+ operator.toString();
        console.log(operator)
        }
    }
}

function clickEquals() {
    if (operator == '+') {
        sum = parseInt(operandOne) + parseInt(operandTwo);
    } else if (operator == '-') {
        sum = parseInt(operandOne) - parseInt(operandTwo);
    }  else if (operator == '*') {
        sum = parseInt(operandOne) * parseInt(operandTwo);
    }  else if (operator == '/') {
        sum = parseInt(operandOne) / parseInt(operandTwo);
    }
    console.log(sum);

    display.innerText = sum;
    clearAll();
}

one.addEventListener('click', clickOne)
two.addEventListener('click', clickTwo)
three.addEventListener('click', clickThree)
four.addEventListener('click', clickFour)
five.addEventListener('click', clickFive)
six.addEventListener('click', clickSix)
seven.addEventListener('click', clickSeven)
eight.addEventListener('click', clickEight)
nine.addEventListener('click', clickNine)

plus.addEventListener('click', clickPlus);
minus.addEventListener('click', clickMinus);
times.addEventListener('click', clickTimes);
divide.addEventListener('click', clickDivide);
equals.addEventListener('click',clickEquals);
clear.addEventListener('click', clearButton);