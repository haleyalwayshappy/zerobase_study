/** 객체생성 */

// 클래스 연결 해주는 기본 ! 
const button = document.querySelector('.push');

button.addEventListener('click', function () {
    alert('버튼을 눌러서 알럿창을 띄웠습니다!');
})


// 객체 생성 
const object = {
    property: 'value',
    method: function () {

    },

}


// 싱글 리터럴 객체 
// PascalCase로 네임 생성 
function NewObject(name) {
    this.name = name;
}
const newObject = new NewObject('jang');



// const newObject2 = Object.create (프로토타입 , 객체 서술자 (기술자)); 
// 내가 원하는 만큼 조건 설정을 프로토 타입으로 만들어 줄수 있다.
const newObject2 = Object.create(
    Object.prototype, {
        name: {
            value: 'jang',
            writable: true, // 덮어 쓸 수 있는지 
            enumerable: true, // 열거 할 수 있는지, 
            configurable: true, // 객체 서술자를 수정할 수 있는지 
        },
    }, );

newObject2.name = 'kim'; // 덮어쓰는 행위를 했을때 true면 가능 false면 불가능 

newObject2; // 열거가 된다면 { 여기에 } 내용이 들어간다. 



/** 프로퍼티 열거 (for in) */


const obj = {
    prop1: 'value1',
    prop2: 'value2',
    prop3: 'value3',
    prop4: 'value4',
}


for (const key in obj) {
    console.log(obj[key]);
}


/** 프로퍼티 조작 */

const person = {
    firstName: 'jang',
    location: 'korea',


    /**  프로퍼티 접근자 (getter , setter ) */
    get firstName() {
        return this._firstName; // 위의 firstName이랑 이름이 겹치기 때문에 우회해서 네임을 적는게 좋음
    },

    set firstName(newFirstName){
        if(typeof newFirstName !== 'string'){
         this._firstName = 'undefined name';    
            return ;
        }
        this._firstName = newFirstName;
    },

    get fullName (){
        return (
            this._firstName + this.lastName + '입니다.'
        );
    },

};


person.firstName = 'lee' ; // 이렇게 되면 숫자가 들어왔으니 언디파인드 네임이라고 나옴 
person.lastName = "hongeun";
console.log(person.fullName);


// person.lastName = 'honghong'; // 이런식으로 추가 할 슈 있다

// person.lastName ='hongeun'; // 수정도 된다. 

// // 삭제 
// delete person.location;



