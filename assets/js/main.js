

// globalcareer.io
// goggleadsense.com
// impact.com
// userlytics.com receive-sms.com
//classcentral.com  pvapins.com
// shotstash.com
//scatterjar.com
//coolors.co
//morguefile.com
//pngpix.com
//pngguru.com


$(document).ready(function() {
    $nav = $(".nav");
    $togglecollapse = $(".toggle-collapse");

    // click event on toggle menu

    $togglecollapse.click(function() {
        $nav.toggleClass("collapse");
    });

    //OWL-carousel

    $('.owl-carousel').owlCarousel({
        loop: true,
        autoplay:  false,
        autoplayTimeout: 3000,
        dots: false,
        nav: true,
        autoplayHoverPause: true,
        navText: [$(".owl-navigation .owl-nav-prev"), $(".owl-navigation .owl-nav-next")],
        //responsive: responsive,
        responsiveClass: true,
        responsive: {
            0:{
                items: 1
            },
            320:{
                items:1
            },
            560:{
                items:2
            },
            960:{
                items:3
            }
        }
    });

    // click to scroll top 
    $(".move-up span").click(function(){
        $("html, body").animate({
            scrollTop: 0
        }, 2000)
    });

    //AOS 
    AOS.init();

})