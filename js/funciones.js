function validarRegistro() {
    const nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const confirmarPassword = document.getElementById('confirmarPassword').value;
    
    let valido = true;
    
    if (nombre === '') {
        document.getElementById('errorNombre').textContent = 'El nombre es requerido';
        valido = false;
    } else {
        document.getElementById('errorNombre').textContent = '';
    }
    
    if (email === '') {
        document.getElementById('errorEmail').textContent = 'El correo electrónico es requerido';
        valido = false;
    } else if (!validarEmail(email)) {
        document.getElementById('errorEmail').textContent = 'Ingrese un correo electrónico válido';
        valido = false;
    } else {
        document.getElementById('errorEmail').textContent = '';
    }
    
    if (password === '') {
        document.getElementById('errorPassword').textContent = 'La contraseña es requerida';
        valido = false;
    } else if (password.length < 6) {
        document.getElementById('errorPassword').textContent = 'La contraseña debe tener al menos 6 caracteres';
        valido = false;
    } else {
        document.getElementById('errorPassword').textContent = '';
    }
    
    if (confirmarPassword === '') {
        document.getElementById('errorConfirmarPassword').textContent = 'Confirme su contraseña';
        valido = false;
    } else if (password !== confirmarPassword) {
        document.getElementById('errorConfirmarPassword').textContent = 'Las contraseñas no coinciden';
        valido = false;
    } else {
        document.getElementById('errorConfirmarPassword').textContent = '';
    }
    
    if (valido) {
        mostrarMensajeExito('Registro exitoso. Redirigiendo...');
        setTimeout(() => {
            window.location.href = 'home.html';
        }, 2000);
    }
    
    return false; 
}

function validarLogin() {
    const email = document.getElementById('emailLogin').value.trim();
    const password = document.getElementById('passwordLogin').value;
    
    let valido = true;
    
    if (email === '') {
        document.getElementById('errorEmailLogin').textContent = 'El correo electrónico es requerido';
        valido = false;
    } else if (!validarEmail(email)) {
        document.getElementById('errorEmailLogin').textContent = 'Ingrese un correo electrónico válido';
        valido = false;
    } else {
        document.getElementById('errorEmailLogin').textContent = '';
    }
    
    if (password === '') {
        document.getElementById('errorPasswordLogin').textContent = 'La contraseña es requerida';
        valido = false;
    } else {
        document.getElementById('errorPasswordLogin').textContent = '';
    }
    
    if (valido) {
        mostrarMensajeExito('Inicio de sesión exitoso. Redirigiendo...');
        setTimeout(() => {
            window.location.href = 'home.html';
        }, 2000);
    }
    
    return false; 
}

function validarEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function mostrarMensajeExito(mensaje) {
    const divMensaje = document.createElement('div');
    divMensaje.className = 'alert alert-success mt-3';
    divMensaje.textContent = mensaje;
    
    const form = document.querySelector('form');
    form.appendChild(divMensaje);
    
    setTimeout(() => {
        divMensaje.remove();
    }, 2000);
}

document.addEventListener('DOMContentLoaded', function() {
    const formRegistro = document.getElementById('formRegistro');
    const formLogin = document.getElementById('formLogin');
    
    if (formRegistro) {
        formRegistro.addEventListener('submit', function(e) {
            e.preventDefault();
            validarRegistro();
        });
    }
    
    if (formLogin) {
        formLogin.addEventListener('submit', function(e) {
            e.preventDefault();
            validarLogin();
        });
    }
});