async function f() {
    // 이행된 프로마이스를 바로 반환하는 Promise.resolve 함수
    return Promise.resolve(1);
    // 위의 코드와 똑같은 동작 수행
    // return new Promise((resolve, reject) => resolve(1));
    }
    f().then(alert); // 1