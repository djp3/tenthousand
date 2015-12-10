function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}


function ui_page_launch(){

	var game_id = getParameterByName('game_id');
	var user_id = getParameterByName('user_id');


	$("h2#lobby_title").text(game_id);
	$("span#player_1_id").text(user_id);
	
}

$(document).ready(ui_page_launch);
