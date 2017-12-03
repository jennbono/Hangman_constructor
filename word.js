var Letter = require("./letter.js")

function Word (word) {
	this.letters = word.split("").map(function(letter){
		return new Letter(letter);
	});
}

Word.prototype.toString = function () {
	return this.letters.join(" ");
}

Word.prototype.chooseLetter = function (letter) {
	var guessValid =  this.letters.map(function(data) {
		return data.guess(letter);
	})	.includes(true);
	console.log(this);
	return guessValid;
}

Word.prototype.entireWord = function() {
	return this.letters.every(function(data){
		return data.shown;
	});
}

module.exports = Word;