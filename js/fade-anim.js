document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll('.fadezz');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    });

    elements.forEach(element => {
        observer.observe(element);
    });
});
