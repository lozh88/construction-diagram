$(document).ready(function() {
	
	var mover = $('.mover');
	var shaker = $('.shaker')

	function runIt() {
		mover.animate({top: '+=20px'}, 1000);
		mover.animate({top: '-=20px'}, 1000);
		shaker.animate({top: '-=10px'}, 1125);
		shaker.animate({top: '+=10px'}, 1125, runIt);
	}

	// $('.bubble').on("mouseenter", function() {
	// 	$('.bubble').css("background-color": "red")
	// 	});
	// })

	runIt();
});
	

