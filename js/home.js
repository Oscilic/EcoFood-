/**
 * EcoFood Community - Home JS
 * Datos del usuario y estadísticas dinámicas
 */

// Datos de ejemplo (en un proyecto real vendrían de una API)
const usuario = {
    nombre: "Juan González",
    estadisticas: {
        comentarios: 5,
        eventos: 3,
        impactados: 12,
        alimentos: "8kg"
    }
};

// Cargar datos del usuario
function cargarDatosUsuario() {
    document.getElementById('nombre-usuario').textContent = usuario.nombre;
    
    const contenedor = document.getElementById('estadisticas-usuario');
    if (!contenedor) return;

    contenedor.innerHTML = `
        <div class="col-md-3">
            <h3>${usuario.estadisticas.comentarios}</h3>
            <p>Comentarios</p>
        </div>
        <div class="col-md-3">
            <h3>${usuario.estadisticas.eventos}</h3>
            <p>Eventos asistidos</p>
        </div>
        <div class="col-md-3">
            <h3>${usuario.estadisticas.impactados}</h3>
            <p>Personas impactadas</p>
        </div>
        <div class="col-md-3">
            <h3>${usuario.estadisticas.alimentos}</h3>
            <p>Alimentos salvados</p>
        </div>
    `;
}


document.getElementById('logout-btn')?.addEventListener('click', () => {

    window.location.href = 'index.html';
});

// Inicialización
document.addEventListener('DOMContentLoaded', cargarDatosUsuario);

// Animación para Misión y Visión
function animarSecciones() {
    const secciones = document.querySelectorAll('.ecofood-mision, .ecofood-vision');
    secciones.forEach((seccion, index) => {
        setTimeout(() => {
            seccion.style.opacity = '1';
            seccion.style.transform = 'translateY(0)';
        }, index * 200);
    });
}

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
    cargarDatosUsuario();
    animarSecciones();
});