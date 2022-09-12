//Async / Await는 Promise와 동일한 목적으로 사용 
// Async비동기 실행, Await는 비동기를 실행하는데 결과가 올 때까지 기다리겠다는 의미 
// 같은 스코프에서 결과 값을 관리할 수 있기 때문에 훨씬 효율적으로 프로그램 코드를 구현 가능 

async function myFunction() {
    const r = await asyncFunction();
}
const function2 = async() => {
    const r = await asyncFunction();
}