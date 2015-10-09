$(document).ready(function() {

	$('.bubble').on('mouseenter', function() {
		$(this).css('transform', 'scale(1.5)');
	});
	$('.bubble').on('mouseleave', function() {
		$(this).css('transform', 'scale(1)');
	});


});