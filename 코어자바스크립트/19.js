var a = 10;
var b = a;
var obj1 = { c: 10, d: 'ddd' };
var obj2 = obj1;

b = 15;
obj2 = { c: 20, d: 'ddd' };

console.log(a);
console.log(b);
console.log(obj1);
console.log(obj2);

//a는 10
//b는 15
//obj1 는 c: 10, d:ddd 
//obj2 는 c: 20, d:ddd