$(document).ready(function (){
    // for nav
    let header = $("#navBar");
    let lastScroll = 0;

    window.addEventListener('scroll', function() {
        let currentScroll = window.pageYOffset;

        if (currentScroll <= 100) {
            header.removeClass("scroll-ups");
            header.removeClass("scroll-downs");
        }

        if (currentScroll > 100 && !header.hasClass("scroll-downs")) {
            header.removeClass("scroll-ups");
            header.addClass("scroll-downs");
        }

        if (currentScroll < lastScroll && header.hasClass("scroll-downs")) {
            header.removeClass("scroll-downs");
            header.addClass("scroll-ups");
        }


        lastScroll = currentScroll;

        console.log(lastScroll)


    });
   // end nav

    // for typingText
    var typing = new Typed('#typing', {
        strings: ['Yell Htet Aung', 'Web Developer'],
        typeSpeed: 100,
        backSpeed: 100,
        loop: true,
        loopCount: Infinity,
        showCursor: true,
        cursorChar: '|',
        autoInsertCss: true
    });

    // for portfoliocard
    const demoCards = $('.democards').tilt({
        perspective: 900,
        maxGlare: 2
    });

    $('.projectLists').click(function (){
        $(this).addClass('btn-primary').siblings().removeClass('btn-primary');
        $(this).removeClass('noactive').siblings().addClass('noactive');

        let getAttValue = $(this).attr('data-filter');

        if(getAttValue === 'all') {
            $('.filters').show();
        } else {
            $('.filters').hide();
            $('.filters').not('.'+getAttValue).hide();
            $('.filters').filter('.' + getAttValue).show();
        }

        if(getAttValue != 'all'){
            $('#changeWidth').addClass('col-lg-12');
            $('#changeWidth').removeClass('col-lg-8');
            $('#changeWidth').children().children().addClass('col-lg-3');
            $('#changeWidth').children().children().removeClass('col-lg-5');
            if($('.filters').hasClass('d-none')){
                $('.filters').removeClass('d-none');
            }
        } else {
            $('#changeWidth').removeClass('col-lg-12');
            $('#changeWidth').addClass('col-lg-8');
            $('#changeWidth').children().children().addClass('col-lg-5');
            $('#changeWidth').children().children().removeClass('col-lg-3');
            $('.filters')[5].style.display = 'none';
            $('.filters')[8].style.display = 'none';
            $('.filters')[9].style.display = 'none';
            $('.filters')[10].style.display = 'none';

        }
    });

    $('.projectLists').mouseleave(function (){
        $(this).css('border','none')
    });

    $('.projectLists').mouseenter(function (){
        $(this).css('border','none')
    });

    // for contact
    const contactInfo = $('.contact-info').tilt({
        perspective: 900,
        maxGlare: 2
    });


    // for aos
    AOS.init({
        duration: 2000,
    });

});