/**
 * EcoFood Community - Landing Page JS
 * Persona 1: Landing Page + Frases Motivadoras
 * Funcionalidades:
 * 1. Frases motivadoras aleatorias
 * 2. Redirección a páginas de registro/login
 * 3. Efectos interactivos
 */

// Frases motivadoras - Arreglo de objetos
const frasesMotivadoras = [
    {
        texto: "Cada alimento salvado es un paso hacia un planeta más sostenible.",
        autor: "Equipo EcoFood "
    },
    {
        texto: "Tu contribución alimenta no solo estómagos, sino también esperanzas.",
        autor: "Comunidad EcoFood"
    },
    {
        texto: "Juntos podemos convertir el desperdicio en abundancia.",
        autor: "Equipo EcoFood"
    },
    {
        texto: "Pequeñas acciones generan grandes cambios. ¡Empieza hoy!",
        autor: "Comunidad EcoFood"
    }
];

// Mostrar frase aleatoria al cargar la página
function mostrarFraseAleatoria() {
    const contenedorFrase = document.getElementById('fraseMotivadora');
    const fraseAleatoria = frasesMotivadoras[Math.floor(Math.random() * frasesMotivadoras.length)];
    
    // Crear elementos HTML dinámicamente
    const fraseElement = document.createElement('p');
    fraseElement.className = 'mb-1';
    fraseElement.textContent = `"${fraseAleatoria.texto}"`;
    
    const autorElement = document.createElement('small');
    autorElement.className = 'text-muted d-block mt-1';
    autorElement.textContent = `- ${fraseAleatoria.autor}`;
    
    // Limpiar contenedor y agregar nuevos elementos
    contenedorFrase.innerHTML = '';
    contenedorFrase.appendChild(fraseElement);
    contenedorFrase.appendChild(autorElement);
    
    // Animación de entrada
    contenedorFrase.style.opacity = 0;
    setTimeout(() => {
        contenedorFrase.style.transition = 'opacity 0.5s ease';
        contenedorFrase.style.opacity = 1;
    }, 100);
}

// Funciones de redirección
function redirigirRegistro() {
    window.location.href = 'registro.html';
}

function redirigirLogin() {
    window.location.href = 'login.html';
}

// Efecto hover para botones
function configurarEfectosBotones() {
    const botones = document.querySelectorAll('.btn');
    botones.forEach(boton => {
        boton.addEventListener('mouseenter', () => {
            boton.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
        });
        boton.addEventListener('mouseleave', () => {
            boton.style.boxShadow = 'none';
        });
    });
}

// Inicialización cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    mostrarFraseAleatoria();
    configurarEfectosBotones();
    
    // Cambiar frase cada 8 segundos
    setInterval(mostrarFraseAleatoria, 8000);
});