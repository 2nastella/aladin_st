//베스트 셀러 TOP(content_3)

$(function () {
  $.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "세이노의 가르침" },
    headers: { Authorization: "KakaoAK d0f431338eba4b44f08a9fcc6646966d"},
  }).done(function (data) {
    $(".bestseller")
      .eq(0)
      .append('<div class="book_img"><a href="sub.html" target="_blank"><img src=' + data.documents[0].thumbnail + '/></a></div>')
      .append('<div class="book_num">1</div>')
      .append('<div class="book_info"><p class="booktitle"><a href="sub.html" target="_blank">' 
      + data.documents[0].title + '</a></p><p class="author"><a href="sub.html" target="_blank">' 
      + data.documents[0].authors + '</a></p><p class="price">' 
      + data.documents[0].price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + '원</p>')
  });  

  $.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "인지심리학" },
    headers: { Authorization: "KakaoAK d0f431338eba4b44f08a9fcc6646966d"},
  }).done(function (data) {
    $(".bestseller")
      .eq(1)
      .append('<div class="book_img"><a href="sub.html" target="_blank"><img src=' + data.documents[0].thumbnail + '/></a></div>')
      .append('<div class="book_num">2</div>')
      .append('<div class="book_info"><p class="booktitle"><a href="sub.html" target="_blank">' 
      + data.documents[4].title + '</a></p><p class="author"><a href="sub.html" target="_blank">' 
      + data.documents[4].authors + '</a></p><p class="price">' 
      + data.documents[4].price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + '원</p>')
  });  

  $.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "왜 일하는가" },
    headers: { Authorization: "KakaoAK d0f431338eba4b44f08a9fcc6646966d"},
  }).done(function (data) {
    $(".bestseller")
      .eq(2)
      .append('<div class="book_img"><a href="sub.html" target="_blank"><img src=' + data.documents[0].thumbnail + '/></a></div>')
      .append('<div class="book_num">3</div>')
      .append('<div class="book_info"><p class="booktitle"><a href="sub.html" target="_blank">' 
      + data.documents[0].title + '</a></p><p class="author"><a href="sub.html" target="_blank">' 
      + data.documents[0].authors + '</a></p><p class="price">' 
      + data.documents[0].price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + '원</p>')
  });  

  $.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "몰입" },
    headers: { Authorization: "KakaoAK d0f431338eba4b44f08a9fcc6646966d"},
  }).done(function (data) {
    $(".bestseller")
      .eq(3)
      .append('<div class="book_img"><a href="sub.html" target="_blank"><img src=' + data.documents[0].thumbnail + '/></a></div>')
      .append('<div class="book_num">4</div>')
      .append('<div class="book_info"><p class="booktitle"><a href="sub.html" target="_blank">' 
      + data.documents[0].title + '</a></p><p class="author"><a href="sub.html" target="_blank">' 
      + data.documents[0].authors + '</a></p><p class="price">' 
      + data.documents[0].price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + '원</p>')
  });  

  $.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "회복탄력성" },
    headers: { Authorization: "KakaoAK d0f431338eba4b44f08a9fcc6646966d"},
  }).done(function (data) {
    $(".bestseller")
      .eq(4)
      .append('<div class="book_img"><a href="sub.html" target="_blank"><img src=' + data.documents[0].thumbnail + '/></a></div>')
      .append('<div class="book_num">5</div>')
      .append('<div class="book_info"><p class="booktitle"><a href="sub.html" target="_blank">' 
      + data.documents[0].title + '</a></p><p class="author"><a href="sub.html" target="_blank">' 
      + data.documents[0].authors + '</a></p><p class="price">' 
      + data.documents[0].price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + '원</p>')
  });  

  $.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "타이탄의 도구들" },
    headers: { Authorization: "KakaoAK d0f431338eba4b44f08a9fcc6646966d"},
  }).done(function (data) {
    $(".bestseller")
      .eq(5)
      .append('<div class="book_img"><a href="sub.html" target="_blank"><img src=' + data.documents[0].thumbnail + '/></a></div>')
      .append('<div class="book_num">6</div>')
      .append('<div class="book_info"><p class="booktitle"><a href="sub.html" target="_blank">' 
      + data.documents[0].title + '</a></p><p class="author"><a href="sub.html" target="_blank">' 
      + data.documents[0].authors + '</a></p><p class="price">' 
      + data.documents[0].price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + '원</p>')
  });  

  $.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "도둑맞은 집중력" },
    headers: { Authorization: "KakaoAK d0f431338eba4b44f08a9fcc6646966d"},
  }).done(function (data) {
    $(".bestseller")
      .eq(6)
      .append('<div class="book_img"><a href="sub.html" target="_blank"><img src=' + data.documents[0].thumbnail + '/></a></div>')
      .append('<div class="book_num">7</div>')
      .append('<div class="book_info"><p class="booktitle"><a href="sub.html" target="_blank">' 
      + data.documents[0].title + '</a></p><p class="author"><a href="sub.html" target="_blank">' 
      + data.documents[0].authors + '</a></p><p class="price">' 
      + data.documents[0].price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + '원</p>')
  });  

  $.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "프로젝트 헤일메리" },
    headers: { Authorization: "KakaoAK d0f431338eba4b44f08a9fcc6646966d"},
  }).done(function (data) {
    $(".bestseller")
      .eq(7)
      .append('<div class="book_img"><a href="sub.html" target="_blank"><img src=' + data.documents[0].thumbnail + '/></a></div>')
      .append('<div class="book_num">8</div>')
      .append('<div class="book_info"><p class="booktitle"><a href="sub.html" target="_blank">' 
      + data.documents[0].title + '</a></p><p class="author"><a href="sub.html" target="_blank">' 
      + data.documents[0].authors + '</a></p><p class="price">' 
      + data.documents[0].price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + '원</p>')
  });  

  $.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "사장학개론" },
    headers: { Authorization: "KakaoAK d0f431338eba4b44f08a9fcc6646966d"},
  }).done(function (data) {
    $(".bestseller")
      .eq(8)
      .append('<div class="book_img"><a href="sub.html" target="_blank"><img src=' + data.documents[0].thumbnail + '/></a></div>')
      .append('<div class="book_num">9</div>')
      .append('<div class="book_info"><p class="booktitle"><a href="sub.html" target="_blank">' 
      + data.documents[0].title + '</a></p><p class="author"><a href="sub.html" target="_blank">' 
      + data.documents[0].authors + '</a></p><p class="price">' 
      + data.documents[0].price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + '원</p>')
  }); 
});
