/**
 * http://usejsdoc.org/
 */


//creates new Field object
function Field(size, type, x, y) {
	const FIELD_SIZE_LARGE = "large";
	const FIELD_SIZE_SMALL = "small";
	const FIELD_TYPE_IRRIGATION = "irrigation";
	const FIELD_TYPE_SILO = "silo";
	const FIELD_TYPE_BUILDING = "building";

	//need to specifiy size as either large or small
	this.size = size;
	//need to specify type as irrigation, silo, or building
	this.type = type;
	//The x coordinate will be filled in once played	
	this.x = x;
	//The y coordinate will be filled in once played
	this.y = y;
}

module.exports = Field;