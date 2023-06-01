$(function () {
  $.ajax({
    url: "./json/part_makegoods.json",
    dataType: "json",
    success: function (data) {
      if (data.length > 0) {
        for (var i in data) {
          $(".make_goods").find("img").eq(i).attr("src", "img/" + data[i].url);
          $(".goods_info_text").eq(i).text(data[i].title);          
        }
      }
    },
  });
});

$(function () {
  $(".make_goods > div").hover(function () {
    $(this).find(".goods_info, .goods_info_text").css("display", "block");
  }, function () {
    $(this).find(".goods_info, .goods_info_text").css("display", "none");
  });
});
