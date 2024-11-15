document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.querySelector(".Loginreg");
    
    // PangTago nung login details
    loginForm.style.opacity = "0";
    loginForm.style.visibility = "hidden";

    const loginButton = document.querySelector(".buttonlogin-popup");
    loginButton.addEventListener("click", function() {
        // if else kung nakatago o hindi
        if (loginForm.style.opacity === "0") {
            loginForm.style.opacity = "1";
            loginForm.style.visibility = "visible";
        } else {
            loginForm.style.opacity = "0";
            loginForm.style.visibility = "hidden";
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const studentButton = document.querySelector(".student-button");
    const dropdownContent = document.querySelector(".dropdown-content");

    studentButton.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent default anchor behavior
        dropdownContent.style.display = dropdownContent.style.display === "block" ? "none" : "block";
    });

    // Close dropdown if clicking outside of it
    document.addEventListener("click", function(event) {
        if (!studentButton.contains(event.target) && !dropdownContent.contains(event.target)) {
            dropdownContent.style.display = "none";
        }
    });
});

