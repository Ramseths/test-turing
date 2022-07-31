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

sr.reveal('.about', { delay: 200 });
sr.reveal('.tech', { delay: 200 });
sr.reveal('.brand-logo', { interval: 200 });
sr.reveal('.banner-info', { interval: 200 });

sr.reveal('#about-us', { interval: 200 });
sr.reveal('#skills', { interval: 200 });
sr.reveal('#scrum', { interval: 200 });


/* Fetch para formulario de contacto */
const form = document.querySelector('#contactForm');
const url = "https://us-central1-c-functions-a7ca9.cloudfunctions.net/contactForm";
form.addEventListener('submit', function(e) {
    e.preventDefault();
    const body = {
        "name": document.getElementById('name').value,
        "email": document.getElementById('email').value,
        "phone": document.getElementById('phone').value,
        "company": document.getElementById('company').value,
        "comment": document.getElementById('comment').value,
    }
    fetch(url, {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        }).then(res => { return res.json() })
        .then(data => {
            if (data.message = 'Se ha realizado el registro') {
                form.reset();
                Swal.fire({
                    icon: 'success',
                    title: 'Turing IA',
                    text: 'En breve nos comunicaremos contigo',
                });
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Algo salió mal',
                    text: 'Intentalo más tarde por favor',
                });
            }
        });
});