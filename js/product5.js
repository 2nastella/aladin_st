$(function () {
  $.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "각각의 계절" },
    headers: { Authorization: "KakaoAK d0f431338eba4b44f08a9fcc6646966d" },
  }).done(function (data) {
    $(".bookinfo_wrap > .bookinfo")
      .eq(0)
      .append("<img src='" + data.documents[0].thumbnail + "'/>")
      .append('<p class="booktitle">' + data.documents[0].title + "</p>")
      .append('<p class="author">' + data.documents[0].authors + "</p>");
  });

  $.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "방구석 미술관" },
    headers: { Authorization: "KakaoAK d0f431338eba4b44f08a9fcc6646966d" },
  }).done(function (data) {
    $(".bookinfo_wrap > .bookinfo")
      .eq(1)
      .append("<img src='" + data.documents[0].thumbnail + "'/>")
      .append('<p class="booktitle">' + data.documents[0].title + "</p>")
      .append('<p class="author">' + data.documents[0].authors + "</p>");
  });

  $.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "처음 읽는 음식의 세계사" },
    headers: { Authorization: "KakaoAK d0f431338eba4b44f08a9fcc6646966d" },
  }).done(function (data) {
    $(".bookinfo_wrap > .bookinfo")
      .eq(2)
      .append("<img src='" + data.documents[0].thumbnail + "'/>")
      .append('<p class="booktitle">' + data.documents[0].title + "</p>")
      .append('<p class="author">' + data.documents[0].authors + "</p>");
  });

  $.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "공간의 미래" },
    headers: { Authorization: "KakaoAK d0f431338eba4b44f08a9fcc6646966d" },
  }).done(function (data) {
    $(".bookinfo_wrap > .bookinfo")
      .eq(3)
      .append("<img src='" + data.documents[0].thumbnail + "'/>")
      .append('<p class="booktitle">' + data.documents[0].title + "</p>")
      .append('<p class="author">' + data.documents[0].authors + "</p>");
  });

  $.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "바보의 세계" },
    headers: { Authorization: "KakaoAK d0f431338eba4b44f08a9fcc6646966d" },
  }).done(function (data) {
    $(".bookinfo_wrap > .bookinfo")
      .eq(4)
      .append("<img src='" + data.documents[0].thumbnail + "'/>")
      .append('<p class="booktitle">' + data.documents[0].title + "</p>")
      .append('<p class="author">' + data.documents[0].authors + "</p>");
  });

  $.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "나의 봄날인 너에게" },
    headers: { Authorization: "KakaoAK d0f431338eba4b44f08a9fcc6646966d" },
  }).done(function (data) {
    $(".bookinfo_wrap > .bookinfo")
      .eq(5)
      .append("<img src='" + data.documents[0].thumbnail + "'/>")
      .append('<p class="booktitle">' + data.documents[0].title + "</p>")
      .append('<p class="author">' + data.documents[0].authors + "</p>");
  });

  $.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "별일은 없고요?" },
    headers: { Authorization: "KakaoAK d0f431338eba4b44f08a9fcc6646966d" },
  }).done(function (data) {
    $(".bookinfo_wrap > .bookinfo")
      .eq(6)
      .append("<img src='" + data.documents[0].thumbnail + "'/>")
      .append('<p class="booktitle">' + data.documents[0].title + "</p>")
      .append('<p class="author">' + data.documents[0].authors + "</p>");
  });

  $.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "등대" },
    headers: { Authorization: "KakaoAK d0f431338eba4b44f08a9fcc6646966d" },
  }).done(function (data) {
    $(".bookinfo_wrap > .bookinfo")
      .eq(7)
      .append("<img src='" + data.documents[0].thumbnail + "'/>")
      .append('<p class="booktitle">' + data.documents[0].title + "</p>")
      .append('<p class="author">' + data.documents[0].authors + "</p>");
  });

  $.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "회복탄력성" },
    headers: { Authorization: "KakaoAK d0f431338eba4b44f08a9fcc6646966d" },
  }).done(function (data) {
    $(".bookinfo_wrap > .bookinfo")
      .eq(8)
      .append("<img src='" + data.documents[0].thumbnail + "'/>")
      .append('<p class="booktitle">' + data.documents[0].title + "</p>")
      .append('<p class="author">' + data.documents[0].authors + "</p>");
  });

  $.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "원씽" },
    headers: { Authorization: "KakaoAK d0f431338eba4b44f08a9fcc6646966d" },
  }).done(function (data) {
    $(".bookinfo_wrap > .bookinfo")
      .eq(9)
      .append("<img src='" + data.documents[0].thumbnail + "'/>")
      .append('<p class="booktitle">' + data.documents[0].title + "</p>")
      .append('<p class="author">' + data.documents[0].authors + "</p>");
  });
});


//content 5
$(function () {
$.ajax({
  method: "GET",
  url: "https://dapi.kakao.com/v3/search/book?target=title",
  data: { query: "성공", size:6},
  headers: { Authorization: "KakaoAK d0f431338eba4b44f08a9fcc6646966d" },
}).done(function (data) {

  //왼쪽 상자
  let divsLeft = $('.itbook_lt');  
  for(let i=0; i<divsLeft.length; i++){
    $(divsLeft).eq(i).append("<img src='"+data.documents[i].thumbnail+"'/>");
  }

  //오른쪽 상자
  let divsRight = $('.itbook_rt');
  let divs = divsRight.find('div:first');
  let divs2 = divsRight.find('.itbook_text');

  for(let i=0; i<divsRight.length; i++){
    let str=data.documents[i].contents;
    let str2=str.substring(0, 250);

    $(divs).eq(i).append('<p class="itbook_title">' + data.documents[i].title + "</p>")
    $(divs2).eq(i).append(str2 + '....[more]');
  }
});
});