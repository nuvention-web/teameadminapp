$(document).ready(function() {
    $(".menu-responsive > .menu-item.menu-has-children > .menu-link + .menu-children").hide();

    menu_resize();
    
    $(".menu-responsive > .menu-item.menu-has-children > .menu-link").click(function() {
        $(this).parent().toggleClass('active');
        $('.menu-responsive > .menu-item.menu-has-children > .menu-link').focus().toggleClass("expanded");
        $(this).focus().children(".fa").toggleClass("fa-angle-down fa-angle-up");
        $(this).siblings('.menu-children').slideToggle('swing');
        if ($(this).parent(":not(:focus)").hasClass('active')) {
            $(this).parent(":not(:focus)").removeClass('active')
            $(this).parent().siblings(".menu-item.menu-has-children").children(".menu-link:not(:focus)").removeClass("expanded");
            $(this).parent().siblings(".menu-item.menu-has-children").children(".menu-link:not(:focus)").siblings().slideUp();
            $(this).parent().siblings(".menu-item.menu-has-children").children(".menu-link:not(:focus)").children(".fa.fa-angle-up").removeClass('fa-angle-up').addClass('fa-angle-down');
        }
    });

    function menu_resize() {
        if (($("body").width()/16) < 48) {
            $(".menu-responsive").removeClass("menu-horizontal");
            $(".menu-responsive").addClass("menu-hamburger");
        } else {
            $(".menu-responsive").removeClass("menu-hamburger");
            $(".menu-responsive").addClass("menu-horizontal");
            $(".menu-responsive.menu-horizontal").show();
        }
    };

    $(window).on('load resize', function() {
        $(".menu-responsive > .menu-item.menu-has-children > .menu-link + .menu-children").hide();
        menu_resize();
    });

    $(".fa.fa-mob").click(function() {
        $(".menu-responsive.menu-hamburger").slideToggle();
        $(".fa-mob").toggleClass("fa fa-bars").toggleClass("remove icon");
    });

    $(window).data("width", $(this).width()).resize(function() {
        if ($(".menu-responsive.menu-hamburger").is(':visible')) {
            $(".menu-responsive.menu-hamburger").hide();
            $(".fa-mob").addClass("fa fa-bars").removeClass("remove icon");
        }
    });

    $('.shape').shape();

    $('.ui.menu a.item')
        .on('click', function() {
            $(this)
                .addClass('active')
                .siblings()
                .removeClass('active');
        });

    $('.ui.checkbox').checkbox();
    $('.ui.radio.checkbox').checkbox();
    $('.ui.dropdown').dropdown({
        'direction': 'downward',
        'fullTextSearch': true
    });

    

});
