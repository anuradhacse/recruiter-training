/*
Literals
---------
use literals to represent values in JS.
1.Array literals
-extra commas in array literals
ex: var fish = ['Lion', , 'Angel'];
fish[1]=undefined

2.Boolean
3.Floating point
4.Integers
5.Obejct Literals

6.Regex 
7.String

*/

//start property names with a letter not a number. Otherwise cant use dot operator.
var sales = 'Toyota';

function carTypes(name) {
  if (name === 'Honda') {
    return name;
  } else {
    return "Sorry, we don't sell " + name + ".";
  }
}

var car = { myCar: 'Saturn', getCar: carTypes('Honda'), special: sales };

console.log(car.myCar);   // Saturn
console.log(car.getCar);  // Honda
console.log(car.special); // Toyota