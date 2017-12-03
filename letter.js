function Letter (letter) {
	this.letter = letter;
	this.shown = false;
}
Letter.prototype.toString = function () {
	if (this.shown === false) {
		return "_";
	}
	else {
		return this.letter;
	}
};
Letter.prototype.guess = function (guess) {
	if (this.letter === guess) {
		this.shown = true;
		return true;
	}
	else {
		return false;
	}
};
module.exports = Letter;