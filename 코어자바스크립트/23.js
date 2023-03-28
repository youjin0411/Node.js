var copyObject = function(target) {
    var result = {};
    for (let prop in target) {
        result[prop] = target[prop];
    }
}