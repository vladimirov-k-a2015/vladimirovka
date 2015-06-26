$(document).ready(function(){
	$('#nomen').on('click', '.nomen', function() {
		
		/*4й вариант*/
		$(this).toggleClass('highlight');
		$(this).css({'top': '-10 px'});
		
		
		/*
		if($(this).hasClass('highlight')) {
			$(this).animate({'top': '-70px'});
		} else {
			$(this).animate({'top': '0px'});
		}*/
		
		
		
		/*$(this).addClass('highlight');*/
		/*3й вариант
		$(this).css({'backgroundColor': '#252b30',
		             'borderColor': '1px solid #967'});
		*/
		/*2й вариант
		$(this).css('backgroundColor', '#252b30')
			   .css('borderColor', '1px solid #967');
		*/
		/*1й вариант
		$(this).css('backgroundColor', '#252b30');	
		$(this).css('borderColor', '1px solid #967');
		*/
		/*2й вариант
		$(this).find('.comments').show();
		*/
		/*1й вариант
		$(this).find('.comments').css('display', 'block')
		*/
	});
});