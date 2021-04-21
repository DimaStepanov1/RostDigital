$("#down1").click(function(){
    $(".inside-contact").addClass("hidden");
    $(".inside-contact2").removeClass("hidden");
});

$("#goback").click(function(){
    $(".inside-contact").removeClass("hidden");
    $(".inside-contact2").addClass("hidden");
});

$("#down2").click(function(){
    $(".inside-contact2").addClass("hidden");
    $(".inside-contact3").removeClass("hidden");
});

$("#goback2").click(function(){
    $(".inside-contact2").removeClass("hidden");
    $(".inside-contact3").addClass("hidden");
});

$("#down3").click(function(){
    $(".inside-contact3").addClass("hidden");
    $(".inside-contact4").removeClass("hidden");
});

$("#goback3").click(function(){
    $(".inside-contact3").removeClass("hidden");
    $(".inside-contact4").addClass("hidden");
});

$("#down4").click(function(){
    $(".inside-contact4").addClass("hidden");
    $(".inside-contact5").removeClass("hidden");
});
$("#goback4").click(function(){
    $(".inside-contact4").removeClass("hidden");
    $(".inside-contact5").addClass("hidden");
});

$("#down5").click(function(){
    $(".inside-contact5").addClass("hidden");
    $(".inside-contact").removeClass("hidden");
});