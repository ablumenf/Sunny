function badInput(tokenizedTime) {
	if(isNaN(parseInt(tokenizedTime[0])) || isNaN(parseInt(tokenizedTime[1]))) {
		return true;
	}

	var hour = Number(tokenizedTime[0]);
	if(!Number.isInteger(hour) || hour < 1 || hour > 12) {
		return true;
	}

	var minute = Number(tokenizedTime[1]);
	if(!Number.isInteger(minute) || minute < 0 || minute > 59) {
		return true;
	}

	return false;
}

// function randomInt(min, max) gives random in [min, max)
function randomTime() {
	var randomHour = randomInt(1, 13);
	var randomMinute = randomInt(0, 60);
	if(randomMinute < 10) randomMinute = "0" + randomMinute;
	return randomHour + ":" + randomMinute;
}

function randomDay(n) {
	n = n % 7; // just in case
	days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
	return days[n];
}

function dayOffset(day) {
	let rval = 3;
	if(day === "Thursday") rval = 0;
	if(day === "Friday") rval = 1;
	if(day === "Saturday") rval = 2;
	if(day === "Sunday") rval = 3;
	if(day === "Monday") rval = 4;
	if(day === "Tuesday") rval = 5;
	if(day === "Wednesday") rval = 6;
	return rval;
}