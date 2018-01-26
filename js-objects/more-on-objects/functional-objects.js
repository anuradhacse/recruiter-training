var Pizza = function(){

	this.crust = 'thin';
	this.toppings = 3;
	this.hasBacon = true;

}

console.dir(Pizza);//you can't see the properties
console.log(Pizza.crust);//undefined

//creating new objects
var pizzaA = new Pizza();
console.log(pizzaA.crust); //now we can access properties

var pizzaB = new Pizza();
pizzaB.crust = 'hard';
console.log(pizzaB.crust);

console.log(pizzaB instanceof Pizza);//true 

console.dir(Pizza.constructor); //return the constructor