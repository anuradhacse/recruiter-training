// throw 'Error2'; //String type
// throw 42;
// throw true;
// throw {toString: function(){return "Im an object!";}};

// /*create custom objects*/
// function UserException(message){
//   this.message = message;
//   this.name = 'User Exception';
// }
// //make the exception convert to a pretty string
// UserException.prototype.toString = function(){
//   return this.name + ':"' + this.message + '"';
// }

// //create new object type and throw it
// throw new UserException('Value to High');



/*
Exception: User Exception:"Value to High"
*/

// ---------------------------------------------------------

function InvalidMonthException(error){
  this.message = error;
  this.name = 'InvalidMonthException';
  
}

InvalidMonthException.prototype.toString = function(){
  return this.name + ":'" + this.message+"'";
};

function getMonthName(monthNumber){
  
  var months = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul',
                'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
  ];
  
  if(months[monthNumber-1]){
     return months[monthNumber-1];
     }
     else{
     throw new InvalidMonthException('Month is not valid ;(');
     }
  
}

try{
  monthName = getMonthName(13);
}
catch(e){
  monthName = 'unKnown';
  console.log(e.toString());
}
finally{
  console.log("All is well. shutting down!!!")
 
}

/*
If the finally block returns a value, this value becomes the return value of the
entire try-catch-finally production, 
regardless of any return statements in the try and catch blocks:
*/

function f(){
  try{
    console.log(0);
    throw 'bogus';
  }
  catch(e){
    console.log(1);
    return true;
    console.log(2);
    
  }
  finally{
    console.log(3);
    return true; //this override all other throws and returns
    console.log(4);
  }
  
  console.log(5);
}

f();