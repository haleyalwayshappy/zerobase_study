const result = document.querySelector('.result');
const numbers = document.querySelector('.numbers');
const numBtn = numbers.querySelector('.number');

console.log(numbers);

function calculate(num1, num2, operator) {
    let result = 0;
    if (operator === '+') {
        result = Number(num1) + Number(num2);
        console.log('testtest');
    } else if (operator === '-') {
        result = Number(num1) - Number(num2);
    } else if (operator === '*') {
        result = Number(num1) * Number(num2);
    } else if (operator === '/') {
        result = Number(num1) / Number(num2);
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
            if (result.textContent === '0' && operatorForAdvanced === '') {
                result.textContent = buttonContent;
                firstNum = result.textContent; // 첫번째 숫자를 화면에 반영한다. 
            } else if (result.textContent !== '0' && operatorForAdvanced === '') {
                // 연산 버튼이 비활성화 + 기존에 숫자가 입력되어있을때 뒤에 숫자를 추가해준다. 
                result.textContent = result.textContent + buttonContent;
                firstNum = result.textContent;
            }

            // 이제 여기에 연산 버 튼 눌렀을 때 실행해야함 ㅅㅂ
        }
    }
});

// 연산 버튼 눌렀을때!

