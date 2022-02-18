$(function(){
  $(".mainmenu").hover(function(){
    $("#sub").stop().slideDown();
  },
  function(){
    $("#sub").stop().slideUp();
  });
});

$(function(){
  $(".logoimg_hover> a").click(function(){
    $(".logopopup").show();
  });

  $(".close").click(function(){
    $(".logopopup").hide();
  });
});