$(function () {
    $(window).scroll(function () {
        var win = $(this).scrollTop();
        if (win > 700) {
            $(".up").fadeIn(1000);

        } else {
            $(".up").fadeOut(1000);
        }
    });
    $(".up").click(function () {
        $("html,body").animate({
            scrollTop: 0
        }, 1000)
    });
    $("body").niceScroll({
        cursorcolor: "#ffc107",
        cursorwidth: "14px"
    });

    $(' #jq1').LineProgressbar({
        percentage: 85
    });
      $(' #jq2').LineProgressbar({
        percentage: 100
    });
      $(' #jq3').LineProgressbar({
        percentage: 75
    });
       $(' #jq4').LineProgressbar({
        percentage: 95
    });
$(".head").click(function(){
    $(this).next().slideToggle();
    $("p").not($(this).next()).slideUp()
});
        $(window).scroll(function(){
         
         var sc=$(window).scrollTop();
         if( sc  < 1000){
              $('.timer').countTo();
             $(window).off('scroll');
         }
     });
});
