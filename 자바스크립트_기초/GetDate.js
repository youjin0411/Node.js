let now = new Date();
let christmas = new Date(2022, 12, 25);
let year = now.getFullYear();
let month = now.getMonth(); // 0~11
month++; // getMonth()를 하면 0부터 나옴으로 증가 시켜줘야 한다
let date = now.getDate(); //요일
let day = now.getDay(); //요일: 0: 일,  1: 월, ..., 6: 토

//2022년 9월 첫째날 요일 
let firstDate = new Date(2022, 9 - 1, 1);
firstDate.getDay();

//2022년 9월 마지막 날짜
let lastDate = new Date(2022, 9, 0); //2022년 10(9+1)월 0일 의미
lastDate.getDate();