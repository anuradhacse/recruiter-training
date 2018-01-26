/*Array Object in JS*/

//Ways of creating arrays in JS

var arr = new Array(1,23,4);
var arr = Array(1,2,3,4,5);
var arr = [1,2,3,4,5] //Array literal or iniitalizer.*Short -> So Preferred*
console.log(arr.length) 

/*
if you supply a non-integer value to the array operator in the code above,
a property will be created in the object representing the array,
instead of an array element.
*/
arr[2.3] = 'interesting';
console.log(arr[2.3]);//interesting
console.log("Array length : " + arr.length);//still 5
console.log(arr.hasOwnProperty(2.3))//true
for(var i in arr){
console.log(i);//print indexes
  console.log(arr[i]);//print elements in array
}

/*
Length of array
---------------
it always returns the index of the last element plus one
(in the following example, Dusty is indexed at 30, 
so cats.length returns 30 + 1)
*/
var cats = [];
cats[30] = 'Kalu';
console.log(cats.length);//31 

/*Truncate array by reducing the length*/
var cats = ['Dusty', 'Misty', 'Twiggy'];
console.log(cats.length); // 3

cats.length = 2;
console.log(cats); // logs "Dusty, Misty" - Twiggy has been removed

cats.length = 0;
console.log(cats); // logs nothing; the cats array is empty

cats.length = 3;
console.log(cats); // [undefined, undefined, undefined]
