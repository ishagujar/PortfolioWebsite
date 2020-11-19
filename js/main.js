$(document).ready(function()
{
    let $btns=$('.project-area .button-group button');
    $btns.click(function(e)
    {
        $('.project-area .button-group button').removeClass('active');
        //removes active class from 'All' Category & adds active class to current category
        e.target.classList.add('active'); 
        //selects data-filter i.e categories
        let selector=$(e.target).attr('data-filter');
        $('.project-area .grid').isotope({
            filter:selector
        });
        return false;
    })
    //call event'trigger' of jquery
    $('.project-area .button-group #btn1').trigger('click');
    //for magnific popup
    $('.project-area .grid .test-popup-link').magnificPopup({
        type: 'image',
        gallery:{enabled:true}
      });
    //owl carousel
    $('.site-main .about-area .owl-carousel').owlCarousel({
        loop:true, //loop this carousel automatically
        autoplay:true, 
        dots:true, //to add dots 
        responsive://to make responsive
        {
            0: //if 0 pixels,display only 1 items
            {
                items:1
            },
            544://if viewport > 544px,display only 2 items
            {
                items:2
            }
        }
    })
    //sticky navigation menu
    let nav_offset_top = $('.header_area').height() + 50;

    function navbarFixed() {
        if ($('.header_area').length) {
            $(window).scroll(function () {
                let scroll = $(window).scrollTop();
                if (scroll >= nav_offset_top) {
                    $('.header_area .main-menu').addClass('navbar_fixed');
                } else {
                    $('.header_area .main-menu').removeClass('navbar_fixed');
                }
            })
        }
    }
    navbarFixed();
});