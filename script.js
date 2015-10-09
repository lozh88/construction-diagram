$(document).ready(function() {
	var bubble = $('.bubble');
	
	function runIt() {
		bubble.animate({top: '+=20px'}, 1000);
		bubble.animate({top: '-=20px'}, 1000, runIt);
	}

	runIt();
});