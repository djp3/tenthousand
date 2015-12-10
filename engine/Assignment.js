Field = require('./Field');

function Assignment(){
	this.name = null;
	this.asset_name = null;
	this.type = null;
	this.fields = [];
	this.contains_tile_size = function(tile_size){
		for(i = 0; i < tiles.length; i++){
			if(fields[i].get_size() == tile_size){
				return true;
			}
		}
		return false;
	}
	this.containsField = function(fieldsPlayed, x, y, fieldSize){
		for(i = 0; i < fieldsPlayed.length; i++){
			if(fieldsPlayed[i].x == x && fieldsPlayed[i].y == y && fieldsPlayed[i].size == fieldSize){
				return true;
			}
		}
		return false;
	}
	this.checkAssignmentAtPlace = function(fieldsPlayed, addToX, addToY){//Needs serious work
		xCorner = getLargestX();
		yCorner = getLargestY();
		validAssignment = true;
		//Check Normal
		for(i = 0; i < fields.length; i++){
			validAssignment = true;
			if(!containsField(fieldsPlayed, fields[i].x+addToX, fields[i].y+addToY, fields[i].size)){
				validAssignment = false;
				break;
			}
		}
		//Check Mirrored horizontal
		for(i = 0; i < fields.length; i++){
			validAssignment = true;
			if(!containsField(fieldsPlayed, (xCorner-fields[i].x)+addToX, fields[i].y+addToY, fields[i].size)){
				validAssignment = false;
				break;
			}
		}
		
		//Check mirrored horizontal and vertical
		for(i = 0; i < fields.length; i++){
			validAssignment = true;
			if(!containsField(fieldsPlayed, (xCorner-fields[i].x)+addToX, (yCorner-fields[i].y)+addToY, fields[i].size)){
				validAssignment = false;
				break;
			}
		}
		
		//Check mirrored vertical
		for(i = 0; i < fields.length; i++){
			validAssignment = true;
			if(!containsField(fieldsPlayed, fields[i].x+addToX, (yCorner-fields[i].y)+addToY, fields[i].size)){
				validAssignment = false;
				break;
			}
		}
		return validAssignment;
	}
	this.isValidAssignment = function(fieldsPlayed){
		for(i = 0; i < fields.length; i++){
			lastField = fieldsPlayed[fieldsPlayed.length-1]; //get last field placement
			if(checkAssignmentAtPlace(fieldsPlayed, lastField.x-fields[i].x, lastField.y-fields[i].y)){
				return true;
			}
		}
		return false;
	}
	this.getLargestX = function(){
		greatestX = 0;
		for(i = 0; i < fields.length; i++){
			if(fields[i].x > greatestX){
				greatestX = fields[i].x;
			}
		}
		return greatestX;
	}
	this.getLargestY = function(){		
		greatestY = 0;
		for(i = 0; i < fields.length; i++){
			if(fields[i].y > greatestY){
				greatestY = fields[i].y;
			}
		}
		return greatestY;
	}
}

module.exports = Assignment;