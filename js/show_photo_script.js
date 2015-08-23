function ShowDetails () {
	$(this).closest('.horizontal_list_ul').find('.ytytyty').slideDown();
}



$(document).ready(function(){
	$('.horizontal_list_ul').on('click', '.nomen_name', function(){
		$(this).closest('.nomen_name').find('.ytytyty').slideToggle();
	});
	
    $('.horizontal_list_ul').on('mouseleave', '.nomen_name', function(){
		$(this).closest('.nomen_name').find('.ytytyty').slideUp();
	});
	
});

