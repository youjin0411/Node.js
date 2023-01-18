var Grade = function() {
	var args = Arrays.prototype.slice.call(arguments);
	for(var i = 0; i < args.length; i++){
		this[i] = args[i];
	}
	this.length = args.length;
};
Grade.prototype = [];
var g = new Grade(100, 80);