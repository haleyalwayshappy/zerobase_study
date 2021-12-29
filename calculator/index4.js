/** 모법답안  
 * 약간 별로인게 내가 풀었던 html에는 answer가 일관된 operator 였는데 모범답안에는 answer로 따로 클래스명이 설정되어있다. 
 * 그리고 코드가 간단하네 _^^_^ 분석하자!
 * 
 */
import {
    $answerButton,
    $clearButton,
    $numbersWrapper,
    $operatorsWrapper,
    $result
} from "./scripts/elements.js";

let result = "";

let leftOperand = "";
let operator = "";
let rightOperand = "";

const reset = () => {
    leftOperand = "";
    operator = "";
    rightOperand = "";
};

const clearFormula = () => {
    $result.innerText = "";
    reset();
};

$numbersWrapper.addEventListener("click", (event) => {
    if (event.target.className !== "number") {
        return;
    }

    if (operator === "") {
        leftOperand = event.target.innerText;
    } else {
        rightOperand = event.target.innerText;
    }

    $result.innerText = event.target.innerText;
});

$operatorsWrapper.addEventListener("click", (event) => {
    if (event.target.className !== "operator") {
        return;
    }

    if (result !== "" && leftOperand === "") {
        leftOperand = result;
    }

    operator = event.target.innerText;
});

$clearButton.addEventListener("click", () => {
    clearFormula();
});

$answerButton.addEventListener("click", () => {
    switch (operator) {
        case "+":
            result = Number(leftOperand) + Number(rightOperand);
            break;
        case "-":
            result = Number(leftOperand) - Number(rightOperand);
            break;
        case "*":
            result = Number(leftOperand) * Number(rightOperand);
            break;
        case "/":
            result = Number(leftOperand) / Number(rightOperand);
            if (isFinite(result)) {
                result = Math.floor(result);
            }
            break;
        default:
            break;
    }

    $result.innerText = result;
    reset();
});