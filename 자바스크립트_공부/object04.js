var obj = {}; //빈 객체
var key = 'hello';

//ES5: 프로퍼티 키 동적생성
obj[key] = 'world';
//var obj = {[key]: 'world};
// {hello: 'world'}
console.log(obj)
