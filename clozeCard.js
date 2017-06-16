var inquirer = require('inquirer');
var fs = require('fs');

module.exports = ClozeCard;

var ClozeCard = function(text, cloze) {
	this.text = text;
	this.cloze = cloze;
	this.clozeDeleted = this.text.replace(this.cloze, '_____');
}

ClozeCard.prototype.print = function() {
	console.log('text: ' + this.text);
	console.log('cloze: ' + this.cloze);
}