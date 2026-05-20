// Esperar a que el documento cargue
document.addEventListener('DOMContentLoaded', () => {

    // 1. Validación del Registro
    const registerForm = document.getElementById('registerForm');
    if (registerForm) {
        registerForm.addEventListener('submit', function(event) {
            const password = document.getElementById('password').value;

            // Validar longitud de contraseña
            if (password.length < 6) {
                event.preventDefault(); // Detiene el envío
                alert('⚠️ La contraseña debe tener al menos 6 caracteres por seguridad.');
                return;
            }
            // Aqui tenemos que conectar SUPABASE
            console.log('Validación superada. Listo para registrar en Supabase.');
        });
    }

    // 2. Efecto visual en la barra de navegación (Sombra al hacer scroll)
    const nav = document.querySelector('nav');
    if (nav) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 10) {
                nav.classList.add('shadow-md', 'transition-shadow');
                nav.classList.remove('shadow-sm');
            } else {
                nav.classList.remove('shadow-md', 'transition-shadow');
                nav.classList.add('shadow-sm');
            }
        });
    }
});