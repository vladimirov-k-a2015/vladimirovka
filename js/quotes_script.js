function ShowDetails () {
	$(this).closest('.details').find('.ytytyty').slideToggle();
}


$(document).ready(function(){
	$('.details').on('mouseenter', 'h2', ShowDetails);
	$('.details').on('mouseleave', 'h2', function(){
		$(this).closest('.details').find('.ytytyty').slideToggle();
	});
});



/*function(){
		$(this).closest('.details').find('.ytytyty').slideDown();
		alert('количество кнопок на странице ' + $('button').length);*/
		
		
	/*	
	$('.details').on('click', 'button', function(){
		$(this).closest('.details').find('.ytytyty').slideToggle();
	});   
	*/		
		
		
		
		/*function(){
		$(this).closest('.details').find('.ytytyty').slideDown();
	});
	
	/*
	$('h2').on('mouseenter', function(){
		$('.details').find('.ytytyty').slideDown();
	});
	*/