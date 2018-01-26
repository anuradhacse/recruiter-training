/*
Comparing Objects
------------------
In JavaScript objects are a reference type. 
Two distinct objects are never equal, even if they have the same properties. 
Only comparing the same object reference with itself yields true.
=== strict comparison
== not strict - just che
*/

var car1 = {name : "ford"}; 
var car2 = {name : "ford"}; 
var car3 = car2; //both refer to same object

console.log(car1 == car2);//false
console.log(car1 === car2);//false
console.log(car3 == car2); //true
console.log(car3 === car2) //true

car2.name = 'lambogini';
console.log(car3.name);//lambogini