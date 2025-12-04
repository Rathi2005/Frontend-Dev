$(document).ready(function () {

    // 1. Click manager → highlight direct employees
    $(".manager").click(function () {
        $(this).siblings(".emp").addClass("highlight");
    });

    // 2. Hover employee → show contact info (next element)
    $(".emp").hover(function () {
        $(this).after("<div class='info'>Contact: 9999999999</div>");
    }, function () {
        $(this).next(".info").remove();
    });

    // 3. Click department → highlight all members
    $(".department").click(function () {
        $(this).children().addClass("highlight");
    });

    // 4. Random employee highlight siblings
    let randomEmp = $(".emp").eq(Math.floor(Math.random() * $(".emp").length));
    randomEmp.siblings(".emp").addClass("highlight");

    // 5. Collapse / expand team
    $(".department h3").click(function () {
        $(this).parent().find(".emp, .manager").slideToggle();
    });

});
