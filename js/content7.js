//이달의 주목 도서(content_7)

$(function () {
  function prev7() {
    $(".bookinfo_wrap > div:last").prependTo(".bookinfo_wrap");
    $(".bookinfo_wrap").css("margin-left", -216);
    $(".bookinfo_wrap").stop().animate({ marginLeft: 0 });
  }

  function next7() {
    $(".bookinfo_wrap").stop().animate({ marginLeft: -216 }, 
        function () {
        $(".bookinfo_wrap div:first").appendTo(".bookinfo_wrap");
        $(".bookinfo_wrap").css({ marginLeft: 0 }, 1000);
      });
  }

  $(".btn_prev7").click(function () {prev7();});
  $(".btn_next7").click(function () {next7();});
});
