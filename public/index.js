//changing navbar class
$(document).ready(function() {

    $(window).scroll(function() {

        var height = $('.first-container').height();
        var scrollTop = $(window).scrollTop();

        if (scrollTop >= height - 100) {
            $('.nav-container').addClass('solid-nav');
        } else {
            $('.nav-container').removeClass('solid-nav');
        }
    });
});

//smooth navigation
// Select all links with hashes
$('a[href*="#"]')
// Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
        // On-page links
        if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
            &&
            location.hostname == this.hostname
        ) {
            // Figure out element to scroll to
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            // Does a scroll target exist?
            if (target.length) {
                // Only prevent default if animation is actually gonna happen
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);
            }
        }
    });

//scroll to the top button
$(document).ready(function(){
    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('#scroll').fadeIn();
        } else {
            $('#scroll').fadeOut();
        }
    });
    $('#scroll').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });
});

//parallax first picture
(function(){
    var parallax = document.querySelectorAll(".first-container"),
        speed = 0.5;
    window.onscroll = function(){
        [].slice.call(parallax).forEach(function(el,i){
            var windowYOffset = window.pageYOffset,
                elBackgrounPos = "50% " + (windowYOffset * speed) + "px";
            el.style.backgroundPosition = elBackgrounPos;
        });
    };

})();

//change CV language button
$("#changeLanguage").on("click", function(){
    if  ($("#cvLink").attr("href") === "https://drive.google.com/file/d/1wGx-tFT60y6g7MTYKvfiMyr3-0GjbhAk/view?usp=sharing") {
        $("#cvLink").attr("href", "https://drive.google.com/file/d/19o36mBdI50PzlC2GAbVX4nwG1mxmIUQD/view?usp=sharing");
        $("#language").html("English");
        $("#cvPic").attr("src", "https://i.imgur.com/yr0bF9y.jpg");
    }
    else {
        $("#cvLink").attr("href", "https://drive.google.com/file/d/1wGx-tFT60y6g7MTYKvfiMyr3-0GjbhAk/view?usp=sharing");
        $("#language").html("Polish");
        $("#cvPic").attr("src", "https://i.imgur.com/4CcnGnj.jpg");
    }
});

//Load more button
$(".project").slice(0, 2).show().css("opacity", 1);
$("#loadMore").on('click', function (e)
{
    e.preventDefault();
    if($("#loadMore").html() === "Show more")
    {
        $(".project:hidden").slice(0, 4).show(function() {
                $(".project").css("opacity", 1);
            }
        );
        $("#loadMore").html("Show less");
    }
    else
    {
        $(".project").slice(2, 8).css("opacity", 0).hide();
        $("#loadMore").html("Show more");
    }
})