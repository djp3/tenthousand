function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}


function ui_page_launch(){
	var game_id = getParameterByName('game_id');
	var user_id = getParameterByName('user_id');
	var is_primary = getParameterByName('is_primary');
	if(is_primary === "true"){
		// Start Game 
    	$("button#start_game_button").click(function(){
			game_id
			user_id
			is_first_player
			player_list

			window.open("GamePage.html?game_id="+encodeURIComponent(JSON.stringify(result.data)),"_self");

			return false; //Stop subsequent handling of this event
   	 	});
	}
	else{
    	$("div#start_button_div").hide();
	}
	/*
	var user_data = eval(getParameterByName('user_data'));
	var game_id = user_data.game_id;
	var user_id = user_data.players;
	var user_id = user_data.players;
	*/





	$("h2#lobby_title").text(game_id);
	$("span#player_1_id").text(user_id);
	
}

$(document).ready(ui_page_launch);
