// $(window).scroll(function(){if($(".navbar").offset().top>50){$(".navbar-fixed-top").addClass("top-nav-collapse");}else{$(".navbar-fixed-top").removeClass("top-nav-collapse");}});$(function(){$(document).on('click','a.page-scroll',function(event){var $anchor=$(this);$('html, body').stop().animate({scrollTop:$($anchor.attr('href')).offset().top},1500,'easeInOutExpo');event.preventDefault();});});

$(window).on("scroll", function () {
  var $navbar = $(".navbar");

  if ($navbar.length) {
    if ($navbar.offset().top > 50) {
      $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
      $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
  }
});

$(function () {
  $(document).on("click", "a.page-scroll", function (event) {
    var targetSelector = $(this).attr("href");

    // Invalid href protection
    if (
      targetSelector &&
      targetSelector !== "#" &&
      targetSelector.startsWith("#") &&
      $(targetSelector).length
    ) {
      $("html, body")
        .stop()
        .animate(
          {
            scrollTop: $(targetSelector).offset().top,
          },
          1500,
          "easeInOutExpo",
        );
    }

    event.preventDefault();
  });
});
