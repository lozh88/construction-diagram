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
		$('.tell-me').text("Cavity walls consist of an outer brick or block leaf or skin separated from an inner brick or block leaf or skin by an air space called a cavity. These walls have better thermal insulation and weather resistance properties than a comparable solid brick or block wall and therefore are in general use for the enclosing walls of domestic buildings.");
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
		$('.tell-me').text("The slab that we're talking about is the cast or insitu concrete you walk on in commerial buildings.");
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

	$('#about').on('click', function() {
		var $about = "Welcome!";
		var $intro = "You made it! Here you can explore the nitty gritty of construction, the innards of domestic buildings and build your repetoir of fun facts."
		$('#title').text($about);
		$('.tell-me').text($intro);
	})
});