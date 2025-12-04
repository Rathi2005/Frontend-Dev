// Version 1 → carousel
jq1("#carousel").css("background", "pink");

// Version 2 → modal popups
jq2("#modal").click(function () {
    alert("Modal opened!");
});

// Version 1 → highlight widget
jq1("#widget").css("border", "2px solid red");

// Version 2 → tooltip
jq2(".tooltipItem").hover(function () {
    jq2(this).attr("title", "Tooltip text");
});
