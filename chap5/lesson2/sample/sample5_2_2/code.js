function checkAmpm(currentHour) {
	var result;
	if(currentHour < 12) {
		result = "AM";
	} else if(currentHour > 12) {
		result = "PM";
	} else {
		result = "noon";
	}
	return result;
}
var result = checkAmpm(20);
console.log(result);