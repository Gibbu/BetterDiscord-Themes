$(document).ready(function() {
    $('#lightSlider').lightSlider({
        item: 1,
        loop: true,
        speed: 300,
        auto: true,
        pause: 6000,
        adaptiveHeight: true
    });

    $('.listBtn').click(function() {
        $('#list').slideToggle(400);
    })
});