/*
You can add a property to a previously defined object type by using the
prototype property. This defines a property that is shared by all objects of 
the specified type, rather than by just one instance of the object.
The following code adds a color property to all objects of type car, 
and then assigns a value to the color property of the object car1
*/

function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}
var mycar = new Car('Eagle', 'Talon TSi', 1993);

Car.prototype.color = null;//adding new property to all Car objects

car1 = new Car('A','B',123);
console.log(car1);
console.log(car1.color)
