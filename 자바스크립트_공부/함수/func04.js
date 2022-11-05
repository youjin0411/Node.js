// 펙토리얼(계승)은 1부터 자신까지의 모든 양의 정수의 곱이다
// n! = 1 * 2 * ... *(n-1) * n
function factorial(n){
    //탈출조건 : n이 1 이하일 때 재귀 호출을 멈춘다
    if(n <= 1) return 1;
    //재귀호출
    return n * factorial(n - 1);
}

console.log(factorial(0)); //0! = 1
console.log(factorial(2)); //2! = 2 * 1