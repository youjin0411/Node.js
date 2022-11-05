var person = {
    'last-name': 'Lee',
    1: 10
};

// person.'last-name'; 오류 발생 -> string 문자열로 인식하지 않음
// person.last-name; 브라우저 환경에서 NaN
// person[last-name]; //참조에러 발생
console.log(person['last-name']); //Lee

// person.1; 오류 발생
// person.'1'; 오류 발생
// person[1]; 오류발생
console.log(person['1']); //10