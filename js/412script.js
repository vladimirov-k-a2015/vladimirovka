$(document).ready(function(){
	$('.book').on('keyup', '.quantity', function(){
		var price = +$(this).closest('.book').data('price');
		var quantity = +$(this).val();
		$('#total').text(price * quantity);	
	});
	
});