// Configuración de Supabase (Usamos solo la clave pública por seguridad)
const SUPABASE_URL = 'https://npupnlhjntmsnszwpzso.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_VGdoyF5S6PnFW7i9cflbWA_uaVXDmGM';

// Inicializar el cliente de Supabase
const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

document.addEventListener('DOMContentLoaded', () => {

    // 1. Validación e Intercepción del Registro
    const registerForm = document.getElementById('registerForm');
    if (registerForm) {
        registerForm.addEventListener('submit', async function(event) {
            event.preventDefault();

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            if (password.length < 6) {
                alert('⚠️ La contraseña debe tener al menos 6 caracteres.');
                return;
            }

            console.log('Formulario validado. Credenciales listas para Supabase.');
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