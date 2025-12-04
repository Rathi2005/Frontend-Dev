$(document).ready(function () {

    // 1. Highlight product on click
    $(".product").click(function () {
        $(this).toggleClass("highlight");

        // 5. Out of stock alert
        if ($(this).data("stock") === "out") {
            alert("This product is OUT OF STOCK!");
        }
    });

    // 2. Hover → show details
    $(".product").hover(
        function () { $(this).find(".details").show(); },
        function () { $(this).find(".details").hide(); }
    );

    // 3. Favorite icon toggle
    $(".fav").click(function (e) {
        e.stopPropagation(); // avoid parent click
        $(this).toggleClass("selected");
    });
});
