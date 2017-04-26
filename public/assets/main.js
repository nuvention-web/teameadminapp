$(document).ready(function() {

    // fix menu when passed
    $('.masthead')
        .visibility({
            once: false,
            onBottomPassed: function() {
                $('.fixed.menu').transition('fade in');
            },
            onBottomPassedReverse: function() {
                $('.fixed.menu').transition('fade out');
            }
        });

    // create sidebar and attach to menu open
    $('.ui.sidebar')
        .sidebar('attach events', '.toc.item');

    $('.special.cards .image').dimmer({
        on: 'hover'
    });

    $('.shape').shape({ 'width': 'next', 'height': 'next' });

    $('.ui.menu .ui.dropdown').dropdown({
        on: 'hover'
    });
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
