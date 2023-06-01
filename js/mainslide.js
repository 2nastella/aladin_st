$(function(){
  let $round = $("#round ul li");
  let slideIndex = 0;
  let len = $(".slide li").length; 

  $(".btn_prev1").on("click", function(){
    slideIndex -= 1; 
    if( slideIndex < 0 ) { slideIndex = len - 1; }
    if( slideIndex >= len ) { slideIndex = 0 ;}     
    $(".slide").stop().animate({marginLeft:-1080 * slideIndex });
    $round.css({background:"#e5eff7", color:"#000000"});
    $round.eq(slideIndex).css({background:"#0f4e8a", color:"#ffffff"});
    });

  $(".btn_next1").on("click", function(){
    slideIndex += 1; 
    if( slideIndex < 0 ) { slideIndex = len - 1; }
    if( slideIndex >= len ) { slideIndex = 0 ;} 
    $(".slide").stop().animate({marginLeft:-1080 * slideIndex});
    $round.css({background:"#e5eff7", color:"#000000"});
    $round.eq(slideIndex).css({background:"#0f4e8a", color:"#ffffff"});    
  });

  $round.on("mouseover", function(){
    $(".slide").stop().animate({marginLeft:-1080 * $(this).index()});
    $round.css({background:"#e5eff7", color:"#000000"});
    $(this).css({background:"#0f4e8a", color:"#ffffff"});  
    slideIndex = $(this).index();
  });
});