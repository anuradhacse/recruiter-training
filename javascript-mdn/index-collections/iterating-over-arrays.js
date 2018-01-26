/*
Iterating in arrays.

1. forloop
2. forEach
*/

//forloop example

var colors = ['red','green','blue'];

for(var i=0; i<colors.length; ++i){
  console.log(colors[i]);
}

//foreach loop
colors.forEach(function(color){
  console.log(color);
});

//fat arrow operation
colors.forEach(color => console.log(color));

/*Array methods */

//concatnation
var myArray = new Array('1','2','3');
myArray = myArray.concat('a','b','c');
console.log(myArray)

//join with deliminator -
var myArray = new Array('Wind', 'Rain', 'Fire');
var list = myArray.join(' - '); // list is "Wind - Rain - Fire"
console.log(list);

//push
var myArray = new Array('1','2');
myArray.push('3');

//pop
var myArray = new Array('1', '2', '3');
var last = myArray.pop(); 

//shift
var myArray = new Array('1','2','3');
var first = myArray.shift();
console.log(first);
console.log(myArray);

//unshift()
var myArray = new Array('1', '2', '3');
myArray.unshift('4', '5'); 
// myArray becomes ["4", "5", "1", "2", "3"]

//slice
var myArray = new Array('a', 'b', 'c', 'd', 'e');
myArray = myArray.slice(1, 4);
console.log(myArray);//b,c,d

//splice
var myArray = new Array('1', '2', '3', '4', '5');
myArray.splice(1, 3, 'a', 'b', 'c', 'd'); 
// myArray is now ["1", "a", "b", "c", "d", "5"]
// This code started at index one (or where the "2" was), 
// removed 3 elements there, and then inserted all consecutive
// elements in its place.

//reverse()
var myArray = new Array('1', '2', '3');
myArray.reverse(); //reverse array so that myArray = ["3", "2", "1"]

//sort
var myArray = new Array('Wind', 'Rain', 'Fire');
myArray.sort();  // ["Fire", "Rain", "Wind"]

//index of an element
var a = ['a', 'b', 'c', 'b','a',12,3,4,5,4,5 ];
console.log(a.indexOf('b'));//1
console.log(a.indexOf('b'), 2)//index of b from 2

//map, filter
//every and some
function isNumber(number){
  return typeof(number) === 'number';
};

a1=[1,3,4];
console.log(a1.every(isNumber)); //true
console.log(a.every(isNumber)); //false

console.log(a1.some(isNumber)); //true
console.log(a.some(isNumber)); //true

//reduce
console.log(a1.reduce((x,y)=> {return (x+y);},0));


