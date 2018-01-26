function Car(make, model, year){
  this.make = make;
  this.model = model;
  this.year = year;
  this.displayCar = displayCar;
  
};


function displayCar(){
  var result = 'A Beutiful ' + this.year + ' ' + this.make + ' ' + 
      this.model;
  console.log(result)
}

car1 = new Car('Mustang', 'Ford', 1989);
car1.displayCar();

/*
Using this keyword for object reference
----------------------------------------
-JavaScript has a special keyword, this, that you can use within a method 
to refer to the current object
*/

/*
Defining getters and setters
----------------------------
-use the object literal syntax
*/

var Obj = {
  a:7,
  
  get b(){
    return this.a + 1;
  },
  
  set c(x){
    this.a = x/2;
  }
  
};

console.log(Obj.a); //7
console.log(Obj.b); //8
Obj.c = 50; //value passed to c method
console.log(Obj.a); //25

/*Using Object.defineProperty method*/
console.log("Getters and Setters Using Object.defineProperty");
console.log('------------------------------------------------');
/*Another method*/
var o = { a: 0 };

Object.defineProperties(o, {
    'b': { get: function() { return this.a + 1; } },
    'c': { set: function(x) { this.a = x / 2; } }
});

o.c = 10; // Runs the setter, which assigns 10 / 2 (5) to the 'a' property
console.log(o.b); // Runs the getter, which yields a + 1 or 6

/*Deleting properties*/
var myObject = new Object();
myObject.a = 5;
myObject.b = 4;

delete myObject.a;
console.log('a' in myObject);

/*You can also use delete to delete a global variable if the var 
keyword was not used to declare the variable:*/

g=12;
delete g;//g is deleted.

//cannot delete the variables delcared using var keyword
var x = 6;
delete x;
console.log(' x is not deleted : ' + x);

