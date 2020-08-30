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
var currentHour = 11;
var result = checkAmpm(currentHour);
console.log(result);