$(document).ready(function () {

    // 1. Toggle answer on question click
    $(".question").click(function () {
        $(this).next(".answer").toggle();
    });

    // 2. Hover color change
    $(".question").hover(
        function () { $(this).css("color", "blue"); },
        function () { $(this).css("color", "black"); }
    );

    // 3. Double-click → collapse all answers
    $(".question").dblclick(function () {
        $(".answer").slideUp();
    });

    // 4. Focus input → highlight parent question
    $("input").focus(function () {
        $(this).parent().addClass("highlight");
    });

    // 5. Blur input → remove highlight
    $("input").blur(function () {
        $(this).parent().removeClass("highlight");
    });

});
