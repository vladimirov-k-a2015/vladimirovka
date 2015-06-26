$(document).ready(function(){
	$('#nomen').on('click', '.nomen', function() {
		$(this).toggleClass('highlight');
		if($(this).hasClass('highlight')) {
			$(this).animate({'margin-top': '-10px', 'opacity': '1'}, 'slow');
		} else {
			$(this).animate({'margin-top': '0px', 'opacity': '0.2'}, 'slow');
		} 
	});
});

/*

.nomen{
	   transition : top 0.6s
}


.highlight 
{
 background-color : #FFFF00; 
       margin-top : -10px;
}
  
*/