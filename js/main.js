$(document).ready(function() {


  // If slider exists on this page
  if ( $('.flexslider').length > 0 ) {

      // Activate slider
      $('.flexslider').flexslider({
        animation: "slide",
        animationLoop: false,
        animationSpeed: 800,
        slideshowSpeed: 5000,
        directionNav: true
      });
  }
});

$(window).scroll(function (event) {
    var nav = $('.Nav');
        navHeight = nav.height(),
        position = $(window).scrollTop();

    if (position > navHeight) {
        nav.addClass('Nav--dark');
    } else {
        nav.removeClass('Nav--dark');
    }
});
