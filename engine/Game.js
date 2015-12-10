/**
 * http://usejsdoc.org/
 */

Player = require('./Player');
Field = require('./Field');

//creates new Game object
function Game(gameID, listOfPlayers, turnLimit, startTime, whoseTurn) {
	//gameID randomly created when player creates new Game, or specified when player joins game
	this.gameID = gameID;
	//array of all player objects within game - number of player objects created with specified gameID
	this.listOfPlayers = listOfPlayers;
	//time limit specified by gameCreator for maximum turn length
	this.turnLimit = turnLimit;
	//the time the game was started at - started playing, NOT time at which game was created
	this.startTime = startTime;
	//playerID of the player whose turn it is now
	this.whoseTurn = whoseTurn;
	//TODO: Jared, this is where field placement history should go
	this.fieldsPlayed = [];
	this.getGameBoard = function(){
		return this.fieldsPlayed;
	}
	this.getAssignmentsHeld = function(){
		var assignments = [];
		for(i = 0; i < this.listOfPlayers.length; i++){
			assignments.concat(this.listOfPlayers[i].getAssignments());
		}
	}
}
module.exports = Game;