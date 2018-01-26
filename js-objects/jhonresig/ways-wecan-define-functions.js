function isNimble()
{ return true; }

var canFly = function(){ return true; };

window.isDeadly = function(){ return true; }; //window will work only in browser

log(isNimble, canFly, isDeadly);
