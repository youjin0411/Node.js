// 배열 및 forEach문과 for of문 
const arr = ['apple', 'banana', 'cherry', 'orange'];

arr.forEach(function(data, index) {
    console.log(index + '번째 요소는 ' + data + '입니다.');
});
arr.forEach(function(f) {
    console.log(f);
})
for (const a of arr) {
    console.log(a);
}
const cherryIndex = arr.findIndex(data => data === 'cherry');

const a = arr.indexOf('cherry', 3);

arr.push('grape');

const x = arr.pop();

// 백틱 
let name1 = '페이커';
let name2 = '캡틴잭';

console.log(`${name1}와 ${name2}`)

// 콜백함수
function somefunc(callback) {
    console.log("somefunc 실행");

    callback();
}
somefunc(function() {
    console.log("콜백함수 실행");
});

// fs 모듈을 이용한 파일 읽기 및 처리
const fs = require('fs');
const { type } = require('os');
const path = require('path');

console.log(__dirname);

const files = fs.readdirSync(__dirname);

result = path.join(__dirname, files[0]);
console.log(result);

console.log(path.basename(result));

const copiedFile = path.join(__dirname, '복사한 파일.js');
fs.copyFileSync(result, copiedFile);

const renameFile = path.join(__dirname, '변경한 파일.js');
fs.renameSync(copiedFile, renameFile);

fs.unlinkSync(renameFile);

console.log(fs.statSync(result))

// json
const json = '{"result": true,"count": 42}';
console.log(json);

const obj = JSON.parse(json);
console.log(obj.count);
console.log(obj["result"]);

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