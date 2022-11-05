var person = {
    name: "Lee"
};

//마침표 표기법에 의한 프로퍼티 접근
console.log(person.name); //Lee

//대괄호 표기법에 의한 프로퍼티 접근
console.log(person['name']); //Lee
// console.log(person[name]); 오류 발생 -> 대괄호 안을 따옴표로 감싸지 않았기 때문이다 