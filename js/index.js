new WOW().init();
$(document).ready(function () {
	setTimeout(function () {
		$('.loading-wrapper').fadeOut(500);
	}, 100);
});

$(window).scroll(function () {
	if ($(this).scrollTop() > 700) {
		$('#headerNav').removeClass('display-none');
	} else {
		$('#headerNav').addClass('display-none');
	}
	// 當滾動到about時，about才開始跑動化
	if ($(this).scrollTop() > 900) {
		$('.about-title').addClass('about-title-animation');
		$('.about-content').addClass('about-content-animation');
	}
});
