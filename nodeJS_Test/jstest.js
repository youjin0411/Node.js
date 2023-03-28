let user = {
    name: "John",
    age: 30
};
// sayHi 속성에 함수 할당 (=> 메소드 정의)
user.sayHi = function() {
    alert("안녕하세요!");
};
// 메소드 호출
user.sayHi();