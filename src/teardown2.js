module.exports = function(counter, setting){
	if(setting === "double"){
		return counter.count *= 2;
	}
	return counter.count += 1;
}