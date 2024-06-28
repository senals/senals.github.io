document.addEventListener("DOMContentLoaded", function () {
    const proceedButton = document.getElementById("proceed-button");
    const introOverlay = document.getElementById("intro-overlay");
    const portfolioContent = document.getElementById("portfolio-content");

    // Initially, the proceed button should be visible
    proceedButton.classList.add("visible");

    proceedButton.addEventListener("click", function () {
        // Fade out the intro overlay
        introOverlay.classList.add("hidden");

        // Fade in the portfolio content
        setTimeout(() => {
            portfolioContent.classList.remove("hidden");
            portfolioContent.classList.add("visible");
        }, 1000); // Wait for the intro overlay to fade out
    });
});

