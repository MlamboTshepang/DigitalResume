document.addEventListener('DOMContentLoaded', () => {
    // Tailwind Configuration
    tailwind.config = {
        theme: {
            extend: {
                colors: {
                    "paper": "#e8e1d5",
                    "aged": "#dccdbb",
                    "ink": "#1a1a1a",
                    "redact": "#000000",
                    "stamp": "#7c211e",
                    "portal-bg": "#2b2824"
                },
                fontFamily: {
                    "mono": ["'Courier Prime'", "monospace"],
                    "stamp": ["'Space Grotesk'", "sans-serif"]
                }
            },
        },
    }
    // Establishing Variables

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



