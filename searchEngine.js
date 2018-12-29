const params = {
	"whitespace": true,
	"numbers": true,
	"punctuation": true,
	"contractions": true,
	"acronyms": true,
	"possessives": true,
	"plurals": true,
	"verbs": true
};

const myDict = { // patch up some fixes with NLP library (dict could probably be smaller, but what the hell)
	"asses": "ass",
	"banging": "bang", "bangs": "bang", "broke": "break", "breaks": "break", "beats": "beat", "bogg": "boggs",
	"cracks": "crack",
	"dates": "date",
	"escapes": "escape", "escaped": "escape", "exploits": "exploit",
	"fights": "fight", "falls": "fall", "fell": "fall",
	"getting": "get", "got": "get", "gives": "give", "goes": "go", "gets": "get",
	"hits": "hit",
	"kills": "kill", "killed": "kill",
	"ladies": "lady",
	"made": "make", "moves": "move", "moved": "move", "making": "make", "makes": "make", "misses": "miss", "missed": "miss", "making": "make",
	"pooped": "poop", "poops": "poop",
	"rats": "rat", "runs": "run", "retires": "retire",
	"sells": "sell", "sets": "set", "save": "save", "squashes": "squash", "spies": "spy", "suburbs": "suburb", "solves": "solve", "solved": "solve",
	"tries": "try", "turns": "turn", "turned": "turn", "tends": "tend", "tended": "tend", "tending": "tend",
	"vs.": "vs"
};

function removeExtraWhitespaceAndEndPunctuation(s) {
	return s.replace(/\s+/g, " ").replace(/!|\?|\(|\)/g, "").trim();
}

function nlp_reduce(s) {
	return nlp(removeExtraWhitespaceAndEndPunctuation(s)).normalize(params).out('text');
}

function lookupWord(s) {
	return s in myDict ? myDict[s] : s;
}

const start = Date.now();
// pre-compute NLP stuff to hide NLP's really bad latency
// return object so we can return top k list without showing nlp_reduce results
const nlp_episodes = episodes.map((season, i) => season.map((ep, j) => {
	return {
		title: nlp_reduce(ep.title),
		season: i,
		episode: j
	};
}));
const end = Date.now();
console.log("If you're here, you've just learned that doing the NLP pre-computations for the search engine on this page took " + ((end - start)/1000) + " seconds!");

// argmax(jaccard(input, e)) for e ranging over all episodes
function findEp(input) {
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

/* Jaccard similarity utils */

function stringToSet(str) {
    const lowerCaseArr = str.toLowerCase().split(" ");
    const stopWords = new Set(["the", "a", "an"]);
    return new Set(lowerCaseArr.filter(w => w.length > 0 && !stopWords.has(w)).map(w => lookupWord(w)));
}

// input is s_set instead of s so we don't compute s_set over and over again
function jaccard(s_set, t) {
	const t_set = stringToSet(t);
	return intersection(s_set, t_set).size / union(s_set, t_set).size;
}

/* JS set utility functions */

function union(setA, setB) {
    return new Set(Array.from(setA).concat(Array.from(setB)));
}

function intersection(setA, setB) {
    const listA = Array.from(setA);
    return new Set(listA.filter(elem => setB.has(elem)));
}