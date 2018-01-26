/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */

var foo = 42; //foo is a now a number
console.log(foo);

var foo = "bar"; //foo is now a String
console.log(foo);

var foo = true; //foo is now a boolean
console.log(foo); 
/*
Data Types in latest ECMA Script - JS is loosed typed or dynamic language
1.Boolean
2.Null
3.Undefined
4.Number ( standard type is double. NO specific type for integers)
5.String
6.Symbol(new in ES6)(ex: +infinity, -infinity, NaN(Not a Number))
7. Object
*/

//maximum and minimum

var max = Number.MAX_VALUE;
console.log(max);

var min = Number.MIN_VALUE;
console.log(min);

/*safe integers MAX and MIN value -2^53< i < 2^53 
 intergers are safe means : there is a one to one mapping between mathematical 
 integers and their javaScript representations. Beyond 2^53 unsafe.
 ex: Math.pow(2,53) = 9007199254740992
     Math.pow(2,53) + 1 = 9007199254740992
*/

console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);

console.log("Unsafe Intergers: ")
console.log(Math.pow(2,53));
console.log(Math.pow(2,53)+1);
console.log(Math.pow(2,53)+2);
console.log(Math.pow(2,53)+3);
console.log(Math.pow(2,53)+4);


/*Integer 0 has two representations -> +0 and -0*/
console.log("Two representations of 0: ")
console.log(49/+0) //+infinity
console.log(49/-0) //-infinity

/*

Primitivate Data types common fetures
---------------------------------------
All types except objects define immutable values(values that cnnot be changed)

Strings
-------
-immutable - cannot change the value
-new string is created when substring and concatanation
*/

/*
symbol primitive datatype
--------------------------
-its Wrapper class is Symbol
-symbol value return from Symbol() is unique. 
-So it is use as identifier for object properties
*/

console.log("Symbol Data Type:")
const symbol1 = Symbol();
const symbol2 = Symbol(42);
const symbol3 = Symbol('foo');

console.log(typeof symbol1);
console.log(symbol3.toString());
// console.log(symbol2);
// console.log(symbol3);
console.log(Symbol('foo') === Symbol('foo'));

/*
Objects - new keyword
---------
Date
Array
Keyed Collections (Maps, Sets, WeakMaps , WeakSets)
Difference between Maps and WeakMaps is that Maps can be enumerated using the key.
JSON
*/
