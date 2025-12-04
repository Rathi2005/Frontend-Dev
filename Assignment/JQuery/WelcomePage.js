$(document).ready(function () {

    // 1. Greeting based on time
    let hour = new Date().getHours();
    if (hour < 12) $("#greeting").text("Good Morning!");
    else if (hour < 18) $("#greeting").text("Good Afternoon!");
    else $("#greeting").text("Good Evening!");

    // 2. Change Greeting → motivational quote
    $("#changeGreeting").click(function () {
        $("#greeting").text("Believe in yourself. You can do great things!");
    });

    // 3. Toggle welcome message visibility
    $("#toggleMessage").click(function () {
        $("#message").toggle();
    });

    // 4. Alert when greeting clicked
    $("#greeting").click(function () {
        alert("You clicked the greeting!");
    });
});
