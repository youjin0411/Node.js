var mysql = require('mysql'); //mysql 모듈을 사용 할 것인데 그 모듈이 mysql 변수에 들어가있다.
//mysql 변수에 담겨있는 모듈과 관련된 객체에 소속되어 있는 createConnection 메서드 호출
var connection = mysql.createConnection({  //만들어지는 결과가 connection이라는 변수에 담김.
    //메서드의 인자로 객체를 주기로 약속
    //객체의 프로퍼티로는
    host: 'localhost', //호스트 데이터베이스 서버가 어떤 컴퓨터에 있는가, node.js와 mysql이 같은 컴퓨터에 있다면 그 뜻으로 localhost사용 
    user: 'root', //유저
    password: '1234', //비밀번호
    database: 'openturials' //데이터베이스 이름
});

connection.connect();//connection에 담겨있는 어떠한 값 객체한테 connect()이라는 메서드를 호출하면 접속이 될 것임을 알리는 코드
//접속이 끝난 후 connection.query()라는 메서드를 호출해서 sql문의 첫번쩨 인자문(SELECT...)을 주고, 두번째 인자로 콜백함수를 주면 
//첫번째 인자의 mysql이 데이터베이스 서버에 전송이 되서 실행이 끝난 후 응답을 하고
//두번째 인자인 콜백인 호출이 될 것이다. 
connection.query('SELECT * FROM topic', function(error, result, fields) { 
    //첫번째 에러의 인자는 에러 안에 어떠한 값이 있을 때  
    if(error){
        console.log(error);
    }
    //접속 결과는 result라고 하는 두번째 파라미터의 인자로 전달 될 것을 약속 
    console.log(result);
});

connection.end();