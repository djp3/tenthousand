/**
 * http://usejsdoc.org/
 */

Field = require('./Field');
Assignment = require('./Assignment');

//creates a new Player object
function Player(playerID) {
	//playerID specified when player creates new Game or when player joins game
	this.playerID = playerID;
	this.playerFields = [];
	this.playerAssignments = [];
}

module.exports = Player;