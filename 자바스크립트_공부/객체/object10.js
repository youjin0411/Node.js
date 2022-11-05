var obj = {
    name: "Lee",
    sayHi: function(){
        console.log('Hi !' + this.name);
    }
};

obj.sayHi(); //Hi ! Lee

var obj2 = {
    name: "Lee",
    //메서드 축약 표현
    sayHi(){
        console.log("Hi !" + this.name);
    }
};

obj2.sayHi(); //Hi ! Lee