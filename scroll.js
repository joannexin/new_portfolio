$(window).scroll(function() {
	$('#selfie').each(function(){
	var imagePos = $(this).offset().top;

	var topOfWindow = $(window).scrollTop();
		if (imagePos < topOfWindow+400) {
			$(this).addClass("fadeIn");
		}
	});

  $('#aboutme').each(function(){
	var imagePos = $(this).offset().top;

	var topOfWindow = $(window).scrollTop();
		if (imagePos < topOfWindow+400) {
			$(this).addClass("stretchLeft");
		}
	});

  $('.btn-custom').each(function(){
	var imagePos = $(this).offset().top;

	var topOfWindow = $(window).scrollTop();
		if (imagePos < topOfWindow+400) {
			$(this).addClass("tossing");
		}
	});

  $('.card-img-top').each(function(){
	var imagePos = $(this).offset().top;

	var topOfWindow = $(window).scrollTop();
		if (imagePos < topOfWindow+400) {
			$(this).addClass("expandOpen");
		}
	});
});

$('#animatedElement').click(function() {
	$(this).addClass("slideUp");
});
