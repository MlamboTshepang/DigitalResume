document.addEventListener('DOMContentLoaded', () => {
    module.exports = {
        content: ["./*.html", "./**/*.js"],
        theme: {
            extend: {},
        },
        plugins: [],
    }
    const red1 = document.querySelectorAll(".redacted");
// Loop through each redacted element
    red1.forEach((element) => {
        // 1. Listen for a hover on this specific element
        element.addEventListener("mouseover", () => {
            element.classList.remove("redacted");
            setTimeout(() => {
                element.classList.add("redacted");
            }, 1000);
        });
    });
});