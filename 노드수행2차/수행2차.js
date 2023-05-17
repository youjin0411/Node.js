// 배열 및 forEach문과 for of문 
const arr = ['apple', 'banana', 'cherry', 'orange'];

//forEach구문
arr.forEach(function(data, index) {
    //매개변수 첫번째는 값, 두번째는 인덱스 
    console.log(index + '번째 요소는 ' + data + '입니다.');
});
arr.forEach(function(f) {
        console.log(f);
    })
    // for..of 구문 
for (const a of arr) {
    console.log(a);
}
//arr 배열 안에 findIndex 메서드를 사용해서 cherry의 인덱스를 찾아서 cherryIndex에 저장
// findIndex와 indexOf의 차이점은 findIndex는 콜백함수를 사용할 수 있다는 것이다.
const cherryIndex = arr.findIndex(data => data === 'cherry');

// indexOf를 통해 세 번쨰 인덱스부터 cherry를 찾아서 a에 저장
const a = arr.indexOf('cherry', 3);

// arr의 가장 뒤에 grape 추가 
arr.push('grape');

// arr의 가장 뒤에 있는 요소를 제거하고 x에 저장 
const x = arr.pop();

// 백틱 
let name1 = '페이커';
let name2 = '캡틴잭';

//백틱 사용조건은 ${변수명}이다. 
console.log(`${name1}와 ${name2}`)

// 콜백함수
function somefunc(callback) {
    console.log("somefunc 실행");
    // somefunc 실행 콘솔 출력 후 callback 함수 실행 
    callback();
}
// somefunc 함수 실행 후 콜백함수 실행 콘솔 출력
// 콜백 함수는 함수의 매개변수로 전달되는 함수를 의미한다.
// 콜백 함수란 매개변수로 전달된 함수를 의미한다.
somefunc(function() {
    console.log("콜백함수 실행");
});

// fs 모듈을 이용한 파일 읽기 및 처리
// 파일 관련 모듈 fs
const fs = require('fs');
// 파일 경로 관련 모듈 path 
const path = require('path');

//__dirname은 현재 경로를 의미 
console.log(__dirname);

// fs.readdirSync는 현재 경로에 있는 파일들을 배열로 반환한다. 
const files = fs.readdirSync(__dirname);

// path.join은 절대 경로에 files[0] 즉 파일명을 더해서 그 파일의 경로를 반환한다.
// ex) C://Users/사용자명/노드수행2차  + "\" + files[0]
result = path.join(__dirname, files[0]);
// C://Users/사용자명/노드수행2차\files[0]
console.log(result);

// path.basename은 파일명만 반환 
// fs.이 아닌 path.를 사용한 이유는 fs는 파일을 읽어오는 모듈이고 path는 파일 경로를 반환하는 모듈이기 때문이다.
console.log(path.basename(result));

// path.join을 활용해서 복사한 파일.js의 경로를 반환 
const copiedFile = path.join(__dirname, '복사한 파일.js');
// fs.copyFileSync는 첫번째 매개변수의 파일을 두번째 매개변수의 파일로 복사한다. 
fs.copyFileSync(result, copiedFile);

// 변경한 파일.js의 경로를 반환 
const renameFile = path.join(__dirname, '변경한 파일.js');
// fs.renameSync는 copiedFile의 파일명을 renameFile의 파일명으로 변경한다.
fs.renameSync(copiedFile, renameFile);

// fs.unlinkSync는 매개변수의 파일을 삭제한다. 
fs.unlinkSync(renameFile);

// fs.StatSync는 매개변수의 파일의 정보를 반환한다. 
console.log(fs.statSync(result))

// json
const json = '{"result": true,"count": 42}';
console.log(json);

// 문자열 객체를 JOSN 객채로 변환 
const obj = JSON.parse(json);
console.log(obj.count);
console.log(obj["result"]);

// JSON 객체를 문자열로 변환 
const str = JSON.stringify(obj);
console.log(str);

// 객체
const cathy = {
    "name": "cathy",
    "age": 20,
    "skills": ["자바스크립트", "자바", "씨언어", "파이썬", "코틀린"]
};

console.log(cathy);
console.log(cathy.name);

cathy["name"] = '만복이';
console.log(cathy["name"]);

cathy["성별"] = "여자"
console.log(cathy["성별"]);

// 문자열
const string = "Hello World!";
console.log(string);

console.log(string.slice(1, 5));
const rep = string.replace("Hello", "Hi");
console.log(rep);
console.log(str.toUpperCase());
console.log(str.toLowerCase());

console.log(str.includes("World"));

// null undefined
let foo;
console.log(foo);

let object = {}
console.log(object.prop);
console.log(typeof null);
console.log(typeof undefined);

//동등비교
console.log(1 == '1');
console.log(1 === '1');