//메인 상단 슬라이드

$(function () {
  let index = 0;
  let $slideImg = $(".slide_img_wrap > div");  
  let $slideBtn = $(".slider_btn");

  $slideBtn.eq(0).css({background: "#5cc3f3"});
  $slideBtn.click(function() {
    let index = $(this).index();
    
    $slideBtn.eq(index).css({background: "#5cc3f3"});
    $slideBtn.eq(index).siblings().css({background: "#444"});

    $slideImg.eq(index).fadeIn();
    $slideImg.eq(index).siblings().hide();
  });
});


// 슬라이드 메뉴 제어

$(function () {
  let nav = $(".slide_nav_wrap");
  $(nav).hide(); 
  $('.menu_icon').mouseenter(function () {
    $(nav).stop().fadeIn(100);
  });

  $(".slide_nav").mouseleave(function () {
    $(nav).stop().fadeOut(100);
  });
});


// nav 닫기 버튼 제어

$(function () {
  let nav = $(".slide_nav_wrap");
  $(".close_btn").click(function () {
    $(nav).stop().fadeOut(100);
  });
});


// ad 스몰 배너 제어(좌측)

$(function () {
  let i = 0;  
  let leftadBanner = $(".left_book > div");
  let bannerLen = $(".left_book > div").length;  
  let $prev_btn = $(".ad_left_btn");
  let $next_btn = $(".ad_right_btn");

  $prev_btn.click(function () {
    i--;
    if (i < 0) {i = bannerLen-1;}
    changeleftAd(i)
  });

  $next_btn.click(function () {
    i++;
    if (i >= bannerLen) {i = 0;}
    changeleftAd(i);    
  });

  function changeleftAd(index) {        
    leftadBanner.hide();
    leftadBanner.eq(index).show();    
  }
});




// ad 미들 배너 제어

$(function () {
  let i = 0;  
  let AdBanner = $(".ad_wrap > div");
  let bannerLen = $(".ad_wrap > div").length;  
  let $prev_btn = $(".btn_prev2b");
  let $next_btn = $(".btn_next2b"); 
  let spanText = $(".spantext");

  $prev_btn.click(function () {
    i--;
    if (i < 0) {i = bannerLen-1;}
    changeAd(i)
  });

  $next_btn.click(function () {
    i++;
    if (i >= bannerLen) {i = 0;}
    changeAd(i);    
  });

  function changeAd(index) {        
    AdBanner.hide();
    AdBanner.eq(index).show();
    spanText.text((index+1)+"/"+bannerLen);
  }
});


/*=============================================================

1. 선택된 li 메뉴만 강조(siblings로 형제 요소 li의 CSS 초기화)
2. 에디터 탭 메뉴의 인덱스 번호에 따라 뷰 페이지 변경

=============================================================*/

$(function () {
  let $editorTap = $(".editor_tap li");
  let $pageView = $(".selectBook_middle > div"); //선택자: select_middle_wrap
  let $editorBtn = $(".btn_wrap > div");

  $editorTap.on("mouseover", function () {
    let i = $(this).index(); // 탭 메뉴의 인덱스 번호를 받아서 해당 페이지를 제외한 나머지에 hidden 요소 추가
    
    $(this).addClass("on"); // 탭 메뉴의 테두리 스타일 변경
    $(this).siblings().removeClass(); // 나머지 요소는 회색 버튼으로 남김

    $pageView.eq(i).removeClass("hidden");
    $pageView.eq(i).siblings().addClass("hidden");

    $editorBtn.eq(i).removeClass("hidden");
    $editorBtn.eq(i).siblings().addClass("hidden");
  });
});


/*=============================================================

1. 위의 함수에서 탭 메뉴에 따라 이전/다음 버튼도 변경됨
2. btn_prev2a 버튼 : X축 -760씩 이동
3. btn_next2a 버튼 : X축 +760씩 이동

=============================================================*/


$(function () {
  let $prev_1_btn = $(".editorchoice_btn > .btn_prev2a");
  let $prev_2_btn = $(".ebookchoice_btn > .btn_prev2a");
  let $prev_3_btn = $(".foreignchoice_btn > .btn_prev2a");
  let $prev_4_btn = $(".goodschoice_btn > .btn_prev2a");

  let $next_1_btn = $(".editorchoice_btn > .btn_next2a");
  let $next_2_btn = $(".ebookchoice_btn > .btn_next2a");
  let $next_3_btn = $(".foreignchoice_btn > .btn_next2a");
  let $next_4_btn = $(".goodschoice_btn > .btn_next2a");

  let editor = $(".editorchoice");
  let ebook = $(".ebookchoice");
  let foreign = $(".foreignchoice");
  let goods = $(".goodschoice");

  function prev(className) {
    $(className).children("div:last").prependTo(className);
    $(className).css({ marginLeft: -750 });
    $(className).stop().animate({ marginLeft: 0 });
  }

  function next(className) {
    $(className).stop().animate({ marginLeft: -750 }, function () {
      $(this).children("div:first").appendTo(this);
      $(this).css({ marginLeft: 0 });
    });
  }

  $prev_1_btn.click(function () {
    prev(editor);
  });

  $next_1_btn.click(function () {
    next(editor);
  });

  $prev_2_btn.click(function () {
    prev(ebook);
  });

  $next_2_btn.click(function () {
    next(ebook);
  });

  $prev_3_btn.click(function () {
    prev(foreign);
  });

  $next_3_btn.click(function () {
    next(foreign);
  });

  $prev_4_btn.click(function () {
    prev(goods);
  });

  $next_4_btn.click(function () {
    next(goods);
  });
});

/*============================================

1. ad 풀배너 총 4개 / fadeIn으로 하고 싶다
2. 호버 액션으로 버튼 제어
3. 누를때마다 인덱스 번호에 맞게 컬러 변경
4. 배너에 마우스 올리면 버튼 나타남

============================================*/


$(function () {
  $("#full_ban").hover(function () {
    $(".full_ban_btn").removeClass("hidden");
  }, function () {
    $(".full_ban_btn").addClass("hidden");
  });
});


/*============================================

1. 풀 배너 4개 
2. 100% div 색상 버튼 누를때 같이 변경되도록 코드 작성
3. 이미지도 함께 변경되도록 작성

============================================*/

$(function () {
  let i = 0;
  let bground = $("#full_ban");
  let fullBanner = $(".full_ban_wrap .full_ban_box");
  let bannerLen = $(".full_ban_box").length;
  let bgcolor = ["#CCF1F7", "#F7D3CC", "#f7e0cc", "#CCF7CE"];
  let $prev_btn = $(".full_btn_prev");
  let $next_btn = $(".full_btn_next");
  bground.css({
    backgroundColor: bgcolor[0]
  });

  $prev_btn.click(function () {
    i--;
    if (i < 0) {
      i = bannerLen - 1;
    }
    changeBanner(i);
  });

  $next_btn.click(function () {
    i++;
    if (i >= bannerLen) {
      i = 0;
    }
    changeBanner(i);
  });

  function changeBanner(index) {
    bground.css({
      backgroundColor: bgcolor[index]
    });
    fullBanner.hide();
    fullBanner.eq(index).fadeIn(200);
    $(".full_ban_btn").removeClass("hidden");
  }
});