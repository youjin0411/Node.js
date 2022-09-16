async function f() {
    let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("완료!"), 1000)
    });
    // 프라미스가 이행될 때까지 잠시 중단되어 1초를 기다리게 됨
    // (즉, 실제로는 비동기 작업을 진행해도, 바깥에서는 순차적인 작업을 진행하는 것처럼 코드를 작성 가능)
    let result = await promise;
    alert(result); // "완료!"
    }
    f();