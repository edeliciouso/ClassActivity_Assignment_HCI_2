$(function(){
    $(".lesson").hover(function(){
        $(this).find(".text-contents").css("display", "inline-block");
    // when the mouse enters the div
    }, function(){
        $(this).find(".text-contents").css("display", "none");
    }
    // when the mouse leaves the div
    );
});
