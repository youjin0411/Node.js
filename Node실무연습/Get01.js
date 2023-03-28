const { response } = require("express");

fetch("http://localhost:6000/comments")
    .then((response) => response.json())
    .then((json) => console.log(json));

fetch("http://localhost:6000/comments/1")
    .then((response) => response.json())
    .then((json) => console.log(json)); //id로 조회

fetch("http://localhost:6000/comments?postId=1")
    .then((response) => response.json())
    .then((json) => console.log(json)); //postId로 조회