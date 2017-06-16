var inquirer = require('inquirer');
var fs = require('fs');

module.exports = ClozeCard;

var ClozeCard = function(text, cloze) {
	this.text = text;
	this.cloze = cloze;
}