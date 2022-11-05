function add(x, y){
    return x + y;
}

//f(2, 5) = 7
var result = add(2,5); //7
console.log(result);

var f = function add(x, y){
    return x + y; 
};


// 함수 표현식
var add2 = function add(x,y){
    return x + y;
};
console.log(add2(2, 5)); //7