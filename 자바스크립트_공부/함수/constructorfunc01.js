const circle1 = {
    radius: 5,
    getDiameter(){
        return 2 * this.radius;
    }
};

console.log(circle1.getDiameter()); //10

function Circle2(radius){
    // 생성자 함수 내부의 this는 생성자 함수가 생성할 인스턴스를 가리킨다.
    this.radius = radius;
    this.getDiameter = function(){
        return 2 * this.radius;
    };
}

const circles1 = new Circle2(5); //반지름이 5인 Circle 객체생성
const circles2 = new Circle2(10); //반지름이 10인 Circle 객체생성
console.log(circles1.getDiameter()); //10
console.log(circles2.getDiameter()); //20