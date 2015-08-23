$(document).ready(function(){
	$('p').on('mouseenter', 'p', function(){
		$(this).closest('.details').find('.ytytyty').slideDown();
	});
});