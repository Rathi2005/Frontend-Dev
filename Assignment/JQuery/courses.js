$(document).ready(function () {
    
    $("#search").keyup(function () {
        let text = $(this).val().toLowerCase();
        let count = 0;

        $(".course").each(function () {
            let item = $(this).text().toLowerCase();

            if (item.includes(text)) {
                $(this).show().css("background", "yellow");
                count++;
            } else {
                $(this).hide();
            }
        });

        $("#count").text(count);

        if (text === "") {
            $(".course").show().css("background", "white");
        }
    });

});
