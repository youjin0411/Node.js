fetch('http://localhost:3000/posts'.{
    method: "POST",
    body: JSON.stringify({
        title: "The Gread",
        author: "Jermey",
    }),
    headers: {
        "const-type" : "application/json; charset=UTF-8"
    }
})