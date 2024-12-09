document.addEventListener("DOMContentLoaded", function () {
    const signupButton = document.getElementById("signup-button");

    signupButton.addEventListener("click", function () {
        window.location.href = "webpages/LoggingPage.html";
    });

const addHoverEffect = (button) => {
    button.addEventListener("mouseenter", function () {
        button.style.backgroundColor = "#0056b3"; 
        button.style.transform = "scale(1.1)";
    });

    button.addEventListener("mouseout", function () {
        button.style.backgroundColor = "black"; 
        button.style.transform = "scale(1)";
    });
};

addHoverEffect(loginButton);
addHoverEffect(registerButton);
});