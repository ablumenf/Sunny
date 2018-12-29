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