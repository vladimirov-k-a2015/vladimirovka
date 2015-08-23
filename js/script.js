$(document).ready(function(){
    	$("button").on("click", function(){
			var tour = $(this).closest('.tour');    /*ввели такую переменную - и ее - в код */
			var text = tour.data('text');			/*var text = $(this).closest('.tour').data('text'); до ввода переменной tour */
			var message = $('<b>Цена >>>>>>>> '+ text + '<<<<<<<<<<< баксов</b>');
			$(tour).append(message);				/*$(this).closest('.tour').append(message);*/
			$(this).remove();
		});
});