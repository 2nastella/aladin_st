//추천 마법사의 선택(content_4)
$(function () {
  $.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "처세", size:10},
    headers: { Authorization: "KakaoAK d0f431338eba4b44f08a9fcc6646966d" },
  }).done(function (data) {
    let divs = $('.bookinfo_wrap4 > .bookinfo');

    for(let i=0; i<divs.length; i++){

      $(divs).eq(i).append("<img src='"+data.documents[i].thumbnail+"'/>");
      $(divs).eq(i).append('<p class="booktitle">' + data.documents[i].title + "</p>")
      $(divs).eq(i).append('<p class="author">' + data.documents[i].authors + "</p>");
    }
  });
});


// 추천 마법사의 선택(content_4)

$(function () {
  function prev4() {
    $(".bookinfo_wrap4 > div:last").prependTo(".bookinfo_wrap4");
    $(".bookinfo_wrap4").css("margin-left", -216);
    $(".bookinfo_wrap4").stop().animate({ marginLeft: 0 });
  }

  function next4() {
    $(".bookinfo_wrap4").stop().animate({ marginLeft: -216 }, 
        function () {
        $(".bookinfo_wrap4 div:first").appendTo(".bookinfo_wrap4");
        $(".bookinfo_wrap4").css({ marginLeft: 0 }, 1000);
      });
  }

  $(".btn_prev4").click(function () {prev4();});
  $(".btn_next4").click(function () {next4();});
});