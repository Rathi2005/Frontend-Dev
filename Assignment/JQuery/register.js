$(document).ready(function () {

    $("#regForm").submit(function (e) {
        e.preventDefault();

        let valid = true;
        $(".invalid").removeClass("invalid");

        // 1. Name not empty
        if ($("#name").val().trim() === "") {
            $("#name").addClass("invalid");
            valid = false;
        }

        // 2. Email format + uniqueness
        let email = $("#email").val();
        let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!regex.test(email)) {
            $("#email").addClass("invalid");
            valid = false;
        }

        // Fake uniqueness check
        if (email === "test@gmail.com") {
            alert("Email already exists!");
            $("#email").addClass("invalid");
            valid = false;
        }

        // 3. Password min length
        if ($("#password").val().length < 8) {
            $("#password").addClass("invalid");
            valid = false;
        }

        // 4. Success message
        if (valid) {
            $("#success").text("Registration Successful!");
        }
    });

});
