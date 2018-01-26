function makeIterator(array){
  nextIndex = 0;
  
  return {
    
    next: function()
    {
          nextIndex < array.length ? 
        {value : array[nextIndex++], done : false} : 
        {done : true};
    
  }
    };
   
}

function makeIterator1(array) {
    var nextIndex = 0;
    
    return {
        
       next: function() {
           return nextIndex < array.length ?
               {value: array[nextIndex++], done: false} :
               {done: true};
       }
    };
}

var it = makeIterator1(['yo','ya']);
console.log(it.next().value); //'yo'
console.log(it.next().value); //'ya'
console.log(it.next().done);

