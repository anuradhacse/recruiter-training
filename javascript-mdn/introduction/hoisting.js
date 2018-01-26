/*
Hoisting
--------
1.Variable Hoisting 
let(const) will not hoist the variable to the top of the block.
2.Function Hoisting
*/

console.log(x===undefined); //true
var x = 5;

/*function hoisting*/

foo(); //bar
function foo(){
  console.log('bar')
}

baz();
var baz = function(){
  console.log("bar 2");
};

/*
Exception: TypeError: baz is not a function
@Scratchpad/1:19:1
*/