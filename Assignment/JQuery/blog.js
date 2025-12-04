$(document).ready(function () {

    // 1. Add New Post
    $("#add").click(function () {
        $("#posts").append("<div class='post'>New Blog Post</div>");
    });

    // 2. Prepend Featured
    $("#prepend").click(function () {
        $("#posts").prepend("<div class='post'>🌟 Featured Post</div>");
    });

    // 3. Remove last post
    $("#remove").click(function () {
        $("#posts .post").last().remove();
    });

    // 4. Tags before & after posts
    $(".post").each(function () {
        $(this).before("<span>#TagStart</span>");
        $(this).after("<span>#TagEnd</span>");
    });

    // 5. Highlight posts containing keyword
    $(".post").filter(function () {
        return $(this).text().includes("Featured");
    }).css("background", "lightgreen");

});
