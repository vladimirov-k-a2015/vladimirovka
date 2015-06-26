$(document).ready(function(){
	$('.cinema').on('click', '.expand',
		function(event){
			event.preventDefault();
			$(this).closest('.cinema')
				   .find('.comments')
				   .fadeToggle();
		}
	);
});