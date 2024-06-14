// ANIMATION

$(document).ready(function () {
    $(window).scroll(function () {
        $(".animation-style1").each(function () {
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

// FILTER

document.addEventListener('DOMContentLoaded', function () {
    const filterButtons = document.querySelectorAll('#filter .button-style1');
    const boxes = document.querySelectorAll('.box-style3');

    filterButtons.forEach(button => {
        button.addEventListener('click', function () {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));

            // Add active class to the clicked button
            this.classList.add('active');

            const filter = this.getAttribute('data-filter');

            boxes.forEach(box => {
                const categories = box.getAttribute('data-category').split(' '); // Split categories by space

                if (filter === 'all' || categories.includes(filter)) { // Check if the box has the filter category
                    box.style.display = 'block';
                } else {
                    box.style.display = 'none';
                }
            });
        });
    });
});

// BACK TO TOP

(function($) { "use strict";

    $(document).ready(function(){"use strict";
    
            //Scroll back to top
    
            var progressPath = document.querySelector('.progress-wrap path');
            var pathLength = progressPath.getTotalLength();
            progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
            progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
            progressPath.style.strokeDashoffset = pathLength;
            progressPath.getBoundingClientRect();
            progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';
            var updateProgress = function () {
                var scroll = $(window).scrollTop();
                var height = $(document).height() - $(window).height();
                var progress = pathLength - (scroll * pathLength / height);
                progressPath.style.strokeDashoffset = progress;
            }
            updateProgress();
            $(window).scroll(updateProgress);
            var offset = 50;
            var duration = 550;
            jQuery(window).on('scroll', function() {
                if (jQuery(this).scrollTop() > offset) {
                    jQuery('.progress-wrap').addClass('active-progress');
                } else {
                    jQuery('.progress-wrap').removeClass('active-progress');
                }
            });
            jQuery('.progress-wrap').on('click', function(event) {
                event.preventDefault();
                jQuery('html, body').animate({scrollTop: 0}, duration);
                return false;
            })
    
    
        });
    
    })(jQuery);
