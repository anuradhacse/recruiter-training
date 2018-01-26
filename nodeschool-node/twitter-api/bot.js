console.log("hello node");

var Twit = require('twit');

var config = require('./config');
var T = new Twit(config);

//
//  search twitter for all tweets containing the word rainbow
//

var params = { 
	q: 'rainbow', 
	count: 2
};

function gotData(err, data, response) {
	var statuses = data.statuses;
	for(var i=0; i<statuses.length; ++i){
		 console.log(statuses[i].text);
	}
}

T.get('search/tweets', params, gotData);

