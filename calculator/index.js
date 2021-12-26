const display = document.querySelector('.result');
const numbers = document.querySelector('.numbers');
const numBtn = numbers.querySelector('.number');


function calculate(num1, operator,num2) {
    let result = 0;
    if (operator === '+') {
        result = Number(num1) + Number(num2);
        console.log('더하기 실행');
    } else if (operator === '-') {
        result = Number(num1) - Number(num2);
    } else if (operator === '*') {
        result = Number(num1) * Number(num2);
    } else if (operator === '/') {
        result = Number(num1) / Number(num2);
    } else if (operator === '=') {

        if (firstNum !== '' && operatorForAdvanced === '') {
            display.textContent = firstNum;
        } else if (firstNum !== '' && previousNumber === '') {
            display.textContent = calculate(display.textContent, operatorForAdvanced, display.textContent);
        } else if (previousKey === display.textContent) {
            display.textContent = calculate(firstNum, operatorForAdvanced, previousNumber);
        } else if (previousKey !== display.textContent && previousNumber !== '') {
            display.textContent = calculate(display.textContent, operatorForAdvanced, previousNumber);
        } else if (previousKey !== display.textContent && previousNumber === '') {
            display.textContent = firstNum;
        }
    }
    return String(result);
}


let firstNum = '';
let operatorForAdvanced = '';
let previousKey = '';
let previousNumber = '';

numbers.addEventListener('click', function (event) {
    const target = event.target;
    const action = target.classList[0];
    const buttonContent = target.textContent;

    if (target.matches('button')) {
        // 숫자를 눌렀을 때 화면 반영 처리
        if (action === 'number') {
            // 화면에 반영 되는값이 0일때 + 아무런 연산이 이루어지지 않았을 때 
            if (display.textContent === '0' && operatorForAdvanced === '') {
                display.textContent = buttonContent;
                firstNum = display.textContent; // 첫번째 숫자를 화면에 반영한다. 
            } else if (display.textContent !== '0' && operatorForAdvanced === '') {
                // 연산 버튼이 비활성화 + 기존에 숫자가 입력되어있을때 뒤에 숫자를 추가해준다. 
                display.textContent = display.textContent + buttonContent;
                firstNum = display.textContent;
            } else if (display.textContent !== '0' && operatorForAdvanced !== '') {
                if (previousKey === operatorForAdvanced) {
                    display.textContent = buttonContent;
                    previousKey = display.textContent;
                    console.log(previousKey);
                    previousNumber = display.textContent;
                } else if (previousKey !== operatorForAdvanced) {
                    display.textContent = display.textContent + buttonContent;
                    previousNumber = display.textContent;
                }
            }
        }
        if (action === 'operator') {
            operatorForAdvanced = buttonContent;
            previousKey = operatorForAdvanced;
        }
        if (action === 'ac') {
            display.textContent = '0';
            firstNum = '';
            previousNumber = '';
            operatorForAdvanced = '';
            previousKey = '';
        }


    }
});

// 연산 버튼 눌렀을때!
