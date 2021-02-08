function checkAmpm(currentHour) {
	if(currentHour < 12) {
		console.log("AM");
	} else if(currentHour > 12) {
		console.log("PM");
	} else {
		console.log("noon");
	}
}
checkAmpm(20);