/* Declarations
  -------------
1.var - Declares a variable
2.let - Declares a block-scoped, local variable
3.const - Declares a block-scoped, read-only named constant
*/
  
if(true){
    var x = 5;
 }
console.log(x);//5

if(true){
    let y = 5;
 }
console.log(y);
  
 
/*
Exception: ReferenceError: y is not defined
@Scratchpad/1:16:1
*/