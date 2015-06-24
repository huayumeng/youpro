'use strict';
module.exports = function(min,max){
	min = isNaN(min)?1:min;
	max = isNaN(max)?100:max;
	var range = max = min;
	var rand = Math.random();
	return(min + Math.round(rand * range));
};
