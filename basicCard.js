var inquirer = require('inquirer');
var fs = require('fs');

module.exports = BasicCard;

var BasicCard = function(front, back) {
	this.front = front;
	this.back = back;
}

BasicCard.prototype.print = function() {
	console.log('front: ' + this.front);
	console.log('back: ' + this.back);
}

var cardOne = new BasicCard('Who is the King of the North?', 'Jon Snow');
var cardTwo = new BasicCard('What is the Mountains real name?', 'Gregor Clegane');
console.log(cardOne.front);
console.log(cardOne.back);
console.log(cardTwo.front);
console.log(cardTwo.back);