/*block statement*/

var x = 1;
{
  var x = 2;
}

/*
This outputs 2 because the var x statement within the block is in the 
same scope as the var x statement before the block. In C or Java,
the equivalent code would have outputted 1*/
console.log(x);

/*
 Falsy values
 ------------
##The following values evaluate to false (also known as Falsy values):
  false
  undefined
  null
  0
  NaN
  the empty string ("")
*/

var b = new Boolean(false);
if(b){
   console.log("object is there. so true")
   }

if(b == true){
  //not true
}
/*
Comparison operrators
---------------------
=== and !== are strict comparison operators
JavaScript has both strict and type-converting equality comparison. For strict equality the objects being compared must have the same type and:

Two strings are strictly equal when they have the same sequence of characters, same length, and same characters in corresponding positions.
Two numbers are strictly equal when they are numerically equal (have the same number value). NaN is not equal to anything, including NaN. Positive and negative zeros are equal to one another.
Two Boolean operands are strictly equal if both are true or both are false.
Two objects are strictly equal if they refer to the same Object.
Null and Undefined types are == (but not ===). [I.e. (Null==Undefined) is true but (Null===Undefined) is false]
*/

/*Switch Statements*/

fruittype = "Bananas";

switch (fruittype) {
  case 'Oranges':
    console.log('Oranges are $0.59 a pound.');
    break;
  case 'Apples':
    console.log('Apples are $0.32 a pound.');
    break;
  case 'Bananas':
    console.log('Bananas are $0.48 a pound.');
    break;
  case 'Cherries':
    console.log('Cherries are $3.00 a pound.');
    break;
  case 'Mangoes':
    console.log('Mangoes are $0.56 a pound.');
    break;
  case 'Papayas':
    console.log('Mangoes and papayas are $2.79 a pound.');
    break;
  default:
   console.log('Sorry, we are out of ' + fruittype + '.');
}
console.log("Is there anything else you'd like?");
