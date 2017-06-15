var inquirer = require('inquirer');
var fs = require('fs');

module.exports = BasicCard;

var BasicCard = function(front, back) {
	this.front = front;
	this.back = back;
}

var cardOne = new BasicCard('Who is the King of the North?', 'Jon Snow');
var cardTwo = new BasicCard('What is the Mountains real name?', 'Gregor Clegane');
var cardThree = new BasicCard('Is Jon Snows real father Eddard Stark?', 'No');
var cardFour = new BasicCard('Valyrian Steel and Dragon glass are weapons used to defeat....', 'White Walkers');
