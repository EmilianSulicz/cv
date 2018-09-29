//changing navbar
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
    if  ($("#language").html() === "Polish") {
        $("#cvLink").attr("href", "https://drive.google.com/file/d/1iFpxBRIizhwNIIquJBKGiWy7S6PFI01K/view?usp=sharing")
        $("#language").html("English");
        $("#cvPic").attr("src", "https://i.imgur.com/ASe7tD2.jpg");
    }
    else {
        $("#cvLink").attr("href", "https://drive.google.com/file/d/1uP-JKGdVHehyAYAjJkBJlXccopwjprNo/view?usp=sharing")
        $("#language").html("Polish");
        $("#cvPic").attr("src", "https://i.imgur.com/uy7hbJQ.jpg");
    }
});
