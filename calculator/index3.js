// 계산기 만들기 
/**
 * 1. 숫자 버튼을 누르면 숫자가 화면에 반영되어야한다/
 *  .numbers > .number  -> .result 
 * 2. 연산자들을 누르면 기능이 수행 되어야한다. 
 *  num1 + 연산자 + num2  => 결과값 나오기
 * 3. 결과값이 화면에 반영 되어야 한다.
 * 4. ac를 누르면 값이 0으로 초기화 되어야 한다. 
 * 
 */

// 함수 선언문

// function sum(param1, param2) {
//     return param1 + param2
// }

// sum(1, 2);

// const obj = {
//     // 메소드
//     prop: function () {

//     }
// }

// // 생성자 함수 
// function name() {

// }

// //화살표 함수 (ES6)

// const arrowFunc = () => {}

// func();



// // 함수 표현식 +기명 함수  = > 기명 함수 표현식
// const func = function func() {

//     return 'func';
// }
// // 익명 함수 표현식 
// const func = function () {
//     return 'func';
// };

// console.log(func());



/** 중요!! 화살표 함수  */

// const arrowFunc = () =>{
//     return ''  
// }


/** 매개변수와 인자 다루기 */

// function func(params){
// params = params + 10;
// return params;
// }

// const result = func(1);
// console.log('더하기'+result);


/** 결과값 도출 제외하고  다 됨 
 *  결과값을 도출하려면 = 에 클래스가 따로 있거나 id가 존재해야한다. 
 */

const contents = document.querySelector('.contents');
const display = document.querySelector('.result'); 
const operators = document.querySelector('.operators');

function calculate(num1, operator, num2) {
    let result = 0;
    /** if문  */
    if (operator === '+') {
        result = Number(num1) + Number(num2);
    } else if (operator === '-') {
        result = Number(num1) - Number(num2);
    } else if (operator === '×') {
        result = Number(num1) * Number(num2);
    } else if (operator === '÷') {
        result = Number(num1) / Number(num2);
    }
    return String(result);
}



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
                    // console.log('previousKey' + previousKey);
                    // console.log('previousNum' + previousNum);
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


        if (action === 'operator') { // //클릭된 HTML 엘리먼트의 클래스 네임이 'operator'일때 분기     
            operatorForAdvanced = buttonContent; // 오퍼레이터 누를 때 누른 텍스트 정보 할당
            previousKey = operatorForAdvanced; // 직전키에 오퍼레이터 텍스트 정보 할당
        }
        
        if (action == 'test') { // Enter(계산) 버튼을 누를 때
            if (firstNum !== '' && operatorForAdvanced === '') {
                display.textContent = firstNum;

            } else if (firstNum !== '' && previousNum === '') {
                display.textContent = calculate(display.textContent, operatorForAdvanced, display.textContent)
            } // 기존에 작성했던 calculate 함수를 이용하여 계산 상황에 따른 전달인자와 함께 호출

            else if (previousKey === display.textContent) {
                display.textContent = calculate(firstNum, operatorForAdvanced, previousNum)

            } else if (previousKey !== display.textContent && previousNum !== '') {
                display.textContent = calculate(display.textContent, operatorForAdvanced, previousNum)

            } else if (previousKey !== display.textContent && previousNum === '') {
                display.textContent = firstNum;

            }

        }
    }





    // 번호도 이미 있고, 연산자도 있을 경우 
    // ac 버튼 액션 => 번호 및 연산자 초기화



});