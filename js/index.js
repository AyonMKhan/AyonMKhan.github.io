$(document).ready(function(){
  $("#myCarousel").carousel();
});

// handle links with @href started with '#' only
$(document).on('click', '.nav a[href^="#"]', function(e) {
  //any href links starting with #, that are children of .nav, this distinction is important because there are hrefs with # in the carousel
    // target element id
    var id = $(this).attr('href');

    // target element
    var $id = $(id);
    if ($id.length === 0) {
        return;
    }

    // prevent standard hash navigation (avoid blinking in IE)
    e.preventDefault();

    // top position relative to the document
    var pos = $(id).offset().top;

    // animated top scrolling
    $('body, html').animate({scrollTop: pos});
});
