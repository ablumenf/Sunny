const start = Date.now();
// pre-compute NLP stuff to hide NLP's really bad latency
// return object so we can return top k list without showing nlp_reduce results
const nlp_episodes = episodes.map((season, i) => season.map((ep, j) => ({
		title: nlp_reduce(ep.title),
		season: i,
		episode: j
})));
const end = Date.now();
console.log("If you're here, you've just learned that doing the NLP pre-computations for the search engine on this page took " + ((end - start)/1000) + " seconds!");

// argmax(jaccard(input, e)) for e ranging over all episodes
function searchEpisodes(input) {
	const nlp_input = nlp_reduce(input);
	const nlp_input_set = stringToSet(nlp_input);

	let desiredEpisode;
	let maxJaccard = -1;
	for(let i = 0; i < nlp_episodes.length; i++) {
		const jaccardValues = nlp_episodes[i].map(ep => jaccard(nlp_input_set, ep.title));
		const maxIndex = jaccardValues.indexOf(Math.max(...jaccardValues));
		if(jaccardValues[maxIndex] > maxJaccard) {
			desiredEpisode = {
				season: i + 1,
				episode: maxIndex + 1,
				title: episodes[i][maxIndex].title
			};
			maxJaccard = jaccardValues[maxIndex];
		}
	}
	if(maxJaccard <= 0) throw new Error("No result found");
	return desiredEpisode;
}