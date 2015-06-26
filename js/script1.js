$(document).ready(function(){
    	$("button").on("click", function(){
			var message = $('<span> 0-7 (THIS TEXT WAS ADDED WITH script.js)</span>');
			$('.usa').append(message);
			$('button').remove();
		});
});