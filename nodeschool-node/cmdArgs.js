
var allArguments = process.argv;

first = allArguments.shift(); //remove first element
second = allArguments.shift() //remove second element

// console.log(allArguments);

result = allArguments.reduce((a,b) => {
	return (+a)+(+b); //convert strings to int. Can use Number() as well.
},0);

console.log(result);

/*
Official solution
-------------------

 var result = 0
    
    for (var i = 2; i < process.argv.length; i++) {
      result += Number(process.argv[i])
    }
    
    console.log(result)


*/
