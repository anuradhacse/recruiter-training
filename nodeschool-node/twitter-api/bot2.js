console.log("hello node");

var Twit = require('twit');

var config = require('./config');
var T = new Twit(config);

setInterval(tweetMe, 1000*20);

function tweetMe(){
	random = Math.floor(Math.random()*100);

		tweet = { 
		status: 'Here is a random number'+ random +' #hello people, Um doing great!' 
	};

	tweeted = function(err, data, response) {
		if(err){
			console.log("Something went wrong: ", err);
		}
		else{
		  console.log("It Worked ", data);
		}
	}

	T.post('statuses/update', tweet, tweeted);
}

