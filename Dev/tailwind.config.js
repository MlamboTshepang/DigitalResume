document.addEventListener('DOMContentLoaded', () => {
        tailwindConfig = {
        theme: {
        extend: {
        colors: {
        'ink': '#000000',
        'paper': '#ffffff',
        'redact': '#ff0000',
        'aged': '#f5f1e8',
        'stamp': '#dc2626'
    }
    }
    }
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