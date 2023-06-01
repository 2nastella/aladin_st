/* 책 표지 180도 */
$(function () {
  let isRotated = false;
  $(".book").click(function () {
    if (isRotated) {
      $(this).css("transform", "rotateY(35deg)");
      isRotated = false;
    } else {
      $(this).css("transform", "rotateY(180deg)");
      isRotated = true;
    }
  });

  $(".book").hover(
    function () {
      if (!isRotated) {
        $(this).css("transform", "rotateY(35deg)");
      }
    },
    function () {
      if (!isRotated) {
        $(this).css("transform", "rotateY(0deg)");
      }
    }
  );
});



/* 책 가격 계산 */

$(function() {
  let valnum = $(".valnum"); // 밸류 초깃값
  let piece = valnum.val(); //수량
  let bookPrice = 15300; //책 가격  

  // 플러스 버튼 클릭 시
  $(".btn_plus").click(function() {
    piece++;
    total();
  });

  // 마이너스 버튼 클릭 시
  $(".btn_minus").click(function() {
    if (piece > 1) {
      piece--;
      total();
    }
  });

  // 가격 합계
  function total() {
    let totalPrice = piece * bookPrice; //수량 * 책 가격
    $(".valnum").val(piece);
    $(".big_price").text(totalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + '원');
  }
});


/* 스크롤 내리면 상단에 숨겨졌던 박스 나타나게 하기*/

$(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 800) {
      $("#sub_contents_top").stop().fadeIn("fast");
    } else {
      $("#sub_contents_top").stop().hide();
    }
  });
});


/*메모장으로 sub 텍스트 가져오기*/


//내용(더 보기) =================================================
$(function () {   
  let $exp = $(".sub_4_exp");  
  $.get("./sub_txt/book_info_jump_01.txt", function (data) {
    $exp.eq(0).html(data);   
    $(".btn_up").hide();
    $('.sub_4_container:first-child p').hide();
    $('.sub_4_container:first-child p:first').show();

    $(".btn_down").click(function(){
      $(this).hide();
      $(".btn_up").show();
      $('.sub_4_container:first-child p').show();      
    });

    $(".btn_up").click(function(){
      $(this).hide();
      $(".btn_down").show();
      $('.sub_4_container:first-child p').hide();
      $('.sub_4_container:first-child p:first').show();   
    });
  });
});


//목차(더 보기) =================================================

$(function () {
  let $exp = $(".sub_4_exp");
  $.get("./sub_txt/book_info_jump_02.txt", function (data) {
    $exp.eq(1).html(data);
    $(".btn_up1").hide();
    $(".book_index").slice(15, 20).hide();

    $(".btn_down1").click(function(){
      $(this).hide();
      $(".btn_up1").show();
      $(".book_index").slice(15, 20).show();
      $(".sub_4_container:nth-child(2)").css({"height": "auto"}); 
    });

    $(".btn_up1").click(function(){
      $(this).hide();
      $(".btn_down1").show();
      $(".book_index").slice(15, 20).hide();    
      $(".sub_4_container:nth-child(2)").css({"height": "500px"}); 
    });
  });
});


//책속으로(더 보기) =================================================

$(function () {
  let $exp = $(".sub_4_exp");
  $.get("./sub_txt/book_info_jump_03.txt", function (data) {
    $exp.eq(2).html(data);
    $(".btn_up2").css({"display":"none"});
    $(".book_in_text").slice(3, 8).hide();

    $(".btn_down2").click(function(){
      $(this).hide();
      $(".btn_up2").show();
      $(".book_in_text").slice(3, 8).show();
      $(".sub_4_container:nth-child(3)").css({"height": "auto"}); 
    });

    $(".btn_up2").click(function(){
      $(this).hide();
      $(".btn_down2").show();
      $(".book_in_text").slice(3, 8).hide();   
      $(".sub_4_container:nth-child(3)").css({"height": "auto"}); 
    });
  });
});

//저자 소개(더 보기) =================================================

$(function () {
  let $exp = $(".sub_4_exp");
  $.get("./sub_txt/book_info_jump_04.txt", function (data) {
    $exp.eq(3).html(data);        
  });
});


//출판사 책 소개(더 보기) =================================================

$(function () {
  let $exp = $(".sub_4_exp");
  $.get("./sub_txt/book_info_jump_05.txt", function (data) {
    $exp.eq(4).html(data);
    $(".btn_up3").css({"display":"none"});
    $(".press_bookinfo").slice(3, 8).hide();

    $(".btn_down3").click(function(){
      $(this).hide();
      $(".btn_up3").show();
      $(".press_bookinfo").slice(3, 8).show();
      $(".sub_4_container:nth-child(5)").css({"height": "auto"}); 
    });

    $(".btn_up3").click(function(){
      $(this).hide();
      $(".btn_down3").show();
      $(".press_bookinfo").slice(3, 8).hide();   
      $(".sub_4_container:nth-child(5)").css({"height": "290px"}); 
    });
  });
});

//반품 교환 =================================================

$(function () {  
  $.get("./sub_txt/book_info_jump_06.txt", function (data) {
    $(".as_info_table").html(data);        
  });
});

