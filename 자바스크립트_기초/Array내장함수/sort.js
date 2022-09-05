//sort() 함수는 배열에 문자형 데이터가 있는 경우 오른차순으로 정렬 
let fruits = ["Banana", "Orange", "Apple","Mango"];
fruits.sort();

//배열 안에 숫자형 데이터가 있더라도 기본적으로 문자로 인식해서 오른차순으로 정렬한다
//그래서 숫자 값으로 정렬하려면 정렬 함수를 정의해서 사용해야 한다. 다음과 같이 함수 사용

// 오름차순 
let point = [40, 100, 1, 5, 25, 10];
point.sort(function(a,b){return a - b});
/*
과정 (1) 40 - 100 = -60 음수이므로 자리 바꾸지 않음 (2) 100 - 1 = 99 양수이므로 자리 바꿈...반복 
*/

//내림 차순 
let point2 = [40, 100, 1, 5, 25, 10];
point2.sort(function(a,b){return b - a})
/*
과정 (1) 100 - 40 = 60이므로 a,b 자리 바꿈 ...반복 
*/

//정렬된 배열을 역순으로 정렬하려면 reverse() 함수를 사용 
let fruit = ["Banana", "Orange", "Apple", "Mange"];
fruit.sort(); //오름차순 정렬
fruit.reverse(); //내림차순 정렬

//실무에서는 Object의 특정 키를 기준으로 sort()함수를 사용하는 경우가 많다.
let person = [
    {
    name: "유재석",
    point: 78,
    city: "서울"
    },
    {
    name : "김종국",
    point: 92,
    city: "서울"
    },
    {
    name : "양세찬",
    point: 76,
    city: "제주"
    },
    {
    name : "하하",
    point: 81,
    city: "서울"
    }
];

person.sort(function(a,b){
    return a.point > b.point ? -1 : a.point < b.point ? 1 : 0;
    //a.point가 b.point보다 클 때 -1을 리턴하고 / b.point가 a.point보다 클 때 1을 리턴하고, 둘 다 아니면 0을 리턴  
})
