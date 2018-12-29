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