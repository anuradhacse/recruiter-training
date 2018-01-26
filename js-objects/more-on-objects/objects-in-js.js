var pizza = {
	crust: 'thin',
	toppings: 3,
	hasBacon: true,
	howManyToppings: function(){
		return this.toppings;
	}
}

console.log(pizza.crust);

//adding new property pizza.
pizza.price = 12;
console.log(pizza);

//deleting a property
delete(pizza.crust);
console.log(pizza);