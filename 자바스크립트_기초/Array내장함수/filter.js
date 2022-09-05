//filter()함수는 특정 조건을 만족하는 배열의 요소만을 찾아서 새로운 배열로 반환한다. 
// filter()함수는 배열을 다룰 때 가장 많이 사용한느 내장 함수이다. 
// 특정 조건을 만족하는 데이터만 추출해 내는 프로그램을 구현할 때 매우 효율적이다. 

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(function(word){
    return word.lenght > 6; //단어의 길이가 6자리보다 큰 단어만 추출해서 새로운 배열로 반환 
})

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

let pass = person.filter(function(person){
    return person.point >= 80;
});