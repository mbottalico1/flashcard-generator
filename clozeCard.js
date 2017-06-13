var inquirer = require('inquirer');
var fs = require('fs');

module.exports = ClozeCard;

function ClozeCard(text, cloze) {
	this.text = text;
	this.cloze = cloze;
}