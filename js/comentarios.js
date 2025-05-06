/**
 * EcoFood Community - Comentarios JS
 * Manejo de formulario y lista dinámica de comentarios
 */


// Renderizar comentarios
function renderizarComentarios() {
    const contenedor = document.getElementById('lista-comentarios');
    if (!contenedor) return;

    contenedor.innerHTML = comentarios.map(comentario => `
        <div class="col-md-6 mb-3">
            <div class="card h-100 ecofood-comentario">
                <div class="card-body">
                    <div class="d-flex justify-content-between align-items-center mb-2">
                        <h5 class="card-title mb-0">${comentario.nombre}</h5>
                        <small class="text-muted">${comentario.fecha}</small>
                    </div>
                    <h6 class="card-subtitle mb-2 text-muted">${comentario.email}</h6>
                    <p class="card-text">${comentario.texto}</p>
                </div>
            </div>
        </div>
    `).join('');
}

// Manejar envío de formulario
document.getElementById('form-comentario')?.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const texto = document.getElementById('comentario').value;

    comentarios.unshift({
        nombre,
        email,
        fecha: new Date().toLocaleDateString('es-ES'),
        texto
    });

    renderizarComentarios();
    e.target.reset();
});

// Inicialización
document.addEventListener('DOMContentLoaded', renderizarComentarios);

/**
 * EcoFood Community - Comentarios JS
 * Muestra comentarios realistas de la comunidad sobre reducción de desperdicio alimentario
 */

// Array de objetos con comentarios de ejemplo
const comentarios = [
    {
        nombre: "María González",
        fecha: "15/06/2023",
        texto: "Desde que uso EcoFood he reducido mi desperdicio de alimentos en un 60%. ¡Las recetas de aprovechamiento son increíbles!",
        valoracion: 5
    },
    {
        nombre: "Carlos Mendoza",
        fecha: "10/06/2023",
        texto: "La app me ayudó a conectar con un banco de alimentos local. Ahora dono lo que no voy a consumir en vez de tirarlo.",
        valoracion: 4
    },
    {
        nombre: "Ana Torres",
        fecha: "05/06/2023",
        texto: "Los talleres de conservación de alimentos cambiaron mi forma de organizar la despensa. ¡Nada se echa a perder ahora!",
        valoracion: 5
    },
    {
        nombre: "Javier Ruiz",
        fecha: "28/05/2023",
        texto: "Funcionalidad útil: la calculadora de porciones me ayuda a comprar justo lo necesario para la semana.",
        valoracion: 4
    },
    {
        nombre: "Lucía Fernández",
        fecha: "20/05/2023",
        texto: "Me encantaría que agreguen más opciones para compartir alimentos con vecinos en mi zona.",
        valoracion: 3
    }
];

// Función para mostrar estrellas de valoración
function mostrarValoracion(puntuacion) {
    let estrellas = '';
    for (let i = 1; i <= 5; i++) {
        estrellas += i <= puntuacion 
            ? '<i class="fas fa-star text-warning"></i>' 
            : '<i class="far fa-star text-warning"></i>';
    }
    return `<div class="ecofood-valoracion">${estrellas}</div>`;
}

// Renderizar comentarios
function renderizarComentarios() {
    const contenedor = document.getElementById('ecofood-lista-comentarios');
    if (!contenedor) return;

    contenedor.innerHTML = comentarios.map(comentario => `
        <div class="col-md-6">
            <div class="card ecofood-comentario h-100">
                <div class="card-body">
                    <div class="d-flex justify-content-between align-items-start mb-2">
                        <h5 class="card-title mb-0">${comentario.nombre}</h5>
                        <small class="text-muted">${comentario.fecha}</small>
                    </div>
                    ${mostrarValoracion(comentario.valoracion)}
                    <p class="card-text mt-2">${comentario.texto}</p>
                </div>
            </div>
        </div>
    `).join('');
}

// Manejar envío de nuevo comentario
document.getElementById('ecofood-form-comentario')?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const nombre = document.getElementById('ecofood-nombre').value;
    const comentarioTexto = document.getElementById('ecofood-comentario').value;

    if (nombre && comentarioTexto) {
        const nuevoComentario = {
            nombre,
            fecha: new Date().toLocaleDateString('es-ES'),
            texto: comentarioTexto,
            valoracion: 0 // Valoración por defecto
        };

        comentarios.unshift(nuevoComentario);
        renderizarComentarios();
        this.reset();
        
        // Mostrar feedback
        const feedback = document.createElement('div');
        feedback.className = 'alert alert-success mt-3';
        feedback.textContent = '¡Gracias por tu comentario!';
        this.appendChild(feedback);
        
        setTimeout(() => feedback.remove(), 3000);
    }
});

// Inicialización
document.addEventListener('DOMContentLoaded', renderizarComentarios);