$(document).ready(function () {

    // 1. Subscribe
    $("#subscribe").click(function () {
        $("#message").text("Subscribed successfully!");
    });

    // 2. Unsubscribe
    $("#unsubscribe").click(function () {
        $("#message").text("Unsubscribed!");
    });

    // 3. Add new topic dynamically
    $("#addTopic").click(function () {
        $("#topics").append("<div class='topic'>New Topic</div>");
    });

    // 4. Attach click event using .on()
    $("#topics").on("click", ".topic", function () {
        $(this).toggleClass("active");
    });

    // 5. Remove event
    $("#unsubscribe").click(function () {
        $("#topics").off("click");
    });

});
