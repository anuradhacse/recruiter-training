var Pizza = function(){

	var crust = 'thin'; //private access
	this.hasBacon = true; //public
	this.getHasBacon = function(){
		return this.hasBacon;
	};
};

var PizzaA = new Pizza();

/*
property crust not shown, 
but hasBacon and getHasBacon shown
*/
console.log(PizzaA);  


