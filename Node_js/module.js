const {add, minus, defaultNum} = require('./calculator');
//모듈로 만들어진 자바스크립트 파일은 require() 함수를 통해서 가져올 수 있다. 
//require() 함수의 경로를 전달한다. 파일 경로에서 자바스크립트 확장자인 .js는 생략해도 된다. 
console.log(add(7,2));
console.log(minus(7,2));
console.log(defaultNum);