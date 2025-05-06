/**
 * EcoFood Community - Comentarios JS
 * Manejo de formulario y lista dinámica de comentarios
 */

const comentarios = [
    {
        nombre: "Ana Pérez",
        email: "ana@ejemplo.com",
        fecha: new Date().toLocaleDateString('es-ES'),
        texto: "Excelente iniciativa contra el desperdicio de alimentos. He aprendido a organizar mejor mis compras semanales."
    },
    {
        nombre: "Carlos Gómez",
        email: "carlos@ejemplo.com",
        fecha: new Date().toLocaleDateString('es-ES'),
        texto: "Me encantaría que agreguen más talleres prácticos sobre conservación de alimentos."
    }
];

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