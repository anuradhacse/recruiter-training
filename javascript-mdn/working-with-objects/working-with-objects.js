/*
Objects
-------
-consist of properties
-a property is a name(or key) and a value pair.
-A property's value can be a function, in which case the property 
 is known as a method
-Objects are sometimes called associative arrays(thats why  we can 
use this notation to access values -- myCar['name'])

-An object property name can be any valid JavaScript string, 
or anything that can be converted to a string, including the empty string.
However, any property name that is not a valid JavaScript identifier 
(for example, a property name that has a space or a hyphen, or that starts with
a number) can only be accessed using the square bracket notation.
*/

var myCar = new Object();
myCar.make = 'Ford';
myCar.model = 'Mustang';
myCar.year = 1969;

console.log(myCar['make']);
console.log(myCar['model']);
console.log(myCar['year']);
console.log(myCar.make);
console.log(myCar.model);
console.log(myCar.year);

//valid property names
var myObject = new Object(),
str = 'myStr',
rand = Math.random(),
obj = new Object();

myObject.type = 'Dot Syntax';
myObject['date created'] = 'String with space';
myObject[str] = 'String Value';
myObject[rand] = 'RamdomNumber';//property name decide in runtime
myObject[obj] = 'obj';
myObject[''] = 'Even an empty String';

console.log(myObject);
console.log(myObject.rand);//undefined
console.log(myObject['[object Object]']);//when obj convert to string
console.log(obj.toString());//[object Object] which is key 

/*
Enumerating properties of an object
----------------------------------
1. for in loop
2. Object.keys(o)
3. Object.getOwnPropertyNames(o)
*/
function showProps(obj, objName){
  var result = '';
  for(var i in obj){
    if(obj.hasOwnProperty(i)){
       result += objName + '.' + i + ' = ' + obj[i] + '\n';
       }
  }
  return result;
 
}

console.log("showing properties of objects: ")
console.log('--------------------------------')
result = showProps(myCar, "Mycar");
console.log(result);
result = showProps(myObject, "MyObject");
console.log(result);

//function to reveal hidden peoperties
function listAllProperties(o) {
	var objectToInspect;     
	var result = [];
	console.log("started runnning loop............")
  
	for(objectToInspect = o; objectToInspect !== null; objectToInspect = Object.getPrototypeOf(objectToInspect)) {  
      result = result.concat(Object.getOwnPropertyNames(objectToInspect)); 
      console.log("object to inspect : " + objectToInspect)
	}
	
	return result; 
}

console.log("All properties:")
console.log("-----------------------")
result = listAllProperties(myCar);
console.log(result);

