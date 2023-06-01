$(function () {
  $(".topbanner_wrap span").click(function () {
    $("#topbanner").slideUp();
    $("#topbanner").stop().hide();
  });
});


$(function() {
  $(window).scroll(function() {
    if($(this).scrollTop()>500) {
      $("#top_btn").stop().fadeIn("fast");
    }
    else {
      $("#top_btn").stop().fadeOut("fast");
    }
  });

  $("#top_btn").click(function() {
    $("html, body").stop().animate({scrollTop:0},400);
    return false;
  });
});


