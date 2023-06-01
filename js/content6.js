// 알라딘이 만든 굿즈(content_6)

$(function () {
  function prev6() {
    $(".make_goods_wrap > div:last").prependTo(".make_goods_wrap");
    $(".make_goods_wrap").css("margin-left", -1080);
    $(".make_goods_wrap").stop().animate({ marginLeft: 0 });
  }

  function next6() {
    $(".make_goods_wrap").stop().animate({ marginLeft: -1080 }, 
      function () {
        $(".make_goods_wrap div:first").appendTo(".make_goods_wrap");
        $(".make_goods_wrap").css({ marginLeft: 0 });
      });
  }

  $(".btn_prev6").click(function () {prev6();});
  $(".btn_next6").click(function () {next6();});
});