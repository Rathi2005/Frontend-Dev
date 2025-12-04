$(document).ready(function () {

    // 1. Hide banners
    $("#hide").click(() => $(".banner").hide());

    // 2. Show banners
    $("#show").click(() => $(".banner").show());

    // 3. Slide toggle
    $("#slide").click(() => $(".banner").slideToggle());

    // 4. Fade toggle
    $("#fade").click(() => $(".banner").fadeToggle());

    // 5. Auto rotate banners
    let current = 0;
    setInterval(function () {
        let banners = $(".banner");
        banners.eq(current).fadeOut(500);
        current = (current + 1) % banners.length;
        banners.eq(current).fadeIn(500);
    }, 5000);
});
