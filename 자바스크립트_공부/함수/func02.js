var add1 = (function() {
    var a = 10;
    return function(x, y){
        return x + y + a;
    }
}());

console.log(add1(1,2)); //3