fetch("http://localhost:6000/posts", {
        method: "POST",
        body: JSON.stringify({
            title: "foo",
            autor: "bar",
        }),
        headers: {
            "content-type": "application/json",
        },
    })
    .then((response) => response.json())
    .then((json) => console.log(json));