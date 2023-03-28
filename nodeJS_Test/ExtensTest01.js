var extendClass1 = function(SuperClass, SubClass, subMethods){
	SubClass.prototype = new SuperClass();
	for(var prop in SubClass.prototype){
		if(SubClass.prototype.hasOwnProperty(prop)){
			delete SubClass.prototype[prop];
		}
	}
	subClass.prototype.constructor = SubClass;
 	if(subMethods){
		for(var method in subMethods){
			subClass.prototype[method] = subMethod[method];
		}
	}
	Object.freeze(SubClass.prototype);
	return SubClass;
};