$(document).ready(function() {

	$('.bubble').on('mouseenter', function() {
		$(this).css('transform', 'scale(1.5)');
	});
	$('.bubble').on('mouseleave', function() {
		$(this).css('transform', 'scale(1)');
	});

	$('#div-one').on('click', function() {
		var $img = $('#div-one').css(["background-image"]);
		$('.main-window').css($img);
		$('#title').text("Domestic Wall Envelope");
		$('.tell-me').text("A wall is fascinating. Did you know an average external wall in the UK is 40cm thick?");
	})

	$('#div-two').on('click', function() {
		var $img = $('#div-two').css(["background-image"]);
		$('.main-window').css($img);
		$('#title').text("Pavement Envelope");
		$('.tell-me').text("Funny thing... the pavement is actually the road, not the walk way.");
	})

	$('#div-three').on('click', function() {
		var $img = $('#div-three').css(["background-image"]);
		$('.main-window').css($img);
		$('#title').text("Slab Envelope");
		$('.tell-me').text("The slab that we're talking about is the cast or insitu concrete you walk on in commerial buildings");
	})

	$('#div-four').on('click', function() {
		var $img = $('#div-four').css(["background-image"]);
		$('.main-window').css($img);
		$('#title').text("Roof Truss");
		$('.tell-me').text("Ok, so this isn't strictly an envelope but it is very interesting...promise");
	})

	$('#div-five').on('click', function() {
		var $img = $('#div-five').css(["background-image"]);
		$('.main-window').css($img);
		$('#title').text("Undefined");
		$('.tell-me').text("Undefined");
	})

	// $('.play')on('click', function() {
	// 	$('#pop-up').addClass('popped');
	// 	});
	// })
});