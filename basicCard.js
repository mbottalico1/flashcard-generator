var inquirer = require('inquirer');
var fs = require('fs');

module.exports = BasicCard;

function BasicCard(front, back) {
	this.front = front;
	this.back = back;
}
