//Promise는 자바스크립트에서 비동기 처리(특정 코드의 실행이 완료될 때까지 기다리지 않고 다음 코드를 실행할 수 있게 해주는 방식)에 사용되는 객체

const formise = new Promise((resolve, reject) => {
    if(true){
        resolve("결과 데이터");
    }else{
        reject(new Error("에러"));
    }
})