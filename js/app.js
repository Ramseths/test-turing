const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
});

window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    header.classList.toggle("sticky", window.scrollY > 0);
})

function toggleMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.nav');
    menuToggle.classList.toggle('active');
    nav.classList.toggle('active');
}

/*SCROLL HOME*/
sr.reveal('.about', { delay: 200 });
sr.reveal('.tech', { delay: 200 });
sr.reveal('.brand-logo', { interval: 200 });
sr.reveal('.banner-info', { interval: 200 });


sr.reveal('#about-us', { interval: 200 });
sr.reveal('#skills', { interval: 200 });
sr.reveal('#scrum', { interval: 200 });