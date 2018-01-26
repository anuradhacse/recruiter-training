var answer = 42;
answer = "How are you getting along with javaScript";

/*
+ operator -> converts numeric values to strings
*/

x = "answer is " + 42;
console.log(x); //answer is 42

y = 42 + " is the answer";
console.log(y); //42 is the answer

x = '37' - 7;
console.log(x);//30

y = '37' + 7;
console.log(y);//377

/*converting strings to numbers*/
x = '47';
y = parseInt(x)
console.log(typeof(x));//string
console.log(typeof(y));//number

x = 35.67;
y = 23.4566;
console.log(parseFloat(x)+parseFloat(y));

/*
An alternative method of retrieving a number from a 
string is with the + (unary plus) operator:
*/
console.log('11.1' + '11.1'); //11.111.1
console.log(+'11.1' + +'11.1');//22.2