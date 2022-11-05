var person = {
    name: "Lee",
    sayHello: function(){
        console.log(`Hello! My name is ${this.name}.`);
    }
};

var person2 = {
    //프로퍼티 키는 name, 프로퍼티 값은 'Lee'
    name: 'Lee',
    //프로퍼티 키는 age, 프러퍼티 값은 20
    age: 20
}
// person 객체에 name 프로퍼티가 존재하므로 name 프로퍼티의 값이 갱신된다 
person.name = 'Kim';
//person 객체에 age 프로퍼티가 동적으로 생성되고 값이 할당된다. 
person.age = 18;
console.log(typeof person);
console.log(person); //{name: "Kim", sayHello: f, age: 18}

//delete 연산자로 age 프로터티를 삭제할 수 있다. 
delete person.age;
console.log(person);