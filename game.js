var inquirer = require('inquirer');
var Word = require("./word.js");
var words = require("./words.js");

function Game () {
	this.play = function () {
		this.guessesRemaining = 10;
		this.nextWord();
	}
	this.nextWord = function () {
		var randomWord = words[Math.floor(Math.random()*words.length)];
		this.currentWord = new Word(randomWord);
		// console.log(this.currentWord);
		this.userGuess();
	}
	this.userGuess = function () {
		inquirer.prompt([What letter would you like to guess?]).then(answers => {
    		console.log(answers);
		});
	}
}

module.exports = Game;