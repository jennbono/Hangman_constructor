var inquirer = require("inquirer");
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
		inquirer
		  	.prompt([
			    // Here we create a basic text prompt.
			    {
			      type: "input",
			      message: "What letter would you like to guess?",
			      name: "guess"
			    }
			    ])
		  	.then((inquirerResponse) => {
			    var guessCorrect = this.currentWord.chooseLetter(inquirerResponse.guess);
			    if (guessCorrect === false) {
			    	this.guessesRemaining--;
			    }
			    if (this.guessesRemaining === 0) {
			    	return inquirer
		  				.prompt([
						    {
						      type: "confirm",
						      message: "Would you like to play again?",
						      name: "confirm",
						      default: true
						    }
						    ])
		  				.then((inquirerResponse) => {
		  					if (inquirerResponse.confirm === true) {
		  						this.play();
		  					}
		  				});
			    }
			    if (this.currentWord.entireWord() === false) {
			    	this.userGuess();
			    }
			    else {
			    	console.log("Congratulations! Starting a New Game.")
			    	this.play();
			    }
		  	});
	}
}

module.exports = Game;