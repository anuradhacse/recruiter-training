function Person(saying){
	this.saying = saying;
}

Person.prototype.talk =  function(){
	console.log('I say: ', this.saying)
}

/*Implementing new function*/

function spawn(constructor){
	var obj = {};
	Object.setPrototypeOf(obj, constructor.prototype);
	var argsArray = Array.prototype.slice.apply(arguments);
	constructor.apply(obj, argsArray.slice(1))	;
	return obj;
}

// var crockford = new Person('SEMICOLONS!!!1one1');
var crockford = spawn(Person, 'SEMICOLONS!!!1one1');

crockford.talk();