var perfix = 'prop';
var i = 0;

var obj = {};

// 계산된 프로퍼티 이름의 프로퍼티 키 동적 생성
obj[perfix + "-" + ++i] = i;
obj[perfix + "-" + ++i] = i;
obj[perfix + "-" + ++i] = i;

console.log(obj)