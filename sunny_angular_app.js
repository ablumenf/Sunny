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

var app = angular.module('app', []);
app.controller('ctrl', function($scope) {
	$scope.day = "Tuesday";
	$scope.time = "11:15";
	$scope.pm = "AM";

	const searches = ["mac kills dad", "the worst bar", "anti social", "family fight", "serial killer", "home makeover",
	"frank intervention", "gang rivalry", "king rats", "mac dennis timeshare", "gang squashes beef", "group dates", "ass kickers united",
	"frank falls window", "trial of century", "water park", "wolf cola", "hero or hate", "gang tends bar", "cricket"];

	$scope.search = searches[randomInt(0, searches.length)];

	$scope.futureEp = function() {
		var tokenizedTime = $scope.time.split(":");
		if(tokenizedTime.length !== 2 || badInput(tokenizedTime)) {
			const randTime = randomTime();
			document.getElementById('futureEpText').innerHTML = "Bad input. Please enter a time in the format <span class='blueText'>" + randTime + "</span>.";
			$scope.time = randTime;

			const rand = randomInt(0, 2); // either 0 or 1
			$scope.pm = rand === 0 ? "AM" : "PM";

			const randDay = randomInt(0, 7); // day of week
			$scope.day = randomDay(randDay);

			return;
		}

		var h = parseInt(tokenizedTime[0]);
		var m = parseInt(tokenizedTime[1]);

		var temp = $scope.pm === "PM" ? 12 : 0;

		var time = dayOffset($scope.day) * (week/7) + (h + temp) * hour + m * minute;
		var futureEp = closestEp(time);
		document.getElementById('futureEpText').innerHTML = "Season " + futureEp[0] + ", Ep. " + futureEp[1] + ": <span class='blueText font-weight-bold'>" + futureEp[2] + "</span>";
	};

	$scope.showTopK = "false";

	$scope.searchEp = function() {
		try {
			const episode = findEp($scope.search);
			deleteSimilarityList();
			if($scope.showTopK !== "true") {
				document.getElementById('searchText').innerHTML = "Season " + episode.season + ", Ep. " + episode.episode
				+ ": <span class='blueText font-weight-bold'>" + episode.title + "</span>";
			}
			if($scope.showTopK === "true") {
				document.getElementById('searchText').innerHTML = ""; // clear result
				renderSimilarityList($scope.search);
			}
		} catch(error) {
			document.getElementById('searchAlert').innerHTML = "<div id='errorMessage' class='alert alert-danger alert-dismissible fade show col-lg-6 col-md-6 col-sm-8 col-8' role='alert'>"
					+ "<button type='button' class='close' data-dismiss='alert' aria-label='Close'><span aria-hidden='true'>&times;</span></button>"
					  + "<span class='text-danger font-weight-bold'>Error.</span> No result found." + "</div>";
			document.getElementById('searchText').innerHTML = ""; // clear result
			deleteSimilarityList();
			removeErrorMessage(5000);
		}
	};

	function removeErrorMessage(msDelay) {
		d3.select("#searchAlert")
				.selectAll("div")
				.transition()
				.delay(msDelay)
				.remove();
	}

	function renderSimilarityList(queryString) {
		const k = 10;

		const querySet = stringToSet(nlp_reduce(queryString));

		const episodeList = nlp_episodes.reduce((accumulator, season) => accumulator.concat(season), [])
			.sort((ep1, ep2) => jaccard(querySet, ep2.title) - jaccard(querySet, ep1.title))
			.slice(0, k) // top k
			.filter(ep => jaccard(querySet, ep.title) > 0) // possibly less than k, filter out episodes with similarity 0
			.map(ep => "Season " + (ep.season + 1) + ", Ep. " + (ep.episode + 1) + ": " + episodes[ep.season][ep.episode].title);
	
		d3.select("#values")
			.selectAll("tr")
			.data(episodeList)
			.enter()
			.append("tr")
			.append("td")
			.text(d => d);
	
		const cells = d3.selectAll("td")._groups[0]; // bad way to bold first row
		cells[0].style["font-weight"] = "bold";
	}
	
	function deleteSimilarityList() {
		d3.select("#tableheader").selectAll("*").remove();
		d3.select("#values").selectAll("*").remove(); // clear table
	}
});