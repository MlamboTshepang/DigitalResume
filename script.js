// Wait for all the html to load before loading the javascript
document.addEventListener('DOMContentLoaded', function(){

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
})