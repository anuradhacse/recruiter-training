/*
Flexible constructors
----------------------
-Pass values to constructor and also having default values.
*/

function Employee(name, dept){
  this.name = name || ''; //passing parameter or default one
  this.dept = dept || 'genaral';
}

console.log(new Employee('kasun'));
console.log(new Employee('kasun','Management'));