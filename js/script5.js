$(document).ready(function(){
    	$(".usa").on("click", function(){
			var message = $('<span> 0-7 (THIS TEXT WAS ADDED WITH script.js)</span>');
			$(this).append(message);
			$(this).find('button').remove();
		});
});