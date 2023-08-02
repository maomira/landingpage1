document.addEventListener("DOMContentLoaded", function () {
    const button = document.querySelector(".button");
    const secondBackground = document.querySelector(".black-background");

    button.addEventListener("click", function () {
        // Calculate the distance to scroll based on the second background position
        const scrollDistance = secondBackground.getBoundingClientRect().top;

        // Smoothly scroll to the second background using the ScrollToOptions behavior
        window.scrollTo({
            top: scrollDistance,
            behavior: "smooth",
        });
    });
});
