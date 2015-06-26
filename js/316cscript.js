$(document).ready(function(){	
	$('#filters').on('click', '.good-filter', function(){
		$('.tour').removeClass('highlight');
		$('.tour').filter('.good').addClass('highlight');	
	});
	
	$('#filters').on('click', '.bad-filter', function(){
		$('.tour').removeClass('highlight');
		$('.tour').filter('.bad').addClass('highlight');
	});
});

