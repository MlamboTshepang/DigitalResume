// Wait for all the html to load before loading the javascript
document.addEventListener('DOMContentLoaded', function(){
    
    
    // Moving Text
    const words = ["Front End Developer", "Back End Developer", "Full Stack Developer", "UI Designer"];
    const textElement = document.querySelector(".typing-text");
    let wordIndex = 0;  // Which word we are on
    let letterIndex = 0; // Which letter of that word we are on
    let isDeleting = false;
// Speeds (in milliseconds)
    const typeSpeed = 150;
    const deleteSpeed = 100;
    const pauseBetweenWords = 1500; // Pause after typing a word

    function typeEffect() {
        const currentWord = words[wordIndex];
        if (isDeleting) {
            // --- Deleting ---
            textElement.innerHTML = currentWord.substring(0, letterIndex - 1);
            letterIndex--;
            if (letterIndex === 0) {
                isDeleting = false;
                wordIndex = (wordIndex + 1) % words.length; // Move to next word
            }
            setTimeout(typeEffect, deleteSpeed);
        } else {
            // --- Typing ---
            textElement.innerHTML = currentWord.substring(0, letterIndex + 1);
            letterIndex++;
            if (letterIndex === currentWord.length) {
                isDeleting = true;
                // Pause for a moment before deleting
                setTimeout(typeEffect, pauseBetweenWords);
            } else {
                setTimeout(typeEffect, typeSpeed);
            }
        }
    }
// Start the effect
    typeEffect();
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");

// Toggle 'active' class on hamburger and nav-menu
    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    });
    // Progress Bar
    const progressBars = document.querySelectorAll('.progress-bar');
    // Use a slight delay for a better visual effect
    setTimeout(() => {
        progressBars.forEach(bar => {
            const width = bar.getAttribute('data-width');
            bar.style.width = width;
        });
    }, 200); // 200ms delay
    
    // Simple behavior: mobile nav toggle, current year, smooth scrolling
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');
    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navLinks.classList.toggle('show');
        });
    }


// Current year
    const year = document.getElementById('year');
    if (year) year.textContent = new Date().getFullYear();

// Smooth scroll for internal anchor links
    document.querySelectorAll('a[href^="#"]').forEach((a)=>{
        a.addEventListener('click', (e)=>{
            const href = a.getAttribute('href');
            if(href && href.startsWith('#')){
                e.preventDefault();
                document.querySelector(href)?.scrollIntoView({behavior:'smooth', block:'start'});
                navLinks?.classList.remove('show');
            }
        });
    });
    
//     ----------------

    // Find your contact form
    const contactForm = document.querySelector('form[name="contact"]');

    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            // Stop the default page redirect
            event.preventDefault();

            // Get the form's data
            const formData = new FormData(contactForm);

            // Get the server URL from the form's 'action' attribute
            const url = contactForm.action;

            fetch(url, {
                method: 'POST',
                headers: {
                    // This Content-Type MUST match what the server expects
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                // URLSearchParams is the key to sending form data this way
                body: new URLSearchParams(formData).toString(),
            })
                .then(response => response.json())
                .then(data => {
                    console.log('Success:', data);
                    alert(data.message); // Show the success message (e.g., "Thanks, Tshepang!")
                    contactForm.reset(); // Clear the form fields
                })
                .catch((error) => {
                    console.error('Error:', error);
                    alert('An error occurred. Please try again.');
                });
        });
    }
})