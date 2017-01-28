$(window).scroll(function() {

  $('.selfie').each(function(){
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
    if (imagePos < topOfWindow+650) {
      $(this).addClass("tossing");
    }
  });

  $('.timeline-panel-left').each(function(){
    var imagePos = $(this).offset().top;

    var topOfWindow = $(window).scrollTop();
    if (imagePos < topOfWindow+500) {
      $(this).addClass("slideLeft");
    }
  });

  $('.timeline-panel-right').each(function(){
    var imagePos = $(this).offset().top;

    var topOfWindow = $(window).scrollTop();
    if (imagePos < topOfWindow+500) {
      $(this).addClass("slideRight");
    }
  });
});


// $('#animatedElement').click(function() {
// 	$(this).addClass("slideUp");
// });


$(document).ready(function(){
  $(".fa-chevron-down").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    }
  });


  $(".nav-link").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    }
  });
});

// navbar shows after reach about section
$(document).ready(function(){
  $(".navbar").hide();
  $(function () {
    $(window).scroll(function () {
      if ($(this).scrollTop() > 720) {
        $('.navbar').fadeIn();
      } else {
        $('.navbar').fadeOut();
      }
    });
  });
});
