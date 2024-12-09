// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", function () {
    // Select the login button by its ID
    const loginButton = document.getElementById("loginButton");

    // Add a click event listener to the login button
    loginButton.addEventListener("click", function () {
        // Redirect to LoggingPage.html
        window.location.href = "webpages/LoggingPage.html";
    });

const addHoverEffect = (button) => {
    button.addEventListener("mouseenter", function () {
        button.style.backgroundColor = "#0056b3"; // Darker blue on hover
        button.style.transform = "scale(1.1)";
    });

    button.addEventListener("mouseout", function () {
        button.style.backgroundColor = "black"; // Original color
        button.style.transform = "scale(1)";
    });
};

// Apply hover effects to both buttons
addHoverEffect(loginButton);
addHoverEffect(registerButton);
});