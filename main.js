var number1;
var operator;
var number2;
var resultNumber;
var numberArray = [];

function numberAdd() { 
    if(operator == undefined) {
        var number = this.innerText;
        numberArray.push(number);
        var numberResult = Number(numberArray.join(""));
        console.log(numberResult);
        resultInput.value = numberResult
        number1 = numberResult;
    } else {
        var number = this.innerText;
        numberArray.push(number);
        var numberResult = Number(numberArray.join(""));
        console.log(numberResult);
        resultInput.value = numberResult
        number2 = numberResult;
    }   
}

function operators() {
    if(number1 !== undefined) {
        var operatorText = this.innerText;
        operator = operatorText;
        resultInput.value = "";
        numberArray = [];
        operatorInput.innerText = operator;
    } else {
        alert("숫자를 먼저 입력해주세요")
    }

    if(number2 !== undefined) {
        switch(operator) {
            case "+" : 
                resultNumber = number1+number2;
                break;
            case "-" : 
                resultNumber = number1-number2;
                break;
            case "*" : 
                resultNumber = number1*number2;
                break;
            case "/" : 
                resultNumber = number1/number2;
                break;
        }

        number1 = resultNumber;
        number2;
        numberArray = [];
    }
}

function result() {
    if(operator === "+") {
        resultNumber = number1+number2;
    } else if(operator === "-") {
        resultNumber = number1-number2;
    } else if(operator === "*") {
        resultNumber = number1*number2;
    } else if(operator === "/") {
        resultNumber = number1/number2;
    }
    resultInput.value = resultNumber;
    number1 = undefined;
    operator = undefined;
    number2 = undefined;
    numberArray = [];
    operatorInput.innerText = "";
}

function clear() {
    number1 = undefined;
    number2 = undefined;
    operator = undefined;
    resultNumber = undefined;
    numberArray = [];
    operatorInput.innerText = "";
    resultInput.value = 0;
}

const resultInput = document.getElementById("result");
const numberButton = document.querySelectorAll(".cal-btn");
const operatorButton = document.querySelectorAll('.operation');
const resultButton = document.querySelector(".result");
const clearButton = document.querySelector(".clear");
const operatorInput = document.querySelector(".cal-operator");
resultInput.value = 0;

for(var i=0; i<numberButton.length; i++) {
    numberButton[i].addEventListener("click", numberAdd);
}

for(var i=0; i<operatorButton.length; i++) {
    operatorButton[i].addEventListener("click", operators)
}

resultButton.addEventListener("click", result);
clearButton.addEventListener("click", clear);