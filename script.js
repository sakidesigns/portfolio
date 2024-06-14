$(document).ready(function() {
    $(window).scroll(function() {
        $(".animation-style1").each(function() {
            var boxOffset = $(this).offset().top;
            var windowScroll = $(window).scrollTop();
            var revealHeight = 500; // Adjust this value as needed

            if (windowScroll > (boxOffset - revealHeight)) {
                $(this).addClass("reveal");
            } else {
                $(this).removeClass("reveal");
            }
        });
    });
});