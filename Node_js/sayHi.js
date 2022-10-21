// 📁 sayHi.js
// export 지시자를 사용해 스크립트 파일(sayHi.js) 내부의 함수 sayHi를 외부로 내보내기

export function sayHi(target) {
    alert(target);
    return target;
}
export function sayBye(){};

export let hello = "hello";


//export {sayHi, sayBye, hello};