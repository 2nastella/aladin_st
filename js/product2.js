//content2

$(function () {
  $.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "성공", size:36},
    headers: { Authorization: "KakaoAK d0f431338eba4b44f08a9fcc6646966d" },
  }).done(function (data) {
    let divs = $('.e1 > div');

    for(let i=0; i<divs.length; i++){
      $(divs).eq(i).append("<img src='"+data.documents[i].thumbnail+"'/>");
      $(divs).eq(i).append('<p class="booktitle">' + data.documents[i].title + "</p>")
      $(divs).eq(i).append('<p class="author">' + data.documents[i].authors + "</p>");
    }
  });

  $.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "마케팅", size:36},
    headers: { Authorization: "KakaoAK d0f431338eba4b44f08a9fcc6646966d" },
  }).done(function (data) {
    let divs = $('.e2 > div');

    for(let i=0; i<divs.length; i++){
      $(divs).eq(i).append("<img src='"+data.documents[i].thumbnail+"'/>");
      $(divs).eq(i).append('<p class="booktitle">' + data.documents[i].title + "</p>")
      $(divs).eq(i).append('<p class="author">' + data.documents[i].authors + "</p>");
    }
  });

  $.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "브랜딩", size:36},
    headers: { Authorization: "KakaoAK d0f431338eba4b44f08a9fcc6646966d" },
  }).done(function (data) {
    let divs = $('.e3 > div');

    for(let i=0; i<divs.length; i++){
      $(divs).eq(i).append("<img src='"+data.documents[i].thumbnail+"'/>");
      $(divs).eq(i).append('<p class="booktitle">' + data.documents[i].title + "</p>")
      $(divs).eq(i).append('<p class="author">' + data.documents[i].authors + "</p>");
    }
  });

  $.ajax({
    url: "./json/part_slidegoods.json",
    dataType: "json",
    success: function (data) {
      let divs = $('.e4 > div');      
      for(var i in data){
        $(divs).eq(i).append("<img src='"+data[i].img+"'>");
        $(divs).eq(i).append('<p class="booktitle">' + data[i].title + "</p>")
        $(divs).eq(i).append('<p class="author">' + data[i].exp + "</p>");
      }
    }
  });
});
