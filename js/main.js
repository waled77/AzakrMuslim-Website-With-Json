$(document).ready(function () {
    $('.header ul li a').on('click', function() {
        
        $('.header ul li a').removeClass('active');
        $(this).addClass('active');
    })


    $('.header .first-link').on('click', function(e) {
        e.preventDefault();
        $('#home').addClass('show-section');
        $('#about').removeClass('show-section');
        $('#other-apps').removeClass('show-section');
        document.title = 'ذكر المسلم | الرئيسية';
        
    });

    $('.header .second-link').on('click', function(e) {
        e.preventDefault();
        $('#home').removeClass('show-section');
        $('#about').addClass('show-section');
        $('#other-apps').removeClass('show-section');
        document.title = 'ذكر المسلم | من نحن';
    });

    $('.header .third-link').on('click', function(e) {
        e.preventDefault();
        $('#home').removeClass('show-section');
        $('#about').removeClass('show-section');
        $('#other-apps').addClass('show-section');
        document.title = 'ذكر المسلم |  تطبيقاتنا';
    });
});