//메인 두번째 슬라이드
$(function () {
  $.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: {
      query: "당신은 생각보다 강하다"
    },
    headers: {
      Authorization: "KakaoAK d0f431338eba4b44f08a9fcc6646966d"
    },
  }).done(function (data) {
    $(".bookSlide_1 > div")
      .eq(0)
      .append("<img src='" + data.documents[0].thumbnail + "'/>")
      .append('<p class="booktitle">' + data.documents[0].title + "</p>")
      .append('<p class="author">' + data.documents[0].authors + "</p>");
  });

  $.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: {
      query: "몰입의 완성"
    },
    headers: {
      Authorization: "KakaoAK d0f431338eba4b44f08a9fcc6646966d"
    },
  }).done(function (data) {
    $(".bookSlide_1 > div")
      .eq(1)
      .append("<img src='" + data.documents[0].thumbnail + "'/>")
      .append('<p class="booktitle">' + data.documents[0].title + "</p>")
      .append('<p class="author">' + data.documents[0].authors + "</p>");
  });

  $.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: {
      query: "당신의 매력을 브랜딩하라"
    },
    headers: {
      Authorization: "KakaoAK d0f431338eba4b44f08a9fcc6646966d"
    },
  }).done(function (data) {
    $(".bookSlide_1 > div")
      .eq(2)
      .append("<img src='" + data.documents[0].thumbnail + "'/>")
      .append('<p class="booktitle">' + data.documents[0].title + "</p>")
      .append('<p class="author">' + data.documents[0].authors + "</p>");
  });

  $.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: {
      query: "매일을 헤엄치는 법"
    },
    headers: {
      Authorization: "KakaoAK d0f431338eba4b44f08a9fcc6646966d"
    },
  }).done(function (data) {
    $(".bookSlide_1 > div")
      .eq(3)
      .append("<img src='" + data.documents[0].thumbnail + "'/>")
      .append('<p class="booktitle">' + data.documents[0].title + "</p>")
      .append('<p class="author">' + data.documents[0].authors + "</p>");
  });
});




//bookSlide_1 의 두 번째 페이지부터
$(function () {
  $.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: {
      query: "심리학",
      size: 50
    },
    headers: {
      Authorization: "KakaoAK d0f431338eba4b44f08a9fcc6646966d"
    },
  }).done(function (data) {
    let divs = $('.bookSlide_1 > div');

    for (let i = 4; i < divs.length; i++) {

      $(divs).eq(i).append("<img src='" + data.documents[i].thumbnail + "'/>");
      $(divs).eq(i).append('<p class="booktitle">' + data.documents[i].title + "</p>")
      $(divs).eq(i).append('<p class="author">' + data.documents[i].authors + "</p>");
    }
  });
});