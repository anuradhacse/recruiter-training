http = require('http');
const bl1 = require('bl');
const bl2 = require('bl');
const bl3 = require('bl');


url1 = process.argv[2];
url2 = process.argv[3];
url3 = process.argv[4];

//get first url
http.get(url1, callback1);
http.get(url2, callback2);
//get third url
http.get(url3, callback3);

var dataArray = [];
var orderedArray = [];
var count = 0;

printInOrder();

function printInOrder(){
	dataArray.forEach( data => {
		if(data.count == 1){
			orderedArray[0] = data;
		}
		else if (data.count == 2){
			orderedArray[1] = data;
		}
		else{
			orderedArray[2] = data;
		}
	});

	orderedArray.forEach( data => console.log(data.data));
	}


function callback1(response){
	response.pipe(bl1(function(err, data){
		if(err){
			return console.log(err);
		}
		collector(data.toString(), 1);
		count++;
		if(count == 3){
			printInOrder();
		}
		
	}));
}


function callback2(response){
	response.pipe(bl2(function(err, data){
		if(err){
			return console.log(err);
		}
		collector(data.toString(), 2);
		count++;
		if(count == 3){
			printInOrder();
		}
	}));
}



function callback3(response){
	response.pipe(bl3(function(err, data){
		if(err){
			return console.log(err);
		}
		collector(data.toString(), 3);
		count++;
		if(count == 3){
			printInOrder();
		}
		}));
}


function collector(data, count){

	var item = {
		data: data,
		count: count
	}

	dataArray.push(item);
}

/*

original answer
---------------

    var http = require('http')
    var bl = require('bl')
    var results = []
    var count = 0
    
    function printResults () {
      for (var i = 0; i < 3; i++) {
        console.log(results[i])
      }
    }
    
    function httpGet (index) {
      http.get(process.argv[2 + index], function (response) {
        response.pipe(bl(function (err, data) {
          if (err) {
            return console.error(err)
          }
    
          results[index] = data.toString()
          count++
    
          if (count === 3) {
            printResults()
          }
        }))
      })
    }
    
    for (var i = 0; i < 3; i++) {
      httpGet(i)
    }



*/
