function closestEp(time) {
	let rval = [1, 1, "The Gang Gets Racist"];
	time = time % week;
	let closest = episodes[0][0];
	let count = 1;
	for(let i = 0; i < episodes.length; i++) {
		for(let j = 0; j < episodes[i].length; j++) {
			if(i === 0 && j === 0) {
				continue;
			}
			if(Math.abs(time - episodes[i][j].time) % week < Math.abs(time - closest.time) % week) {
				closest = episodes[i][j];
				rval[0] = i+1;
				rval[1] = j+1;
				rval[2] = closest.title;
				count = 1;
			}
			if(Math.abs(time - episodes[i][j].time) % week === Math.abs(time - closest.time) % week) {
				count++;
				random = Math.random();
				if(random < 1/count) {
					closest = episodes[i][j];
					rval[0] = i+1;
					rval[1] = j+1;
					rval[2] = closest.title;
				}
			}
		}
	}
	return rval;
}