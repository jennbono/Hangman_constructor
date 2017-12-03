var Letter = require("./letter.js")

function Word (word) {
	this.letters = word.split("").map(function(letter){
		return new Letter(letter);
	});
}

Word.prototype.toString = function () {
	return this.letters.join(" ");
}

module.exports = Word;