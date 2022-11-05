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

console.log(typeof person);
console.log(person); //{name: "Lee", sayHello: f}