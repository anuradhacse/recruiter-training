/*
Creating new Objects
--------------------
1.Using Object initializers.
2.Using a constructor functions.
3.Using Object.create() Method
*/

//using object initializer
var myHonda = {color: 'red', wheels: 4, engine: {cylinders: 4, size: 2.2}};
console.log(typeof(myHonda));//object

//using constructor
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}
console.log(typeof(new Car('Ford','Mustang',2134)));//object

//using create method in Object class
// Animal properties and method encapsulation
var Animal = {
  type: 'Invertebrates', // Default value of properties
  displayType: function() {  // Method which will display type of Animal
    console.log(this.type);
  }
};

var animal = Object.create(Animal);
animal.displayType();
// Create new animal type called Fishes
var fish = Object.create(Animal);
fish.type = 'Fishes';
fish.displayType(); // Output:Fishes




