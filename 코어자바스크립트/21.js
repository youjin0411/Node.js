var user = {
    name: 'Jaenam',
    gender: 'male'
};

var changeName = function(user, newName) {
    var newUser = user;
    newUser.name = newName;
    return newUser;
};

var user2 = changeName(user, 'Jung');

if (user !== user2) {
    console.log('유저 정보가 변경되었습니다.')
}

// user.name과 user2.name이 같은 값을 가지고 있는 이유는 
// user2는 user를 참조하고 있기 때문이다.
// user의 name의 값은 'Jung'이 되었고, user2의 name의 값도 'Jung'이 되었다.
// 'Jung'이 된 이유는 user2의 name의 값이 'Jung'이 되었기 때문이다.
console.log(user.name, user2.name);
console.log(user === user2);