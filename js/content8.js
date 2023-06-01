// 알라딘 굿즈 증정(content_8)

function slide() {
  $(".goods_wrap")
    .stop()
    .animate({ marginLeft: -1080 }, function () {
      $(".goods_wrap div:first").appendTo(".goods_wrap");
      $(".goods_wrap").css({ marginLeft: 0 });
    });
}

setInterval(slide, 5000);

$(function () {
  function prev() {
    $(".goods_wrap > div:last").prependTo(".goods_wrap");
    $(".goods_wrap").css("margin-left", -1080);
    $(".goods_wrap").stop().animate({ marginLeft: 0 }, 1000);
  }

  function next() {
    $(".goods_wrap")
      .stop()
      .animate({ marginLeft: -1080 }, function () {
        $(".goods_wrap div:first").appendTo(".goods_wrap");
        $(".goods_wrap").css({ marginLeft: 0 });
      });
  }

  $(".btn_prev8").click(function () {
    prev();
  });

  $(".btn_next8").click(function () {
    next();
  });
});
