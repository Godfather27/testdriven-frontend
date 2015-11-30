module.exports = function (counter, setting){
	if(setting === "double"){
		counter.count *= 2;
		return counter
	}
	counter.count += 1;
	return counter;
}