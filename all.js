$(document).ready(function() {
	$('.dropdown').click(function(event) {
		event.preventDefault();
		$('.dropdown').toggleClass('active');
		$('.dropdown-open').slideToggle();
	});

	$('.top a').click(function(event) {
		event.preventDefault();
		$('html,body').animate({
			scrollTop: 0
		}, 700);
	});
});