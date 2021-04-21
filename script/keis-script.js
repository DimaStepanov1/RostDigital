$("#down1").click(function(){
    $(".hiding").addClass("keis-hidden");
});
  
$(".ui").click(function () {
    $(this).addClass('paint-orange');
    $("#down2").removeClass('hidden');
});

$("#down2").click(function(){
  $(".ui").removeClass("paint-orange");
  $(this).addClass("hidden");
})