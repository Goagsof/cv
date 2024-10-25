document.addEventListener('DOMContentLoaded', () => {
    const headerTitle = document.querySelector('header h1');
    let isOriginalColor = true;

    setInterval(() => {
        headerTitle.style.color = isOriginalColor ? '#e43f5a' : '#eaeaea';
        isOriginalColor = !isOriginalColor;
    }, 1000);
});


document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.forEach(link => link.classList.remove('active'));
            link.classList.add('active');
        });
    });
});
 
// Función para ocultar o mostrar la barra de navegación
function toggleNavbar() {
    const navbar = document.getElementById('navbar');
    if (window.innerWidth <= 768) {
        navbar.style.display = 'none'; // Ocultar la barra de navegación
    } else {
        navbar.style.display = 'block'; // Mostrar la barra de navegación
    }
}

// Llama a la función al cargar la página y al redimensionar la ventana
window.addEventListener('load', toggleNavbar);
window.addEventListener('resize', toggleNavbar);


// Función para detectar si un elemento está visible en el viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Función para activar y desactivar la animación en los elementos según su visibilidad
function toggleAnimation() {
    const skills = document.querySelectorAll('.skill-item'); 
    const hobbies = document.querySelectorAll('.hobby-item');
    const formacion = document.querySelectorAll('.formacion-item')
    const proyecto = document.querySelectorAll('.proyecto-item')
    const items = [...skills, ...hobbies, ...formacion, ...proyecto]; 

    items.forEach(item => {
        if (isInViewport(item)) {
            item.classList.add('visible'); 
        } else {
            item.classList.remove('visible'); 
        }
    });
}

// Ejecutar cuando se haga scroll o cargue la página
window.addEventListener('scroll', toggleAnimation);
window.addEventListener('load', toggleAnimation);







