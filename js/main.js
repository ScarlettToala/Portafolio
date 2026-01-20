// Scroll suave
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        document.querySelector(link.getAttribute('href'))
            .scrollIntoView({ behavior: 'smooth' });
    });
});

// Animaciones al hacer scroll
const sections = document.querySelectorAll('.hidden');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

sections.forEach(section => observer.observe(section));

// Filtro de proyectos
const botones = document.querySelectorAll('.filtros button');
const proyectos = document.querySelectorAll('.proyecto');

botones.forEach(boton => {
    boton.addEventListener('click', () => {
        const filtro = boton.dataset.filter;

        proyectos.forEach(proyecto => {
            if (filtro === 'all' || proyecto.dataset.category === filtro) {
                proyecto.style.display = 'block';
            } else {
                proyecto.style.display = 'none';
            }
        });
    });
});

