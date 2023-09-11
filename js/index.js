new WOW().init();
$(document).ready(function () {
	setTimeout(function () {
		$('.loading-wrapper').fadeOut(500);
	}, 2000);
});

$(window).scroll(function () {
	if ($(this).scrollTop() > 700) {
		$('#headerNav').removeClass('display-none');
	} else {
		$('#headerNav').addClass('display-none');
	}
});
