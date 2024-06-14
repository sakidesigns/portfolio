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
                if (filter === 'all') {
                    box.style.display = 'block';
                } else {
                    if (box.getAttribute('data-category') === filter) {
                        box.style.display = 'block';
                    } else {
                        box.style.display = 'none';
                    }
                }
            });
        });
    });
});

