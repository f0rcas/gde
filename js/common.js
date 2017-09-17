
$("document").ready(function($){

	var nav = $('.nav__bottom');

	$(window).scroll(function () {
		if ($(this).scrollTop() > 70) {
			nav.addClass("f-nav");
		} else {
			nav.removeClass("f-nav");
		}
	});

});

$("document").ready(function($) {
  $('.other-stock__block_item').matchHeight();
});