const calculators = document.querySelector('.calculators');
const contents = document.querySelector('.contents');
const display = document.querySelector('.result');
const operators = document.querySelector('operators');


function add(firstNum, secondNum) {
    return Number(firstNum + secondNum);
}

function minus(firstNum, secondNum) {
    return Number(firstNum - secondNum);
}

function multiply(firstNum, secondNum) {
    return Number(firstNum * secondNum);
}

function divide(firstNum, secondNum) {
    return Math.floor(firstNum / secondNum);
}

function clickDigits() {

    let firstNum = ''; // 처음 숫자 
    let operatorForAdvanced = ''; // 연산식
    let previousKey = ''; // 이전 키 
    let previousNum = ''; // 이전숫자
    contents.addEventListener('click', function (event) {
            const target = event.target; // 클릭된 html 엘리먼트의 정보가 저장되어 있다.
            const action = target.classList[0]; // 클릭된 html 엘리먼트에 클래스 정보를 가져온다. 
            const buttonContent = target.textContent; //클릭된 html 엘리먼트의 텍스트 정보를  가져온다. 

            if (target.matches('button')) {
                if (action === 'number') { // 번호 버튼 액션 => 번호가 화면에 차례대로 반영
                    if (display.textContent === '0' && operatorForAdvanced === '') { // 번호 + 연산자가 0 일경우 
                        display.textContent = buttonContent; // 숫자를 화면에 보여준다.
                        firstNum = display.textContent; // 화면에 보여지는 값을 firstNum 변수에 할당해준다. 
                    } else if (display.textContent !== '0' && operatorForAdvanced === '') { // 숫자는 이미 있지만 연산자는 '' 일 경우
                        display.textContent = display.textContent + buttonContent; //앞서 있던 숫자들과 새로 입력 받은 숫자를 '문자열'로 더해준다.
                        firstNum = display.textContent; // 화면에 보여지는 값을 firstNum 변수에 할당한다.
                    } else if (display.textContent !== '0' && operatorForAdvanced !== '') {
                        if (previousKey === operatorForAdvanced) {
                            display.textContent = buttonContent;
                            previousKey = display.textContent; // 직전키를 변수에 할당 
                            previousNum = display.textContent; // 직전 숫자를 변수에 하당 
                        } else if (previousKey !== operatorForAdvanced) {
                            display.textContent = display.textContent + buttonContent;
                            previousNum = display.textContent;
                        }
                    }
                }

                // 숫자 초기화 
                if (action === 'ac') {
                    display.textContent = '0';
                    firstNum = '';
                    previousNum = '';
                    operatorForAdvanced = '';
                    previousKey = '';
                }

            }
        }
    }