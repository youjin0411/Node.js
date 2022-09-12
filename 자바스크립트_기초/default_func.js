// 함수를 호출 할 때, 파라미터로 값을 전달하지 않으면, 함수 내에서 해당 파라미터는 undefined가 된다. 
// 함수를 호출 할 때 파라미터에 값이 전달되었는지를 확인 
function say(message){
    if(message != undefined){
        console.log(message);
    }else{
        console.log("파라미터가 넘어오지 않았어요.")
    }
}
say()

