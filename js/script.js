$(document).ready(function(){
    	$("button").on("click", function(){
			var tour = $(this).closest('.tour');    /*����� ����� ���������� - � �� - � ��� */
			var text = tour.data('text');			/*var text = $(this).closest('.tour').data('text'); �� ����� ���������� tour */
			var message = $('<b>���� >>>>>>>> '+ text + '<<<<<<<<<<< ������</b>');
			$(tour).append(message);				/*$(this).closest('.tour').append(message);*/
			$(this).remove();
		});
});