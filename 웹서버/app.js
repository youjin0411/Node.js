const express = require('express')
const app = express()
const port = 6000;

//클라이언트에서 HTTP 메서드 중 GET을 이용해서 'host:port'로 요청을 보내면 실행되는 라우터
app.get('/', (req, res) => {
    res.send('Hello World!');
})

//app.listen()를 사용해서 서버를 실행
app.listen(port, () => {
    console.log(`서버가 실행됩니다. https://localhost:${port}`)
})